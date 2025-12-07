"use client";

import AnimatedContent from '@/component/ui/AnimatedContent';
import CircularGallery from '@/component/ui/CircularGallery';
import LiquidEther from '@/component/ui/LiquidEther';
import Services from '@/component/layout/Services';
import Silk from "@/component/ui/Silk";
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      
      {/* ================= HERO SECTION ================= */}
      {/* Kasih class 'relative' supaya backgroundnya terkurung di section ini aja */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND FLOATING LINES */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#0048ffff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-black/5 pointer-events-none" />

      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="ease.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0.5}
      >
      
      {/* HERO CONTENT — FULL CENTER */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 flex flex-col items-center justify-center gap-6">

        {/* BADGE */}
        <div className="inline-block px-4 py-1 text-sm font-regular text-white-300 border border-cyan-500/30 rounded-full bg-cyan-900/20 backdrop-blur-sm">
          ✨ Quick Solution, Accurate Task
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          We Build Solutions, <br /> 
          We Craft Digital Experiences.
        </h1>

        {/* BUTTONS */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <button className="px-5 py-2 bg-white text-black font-medium rounded-full hover:scale-105 transition-all duration-300">
            Get Started
          </button>

          <button className="px-5 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>

      </div>
      </AnimatedContent>

    </section>


      {/* ================= SECTION LAIN (CONTOH) ================= */}
      {/* Background Floating Lines TIDAK AKAN muncul di sini */}
      <section className="tap bg-neutral-900 py-10" style={{ position: 'relative' }}>
        <h1 className='flex items-center justify-center text-4xl md:text-3xl font-medium leading-tight'>Services</h1>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
      </section>
      {/* <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>
      </section> */}

      {/* SECTION ABOUT US */}
      <section className="relative bg-black overflow-hidden">
        {/* BACKGROUND FLOATING LINES */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          
          mouseForce={20}
          cursorSize={100}

          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}

          isBounce={false}

          autoDemo={true}
          autoSpeed={1.0}          // lebih cepat → tetap smooth
          autoIntensity={2.2}

          autoResumeDelay={0.5}      // <--- INI YANG HILANGKAN PAUSE
          autoRampDuration={0.3}   // lebih responsif
          takeoverDuration={2}     // no freeze ketika pindah control
        />

      </div>
        <div className="container mx-auto px-6">
            
            {/* Grid Layout: Kiri Teks, Kanan 3D */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={true}
                  duration={1.2}
                  ease="ease.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0.5}
                >
                {/* BAGIAN KIRI: Teks & Content */}
                <div className="space-y-6 order-2 lg:order-1 pt-3">
                    <div className="inline-block px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/30 rounded-full">
                        About Us
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                        Bridging Imagination <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            into Reality.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        Kami adalah tim kreatif yang berdedikasi untuk menciptakan solusi digital masa depan. 
                        Dengan menggabungkan desain estetis dan teknologi mutakhir, kami membantu bisnis Anda 
                        tampil beda di era digital.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-2">
                        <div>
                            <h3 className="text-3xl font-semibold text-white">20+</h3>
                            <p className="text-sm text-gray-500">Projects Completed</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold text-white">98%</h3>
                            <p className="text-sm text-gray-500">Client Satisfaction</p>
                        </div>
                    </div>

                    <button className="mt-3 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                        Meet the Team
                    </button>
                </div>
                </AnimatedContent>

                {/* BAGIAN KANAN: Spline 3D Component */}
                <div className="h-[500px] w-full relative order-1 lg:order-2">
                    {/* Placeholder Spline Scene - Ganti URL di bawah dengan punya kamu sendiri */}
                    {/* Scene ini menampilkan robot 3D interaktif sebagai contoh */}
                    <Spline scene="https://prod.spline.design/cP7Xf-EyyvxeU6Wz/scene.splinecode" />
                    
                    {/* Gradient Overlay biar transisinya halus ke background (Optional) */}
                    <div className="absolute inset-0 pointer-events-none" />
                </div>

            </div>
        </div>
      </section>
      <AnimatedContent
       distance={150}
       direction="vertical"
       reverse={false}
       duration={1.2}
       ease="ease.out"
       initialOpacity={0}
       animateOpacity
       scale={1}
       threshold={0.2}
       delay={0.5}
       >           
      <Services />
      </AnimatedContent>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.6/build/spline-viewer.js"></script>
    </main>
  );
}