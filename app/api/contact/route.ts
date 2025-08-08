import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // 在实际生产中，这里可以写入 CRM / 邮件通知 / 飞书机器人等
    console.log("Contact form:", body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}


