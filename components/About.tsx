"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Mail, Phone, Globe } from "lucide-react";

export default function About() {
  const highlights = [
    "Clean, scalable & maintainable code structure",
    "Modern React, Next.js, TypeScript & Tailwind CSS",
    "Creative Graphics & Brand Banner Design",
    "Remote Server, Network & System Troubleshooting",
    "SEO First-Page Ranking Structure & Core Web Vitals Optimization",
  ];

  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border border-slate-800 shadow-2xl">
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden mb-6 border border-slate-700">
              <Image
                src="/profile.jpg"
                alt="SM SABBIR HOSSAIN Photo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">SM SABBIR HOSSAIN</h3>
            <p className="text-cyan-400 font-medium mb-4">Founder & Lead Developer @ techsabbir4u</p>
            
            <div className="space-y-2 text-sm text-slate-300 border-t border-slate-800 pt-4">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-400" />
                <span>01712631560</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-purple-400" />
                <span>sabbirrajcpsc@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-pink-400" />
                <span>techsabbir4u.vercel.app</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Description */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-800/50">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
            Building High-Performance Digital Products & IT Solutions
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
            I am <strong className="text-white">SM SABBIR HOSSAIN</strong>, a passionate Full Stack Web Developer and Graphics Designer operating under the brand <strong className="text-cyan-400">techsabbir4u</strong>. I build fast, secure, and visually stunning web applications paired with top-tier graphic identity and reliable remote IT support.
          </p>

          <div className="space-y-3 mb-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
                <CheckCircle2 size={20} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}