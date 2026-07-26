import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = isPagesBuild && repository ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
