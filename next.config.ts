const nextConfig = {
  output: "export", // nur das! (für statisches Deploy)
  images: { unoptimized: true },
  trailingSlash: true, //
  // kein custom distDir, keine experimentals zum Testen
};

export default nextConfig;
