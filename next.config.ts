import type { NextConfig } from "next";

const nextConfig = {
  output: "export", // nur das! (für statisches Deploy)
  images: { unoptimized: true }, // falls next/image verwendet wird
  trailingSlash: true, // oft nötig für GH Pages
  // kein custom distDir, keine experimentals zum Testen
};

export default nextConfig;
