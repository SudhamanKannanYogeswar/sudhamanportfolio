"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContent } from "../hooks/useContent";

const tagColors = {
  Growth: "bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800",
  Analytics: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  Compliance: "bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800",
  "0→1": "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800",
};

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${tagColors[project.tag] || tagColors.Analytics}`}>
              {project.tag}
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">{project.title}</h3>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-2xl font-extrabold text-accent leading-none">
              {project.metric}{project.metricLabel.startsWith("%") ? "%" : "+"}
            </div>
            <div className="text-xs text-gray-400 mt-0.5 max-w-[80px] leading-tight">
              {project.metricLabel.replace(/^[%+]/, "")}
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          <span className="font-semibold text-gray-800 dark:text-gray-200">Problem: </span>{project.problem}
        </p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div key="details" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
              <div className="pt-2 pb-4 space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Approach: </span>{project.approach}
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Tools used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
                  <p className="text-sm text-indigo-800 dark:text-indigo-300">
                    <span className="font-semibold">Impact: </span>{project.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button onClick={() => setExpanded((e) => !e)} className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-indigo-600 dark:hover:text-accent-light transition-colors mt-1">
          {expanded ? "Show less" : "View case study"}
          <motion.svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { projects } = useContent();
  return (
    <section id="projects" className="bg-white dark:bg-gray-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Case Studies</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects that moved the needle</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">Real problems, structured approaches, and quantified outcomes. Click any card to expand the full case study.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
