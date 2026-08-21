"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, Code2, Palette, ShieldCheck, PhoneCall } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-hero-gradient"
    >
      {/* Background Parallax Mesh Glows */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-[120px]" />
      </motion.div>

      <motion.div
        style={{ opacity: opacityContent }}
        className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center"
      >
        {/* Animated Avatar Box */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-lg opacity-75 animate-pulse" />
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-slate-900 overflow-hidden shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="SM SABBIR HOSSAIN - techsabbir4u"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs md:text-sm font-medium tracking-wide uppercase mb-4 shadow-lg shadow-cyan-950/50"
        >
          ✦ Freelancer Portfolio • techsabbir4u ✦
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          SM SABBIR HOSSAIN
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl font-light text-slate-300 max-w-3xl mb-8 leading-relaxed"
        >
          Full Stack Web Developer <span className="text-cyan-400">|</span> Graphics Designer <span className="text-purple-400">|</span> Remote Tech Support
        </motion.p>

        {/* Feature Tags */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-10 text-xs md:text-sm"
        >
          <span className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2 text-slate-300">
            <Code2 size={16} className="text-cyan-400" /> Full Stack Coding
          </span>
          <span className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2 text-slate-300">
            <Palette size={16} className="text-purple-400" /> Professional Design
          </span>
          <span className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2 text-slate-300">
            <ShieldCheck size={16} className="text-pink-400" /> 24/7 Tech Support
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white shadow-xl hover:shadow-cyan-500/25 transition-all hover:scale-105 text-center"
          >
            Hire Me Now
          </a>
          <a
            href="tel:01712631560"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold glass-panel text-slate-200 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall size={18} className="text-cyan-400" />
            01712631560
          </a>
        </motion.div>
      </motion.div>

      {/* Down Arrow */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}