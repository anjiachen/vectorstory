"use client";

import { useEffect, useRef } from "react";

export default function VisualBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = Math.floor(innerWidth * dpr);
      canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    type Star = { x: number; y: number; r: number; vx: number; vy: number; a: number };
    const starCount = Math.min(160, Math.floor((window.innerWidth * window.innerHeight) / 18000));
    const stars: Star[] = Array.from({ length: starCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: (Math.random() * 1.2 + 0.4) * dpr,
      vx: (Math.random() - 0.5) * 0.08 * dpr,
      vy: (Math.random() - 0.5) * 0.08 * dpr,
      a: Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // soft dark vignette
      const g = ctx.createRadialGradient(canvas.width / 2, canvas.height * 0.4, 0, canvas.width / 2, canvas.height * 0.4, Math.max(canvas.width, canvas.height) * 0.8);
      g.addColorStop(0, "rgba(255,255,255,0.03)");
      g.addColorStop(1, "rgba(0,0,0,0.0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // stars
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = canvas.width; if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height; if (s.y > canvas.height) s.y = 0;
        ctx.globalAlpha = s.a;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animationFrame = requestAnimationFrame(draw);
    };
    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Canvas 星尘 */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* 流动渐变 Blobs */}
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      {/* 斜向光束 */}
      <div className="beam beam-left" />
      <div className="beam beam-right" />
      {/* 同心环 */}
      <div className="rings" />
    </div>
  );
}


