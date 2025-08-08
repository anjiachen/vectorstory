import type { NextConfig } from "next";

// GitHub Project Pages 部署到 anjiachen.github.io/vectorstory
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const repoBase = "/vectorstory";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // 仅在部署到 GitHub Pages 时启用 basePath/assetPrefix
  ...(isGithubPages
    ? {
        basePath: repoBase,
        assetPrefix: repoBase + "/",
      }
    : {}),
};

export default nextConfig;
