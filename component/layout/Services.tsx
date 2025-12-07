"use client";

import { useState } from "react";
import DarkVeil from '@/component/ui/DarkVeil';


const services = [
  {
    id: 1,
    title: "Web Development",
    subtitle: "High Performance Web App",
    description: "Kami membangun website yang tidak hanya cantik, tapi juga cepat (High Performance) dan ramah mesin pencari (SEO). Menggunakan stack modern untuk dominasi bisnis Anda.",
    image: "/pic2.png", // Tech Cyberpunk vibes
  },
  {
    id: 2,
    title: "Mobile Development",
    subtitle: "Android & iOS Ecosystem",
    description: "Jangkau genggaman pelanggan dengan aplikasi mobile native atau cross-platform. Performa mulus, notifikasi real-time, dan UI yang memanjakan jari pengguna.",
    image: "/pic6.png",
  },
  {
    id: 3,
    title: "UI/UX Design",
    subtitle: "Human Centered Design",
    description: "Desain adalah tentang bagaimana sesuatu bekerja. Kami merancang antarmuka yang intuitif, mengurangi friksi user, dan meningkatkan konversi penjualan.",
    image: "/pic1.png",
  },
  {
    id: 4,
    title: "Graphic Design",
    subtitle: "Visual Identity System",
    description: "Branding visual yang kuat membuat bisnis Anda diingat dalam 3 detik pertama. Logo, Social Media Kit, hingga Marketing Assets yang berkarakter.",
    image: "/solve 5.png",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative flex w-full min-h-screen items-center justify-center py-12 bg-black text-white overflow-hidden">

      {/* DARKVEIL BACKGROUND */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] overflow-hidden rotate-180 z-0">
        <div style={{ width: '100%', height: '100%' }}>
          <DarkVeil />
        </div>
      </div>
      {/* Decorative Glow Background (Ambience) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER: Big & Bold */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Our Premium Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* KOLOM KIRI: IMAGE SHOWCASE (5 Kolom) */}
          {/* Desain Frame Kaca + Glow */}
          <div className="lg:col-span-5 justify-self-center relative h-[500px] w-[400px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-sm order-2 lg:order-1 group">
             {/* Glow Effect di border saat hover container */}
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             
             {services.map((item, index) => (
               <div 
                 key={item.id}
                 className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                     activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                 }`}
               >
                 <img 
                   src={item.image} 
                   alt={item.title}
                   className="w-full h-full object-cover"
                 />
                 {/* Overlay Gradient Elegan */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                 
                 {/* Floating Badge di atas gambar */}
                 <div className="absolute bottom-8 left-8 border-cyan-500 pl-4">
                    <p className="text-cyan-300 text-sm font-medium tracking-wider mb-1">Solvecode.id</p>
                    <h3 className="text-3xl font-reguler text-white leading-none">{item.title}</h3>
                 </div>
               </div>
             ))}
          </div>

          {/* KOLOM KANAN: INTERACTIVE LIST (7 Kolom) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-2 order-1 lg:order-2">
            {services.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer group p-6 rounded-2xl transition-all duration-500 border ${
                  activeIndex === index 
                    ? "border-transparent" // Active State: Glow
                    : "bg-transparent border-transparent hover:bg-white/[0.02]" // Inactive State
                }`}
              >
                {/* Background Gradient Geser saat Active */}
                <div className={`absolute inset-0 rounded-2xl${activeIndex === index ? 'opacity-100' : ''}`} />

                <div className="relative z-10 flex items-start gap-6">
                    {/* NOMOR URUT BESAR (01, 02) */}
                    <span className={`text-4xl font-bold transition-colors duration-300 ${
                        activeIndex === index ? "text-cyan-400" : "text-neutral-800 group-hover:text-neutral-700"
                    }`}>
                        0{index + 1}
                    </span>

                    <div className="flex-1">
                        {/* Judul & Icon Accordion */}
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <h3 className={`text-2xl font-semibold transition-colors duration-300 ${
                                    activeIndex === index ? "text-white" : "text-gray-400 group-hover:text-white"
                                }`}>
                                    {item.title}
                                </h3>
                            </div>

                            {/* Arrow Indicator */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                                activeIndex === index ? "bg-cyan-500 border-cyan-500 rotate-45" : "border-white/10 group-hover:border-white/30"
                            }`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={activeIndex === index ? "text-black" : "text-white"}>
                                    <path d="M7 17L17 7" />
                                    <path d="M7 7h10v10" />
                                </svg>
                            </div>
                        </div>

                        {/* DESKRIPSI (Animation Grid Rows) */}
                        <div 
                            className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                                activeIndex === index ? "grid-rows-[1fr] opacity-100 pt-2" : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden">
                                <p className="text-gray-400 leading-relaxed text-justify text-sm md:text-sm border-t border-white/10 pt-4">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}