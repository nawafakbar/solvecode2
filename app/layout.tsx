import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/component/layout/Footer";
import CardNav from '@/component/layout/CardNav'
import SplashCursor from "@/component/ui/SplashCursor";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  // Wajib isi weight (ketebalan) yang mau dipakai. 
  // 400=Biasa, 500=Sedang, 600=Agak Tebal, 700=Bold
  weight: ["400", "500", "600", "700"], 
});

const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

export const metadata: Metadata = {
  title: "SolveCode.id",
  description: "Company Profile Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white overflow-x-hidden`}>
        {/* Cursor Effect ditaruh paling atas */}
        <SplashCursor /> 
        
        <div className="fixed top-0 left-0 w-full z-50">
        <CardNav
        logo="/logos.png"
        logoAlt="Company Logo"
        items={items}
        baseColor="transparent"
        className="
          backdrop-blur-lg 
          bg-white/10 
          border 
          border-white/20 
          shadow-lg 
          rounded-2xl    /* <--- ini yang bikin rounded balik */
        "
        menuColor="#fff"
        buttonBgColor="#fff"
        buttonTextColor="#000"
        ease="power3.out"
      />
      </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}