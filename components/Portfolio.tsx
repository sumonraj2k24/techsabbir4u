"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Full Stack Platform",
      category: "Full Stack Development",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      desc: "High-performance e-commerce engine with payment gateway, order tracking, and admin dashboard.",
    },
    {
      title: "Brand Vector Banner & Graphics Kit",
      category: "Graphics Design",
      tech: ["Photoshop", "Illustrator", "Figma", "UI/UX"],
      desc: "Complete visual identity package including 12K greeting banners, vector artwork, and social templates.",
    },
    {
      title: "Remote Server Deployment & CI/CD",
      category: "Remote Tech Support",
      tech: ["Docker", "Linux CLI", "GitHub Actions", "Vercel"],
      desc: "Automated deployment pipeline and Linux server configuration for high availability apps.",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-800/50">
          Portfolio Showcase
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4">
          Featured Works & Projects
        </h2>
        <p className="text-slate-400 text-base md:text-lg">
          A glimpse into recent web development, graphics design, and cloud deployment projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-panel rounded-3xl p-6 border border-slate-800 flex flex-col justify-between hover:border-purple-500/50 transition-all hover:-translate-y-2"
          >
            <div>
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block mb-2">
                {proj.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">{proj.desc}</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Layers size={14} /> Live Case Study
                </span>
                <span className="text-xs font-bold text-cyan-400 flex items-center gap-1 cursor-pointer hover:underline">
                  View Details <ExternalLink size={12} />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}