"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContent } from "../hooks/useContent";
import { useCounter } from "../hooks/useCounter";

function MetricCard({ value, suffix, label }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const count = useCounter(value, 1800, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-gray-900 dark:text-white">
        {count}<span className="text-accent">{suffix}</span>
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</div>
    </div>
  );
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function Hero() {
  const { metrics } = useContent();
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-gray-950 pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.08] mb-6">
            Sudhaman<br />
            <span className="text-gradient">Product Owner</span><br />
            <span className="text-gray-400 dark:text-gray-500 text-4xl sm:text-5xl lg:text-6xl font-bold">AI & SaaS Builder</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-6">
            I build scalable AI and SaaS products using data, user insights, and experimentation.
            From 0→1 platforms to LLM-powered features — outcome-obsessed, execution-driven.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
            <a href="https://untoldopinion.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors">
              <span>🚀</span> Founder, untoldopinion.com
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-medium">
              <span>🤝</span> Founding Member, Product Bros
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-20">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/25">
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:border-accent hover:text-accent dark:hover:border-accent-light dark:hover:text-accent-light transition-colors">
              Contact Me
            </a>
            <a href="https://drive.google.com/file/d/15Fjrj6F87cPBFv1g4NGTXpydXg50DDF8/view?usp=sharing" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:border-accent hover:text-accent dark:hover:border-accent-light dark:hover:text-accent-light transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
            {metrics.map((m) => <MetricCard key={m.label} {...m} />)}
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
