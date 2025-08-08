import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    if (!file || typeof file === "string") {
      return NextResponse.json({ ok: false, message: "缺少文件" }, { status: 400 });
    }

    const arrayBuffer = await (file as File).arrayBuffer();
    const input = Buffer.from(arrayBuffer);

    // 读取为 RGBA，保留 alpha，将 RGB 设为白色
    const img = sharp(input).ensureAlpha();
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3];
      // 仅对有透明度的像素保留其 alpha，强制 RGB 为 255（白）
      data[i] = 255; // R
      data[i + 1] = 255; // G
      data[i + 2] = 255; // B
      data[i + 3] = a; // A 保持
    }

    const outPng = await sharp(data, {
      raw: { width: info.width, height: info.height, channels: 4 },
    })
      .png({ compressionLevel: 9 })
      .toBuffer();

    const outPath = path.join(process.cwd(), "public", "logo-company.png");
    await fs.writeFile(outPath, outPng);

    return NextResponse.json({ ok: true, path: "/logo-company.png" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


