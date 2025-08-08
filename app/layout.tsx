import BrandMark from "@/components/BrandMark";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "响亮章节｜企业传记官网",
  description:
    "响亮章节专注为企业撰写有温度、有力量的企业传记，帮助品牌以更立体的故事与客户建立信任。",
  keywords: [
    "企业传记",
    "企业史",
    "品牌故事",
    "企业文化",
    "内容营销",
    "品牌建设",
  ],
  openGraph: {
    title: "响亮章节｜为企业写得进心的传记",
    description:
      "以真实故事与专业写作，打造更有温度的品牌名片。",
    type: "website",
    locale: "zh_CN",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased font-sans bg-[#0a0a0a] text-[#eaeaea]">
        {/* 顶部细分割线的渐变 */}
        <div className="fixed inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-50" />
        <header className="fixed inset-x-0 top-3 z-40">
          <div className="container-x">
            <div className="glass flex items-center justify-between rounded-2xl px-5 py-3.5">
              <a href="#top" className="flex items-center gap-2.5">
                <BrandMark height={32} />
                <span className="text-base font-semibold tracking-wide">响亮章节</span>
              </a>
              <nav className="hidden sm:flex items-center gap-7 text-sm text-white/80">
                <a href="#services" className="hover:text-white">服务</a>
                <a href="#cases" className="hover:text-white">案例</a>
                <a href="#contact" className="hover:text-white">联系</a>
              </nav>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
