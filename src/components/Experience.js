"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContent } from "../hooks/useContent";

function TimelineItem({ item, index, total }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="relative pl-8 pb-12 last:pb-0">
      {index < total - 1 && <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />}
      <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-accent bg-white dark:bg-gray-950 shadow-sm shadow-indigo-500/20" />
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-accent dark:hover:border-accent transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.role}</h3>
            <p className="text-sm text-accent font-medium">{item.company}</p>
          </div>
          <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{item.period}</span>
        </div>
        <ul className="space-y-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { experience } = useContent();
  return (
    <section id="experience" className="bg-white dark:bg-gray-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Career</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">A track record of shipping products, driving measurable outcomes, and growing cross-functional teams.</p>
        </div>
        <div className="max-w-3xl">
          {experience.map((item, i) => <TimelineItem key={item.role} item={item} index={i} total={experience.length} />)}
        </div>
      </div>
    </section>
  );
}
