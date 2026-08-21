"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-8 md:p-14 border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-800/50">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-4">
              Let’s Build Something Amazing Together
            </h2>
            <p className="text-slate-300 text-base mb-8 leading-relaxed">
              Have a project in mind, need a full stack website, custom graphics, or remote tech support? Contact me directly!
            </p>

            <div className="space-y-6">
              <a
                href="tel:01712631560"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase">Phone / WhatsApp</p>
                  <p className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    01712631560
                  </p>
                </div>
              </a>

              <a
                href="mailto:sabbirrajcpsc@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase">Email Address</p>
                  <p className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    sabbirrajcpsc@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase">Location</p>
                  <p className="text-base font-bold text-white">Bangladesh (Remote Worldwide)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle size={56} className="text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-300 text-sm">
                  Thank you for reaching out, SM SABBIR HOSSAIN will contact you back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Tanvir Ahmed"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="e.g. tanvir@example.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your requirement (Web Dev, Design, Tech Support)..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-purple-950/50"
                >
                  <Send size={18} /> Send Message Now
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}