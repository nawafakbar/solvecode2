import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10">
      {/* Logo Perusahaan */}
      <div className="text-2xl font-bold text-white tracking-tighter">
        NEXUS<span className="text-cyan-500">CORP</span>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
        <Link href="#" className="hover:text-cyan-400 transition-colors">Services</Link>
        <Link href="#" className="hover:text-cyan-400 transition-colors">Portfolio</Link>
        <Link href="#" className="hover:text-cyan-400 transition-colors">About</Link>
      </div>

      {/* CTA Button */}
      <button className="px-5 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-cyan-400 transition-all">
        Let's Talk
      </button>
    </nav>
  );
}