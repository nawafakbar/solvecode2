import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <--- WAJIB: Biar jadi HTML statis
  images: {
    unoptimized: true, // <--- WAJIB: Biar gambar tidak error tanpa server Node.js
  },
};

export default nextConfig;