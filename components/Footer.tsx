import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-500">
            <Image src="/profile.jpg" alt="techsabbir4u Icon" fill className="object-cover" />
          </div>
          <span className="text-lg font-bold text-white">techsabbir4u</span>
        </div>

        <p className="text-xs text-slate-400 text-center">
          © {new Date().getFullYear()} <strong className="text-slate-200">SM SABBIR HOSSAIN</strong>. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <a href="tel:01712631560" className="hover:text-cyan-400 transition-colors">
            01712631560
          </a>
          <span>•</span>
          <a href="mailto:sabbirrajcpsc@gmail.com" className="hover:text-cyan-400 transition-colors">
            sabbirrajcpsc@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}