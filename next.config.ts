import type { NextConfig } from "next";

// GitHub Project Pages 部署到 anjiachen.github.io/vectorstory
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const repoBase = "/vectorstory";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  env: {
    // 在构建时写入给客户端使用
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? repoBase : "",
  },
  // 仅在部署到 GitHub Pages 时启用 basePath/assetPrefix
  ...(isGithubPages
    ? {
        basePath: repoBase,
        assetPrefix: repoBase + "/",
      }
    : {}),
};

export default nextConfig;
