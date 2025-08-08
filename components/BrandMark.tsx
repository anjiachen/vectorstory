"use client";

import { useState } from "react";

type Props = {
  height?: number;
  className?: string;
};

export default function BrandMark({ height = 28, className = "" }: Props) {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <img
        src="/logo-white.svg"
        height={height}
        style={{ height }}
        alt="响亮章节 Logo"
        className={className}
      />
    );
  }

  return (
    <img
      src="/logo-company.png"
      onError={() => setUseFallback(true)}
      height={height}
      style={{ height }}
      alt="响亮章节 Logo"
      className={
        "select-none object-contain drop-shadow-[0_6px_24px_rgba(255,255,255,0.25)] " +
        // 将任意彩色 logo 转为纯白显示
        "[filter:grayscale(1)_brightness(0)_invert(1)] " +
        className
      }
    />
  );
}


