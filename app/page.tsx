"use client";
import dynamic from "next/dynamic";

const VisualBackdrop = dynamic(() => import("@/components/VisualBackdrop"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-[100dvh]">
      {/* 背景光效 + 装饰 */}
      <VisualBackdrop />

      {/* Hero */}
      <section className="container-x pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="relative max-w-[920px]">
          {/* 背景品牌水印 */}
          <span className="pointer-events-none absolute -left-6 -top-8 text-[120px] sm:text-[160px] font-black tracking-tighter leading-none text-white/5 select-none">
            响亮章节
          </span>
          <p className="text-sm tracking-widest text-white/60">响亮章节 · CORPORATE BIOGRAPHY</p>
          <h1 className="mt-5 text-4xl sm:text-6xl font-light leading-tight tracking-[-0.02em]">
            让企业故事，被真正读懂
            <span className="ml-3 inline-block whitespace-nowrap bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
              响亮章节
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed">
            响亮章节专注企业传记创作。我们以深度采访 + 叙事写作，将企业从创立到跨越的关键节点，凝练为一本有温度、有力量的《企业传记》。
            当客户、合作伙伴、候选人与媒体翻开这本书，看到的不再是冰冷资质，而是你们的初心、抉择与长期主义。
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full px-6 text-sm font-medium text-black bg-white hover:bg-white/90 transition-colors"
            >
              预约咨询
          </a>
          <a
              href="#cases"
              className="inline-flex h-11 items-center rounded-full px-6 text-sm font-medium text-white/85 border border-white/20 hover:bg-white/5 transition-colors"
            >
              查看案例
            </a>
          </div>
          {/* 滚动关键词 */}
          <div className="mt-10 overflow-hidden">
            <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap text-white/70">
              {"深度采访 创始人访谈 非虚构写作 叙事结构 品牌资产 组织变革 技术突破 文化传承 IPO 故事梳理".split(" ").map((t) => (
                <span key={t} className="text-sm">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 信任背书 */}
      <section className="container-x py-10 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
          {[
            "科技/互联网",
            "先进制造",
            "消费/品牌",
            "医疗/生命科学",
          ].map((label) => (
            <div key={label} className="glass rounded-xl p-5 text-center">
              <p className="text-sm text-white/80">深耕领域</p>
              <p className="mt-2 text-lg font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 服务模块 */}
      <section id="services" className="container-x py-14 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">我们如何写出“有生命力”的企业传记</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "沉浸式深度采访",
              desc: "创始团队/骨干/客户多维访谈，重建关键时间线，打捞第一手细节。",
            },
            {
              title: "叙事非虚构写作",
              desc: "以章节体结构呈现人物抉择与企业进化，使阅读具有电影感与张力。",
            },
            {
              title: "出版级编辑与设计",
              desc: "资深编辑把关逻辑与节奏，设计团队统一视听语言，形成品牌资产。",
            },
          ].map((s) => (
            <div key={s.title} className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]">
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        {/* 指标带 */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { n: "300+", t: "深度采访小时" },
            { n: "50+", t: "企业传记项目" },
            { n: "95%", t: "复购与转介绍" },
            { n: "12 周", t: "标准交付周期" },
          ].map((k) => (
            <div key={k.t} className="rounded-xl border border-white/10 px-4 py-5 text-center bg-white/5">
              <div className="text-2xl font-semibold">{k.n}</div>
              <div className="mt-1 text-xs text-white/70">{k.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 案例模块 */}
      <section id="cases" className="container-x py-14 sm:py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">精选案例</h2>
          <a href="#contact" className="text-sm text-white/70 hover:text-white">获取完整案例清单 →</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-700/30 to-slate-900/40" />
              <div className="p-5">
                <p className="text-sm text-white/60">行业案例</p>
                <h3 className="mt-1 text-lg font-medium">《某龙头企业传》节选</h3>
                <p className="mt-2 text-sm text-white/65 line-clamp-2">
                  以关键抉择、组织变革与技术突破为核心线索，展现企业长期主义背后的底层能力……
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-14 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">常见问题</h2>
        <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
          {[
            {
              q: "项目周期多长？",
              a: "通常 6–12 周，视采访对象数量与资料复杂度而定。可加急排期。",
            },
            {
              q: "交付形式是什么？",
              a: "图文排版 PDF/印刷级可交付文件，亦可同步沉浸式网页长文版本。",
            },
            {
              q: "是否保密？",
              a: "签署保密协议；敏感信息经企业确认后方可公开。",
            },
          ].map((f) => (
            <details key={f.q} className="group p-5 open:bg-white/5">
              <summary className="cursor-pointer list-none text-base font-medium">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="container-x pb-24 sm:pb-32">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">预约一场 30 分钟探索电话</h2>
          <p className="mt-2 text-sm text-white/70">
            告诉我们你的企业阶段、写作诉求与期望呈现，我们将提供路线建议与样章试写方案。
          </p>
          {/* 静态站点（GitHub Pages）不支持服务端上传，这里仅在动态环境显示上传入口 */}
          {process.env.NEXT_PUBLIC_ENABLE_UPLOAD !== "false" && (
            <form
              className="mt-6 flex items-center gap-3"
              onSubmit={async (e) => {
                e.preventDefault();
                const input = (e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement) || null;
                if (!input || !input.files || !input.files[0]) return;
                const fd = new FormData();
                fd.append("file", input.files[0]);
                await fetch("/api/logo", { method: "POST", body: fd });
                alert("Logo 已处理为白色并应用，刷新即可查看");
              }}
            >
              <input type="file" accept="image/*" className="text-sm" />
              <button type="submit" className="h-10 rounded-lg bg-white/10 px-3 text-sm hover:bg-white/15">
                上传并白色化 Logo
              </button>
            </form>
          )}
          <form
            className="mt-6 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const formData = new FormData(form);
              const data = Object.fromEntries(formData.entries());
              fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              }).then(() => alert("已提交，我们会尽快联系你"));
            }}
          >
            <input
              name="name"
              placeholder="联系人姓名"
              required
              className="h-11 rounded-lg bg-white/5 px-3 outline-none focus:ring-2 focus:ring-white/20"
            />
            <input
              name="company"
              placeholder="公司名称"
              required
              className="h-11 rounded-lg bg-white/5 px-3 outline-none focus:ring-2 focus:ring-white/20"
            />
            <input
              name="phone"
              placeholder="手机号/微信"
              required
              className="h-11 rounded-lg bg-white/5 px-3 outline-none focus:ring-2 focus:ring-white/20"
            />
            <input
              name="email"
              type="email"
              placeholder="邮箱（可选）"
              className="h-11 rounded-lg bg-white/5 px-3 outline-none focus:ring-2 focus:ring-white/20"
            />
            <textarea
              name="needs"
              placeholder="你的诉求与目标（例如：周年庆、品牌升级、IPO 故事梳理…）"
              className="sm:col-span-2 min-h-28 rounded-lg bg-white/5 p-3 outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="sm:col-span-2 h-11 rounded-lg bg-white text-black font-medium hover:bg-white/90"
            >
              提交需求
            </button>
          </form>
    </div>
      </section>
    </main>
  );
}
