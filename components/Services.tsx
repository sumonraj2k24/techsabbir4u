"use client";

import { motion } from "framer-motion";
import { Code, Palette, Server, Cpu, Search, Sparkles } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      title: "Full Stack Web Development",
      description: "Custom web application development using React, Next.js, Node.js, Express, and PostgreSQL/MongoDB. Ultra-fast page speed and mobile responsiveness.",
      icon: Code,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Graphics Design & Branding",
      description: "High-resolution banner design, vector artwork, social media graphics, UI/UX mockups, and corporate brand identity tailored for your business.",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Remote Tech Support",
      description: "Remote IT assistance, server setup, Linux terminal management, Docker deployment, SSL configuration, and system optimization.",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "SEO Optimization & Web Audit",
      description: "On-page SEO, JSON-LD Schema integration, meta tag structure, speed tuning, and Google Search Console indexing for top ranking.",
      icon: Search,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-md border border-purple-800/50">
          Services Offered
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4">
          All-In-One Technical & Design Expertise
        </h2>
        <p className="text-slate-400 text-base md:text-lg">
          Delivering end-to-end digital excellence for individuals, startups, and enterprises worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {serviceList.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/50 transition-all group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                <Icon size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                <Sparkles size={14} /> Production Ready Quality
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}