"use client";

type Props = {
  height?: number;
  className?: string;
};

export default function BrandMark({ height = 28, className = "" }: Props) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const src = `${base}/logo-company.png?v=1`;

  return (
    <img
      src={src}
      height={height}
      style={{ height }}
      alt="响亮章节 Logo"
      className={
        "select-none object-contain drop-shadow-[0_6px_24px_rgba(255,255,255,0.25)] " +
        "[filter:grayscale(1)_brightness(0)_invert(1)] " +
        className
      }
    />
  );
}


