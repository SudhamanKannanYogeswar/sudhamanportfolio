"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContent } from "../hooks/useContent";

const tagColors = {
  PRD: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  Growth: "bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800",
  "0→1": "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
};

function CaseStudyCard({ study, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 flex flex-col"
    >
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${tagColors[study.tag] || tagColors["0→1"]}`}>{study.tag}</span>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-1">{study.title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{study.context}</p>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          <span className="font-semibold text-gray-800 dark:text-gray-200">Problem: </span>{study.problem}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          <span className="font-semibold text-gray-800 dark:text-gray-200">Approach: </span>{study.approach}
        </p>
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">Key Features</p>
          <ul className="space-y-1">
            {study.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{f}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-5">
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">Success Metrics</p>
          <div className="flex flex-wrap gap-1.5">
            {study.metrics.map((m) => (
              <span key={m} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{m}</span>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <div className="flex flex-wrap gap-1.5">
            {study.tools.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-accent border border-indigo-200 dark:border-indigo-800">{t}</span>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <a href={study.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-indigo-600 dark:hover:text-accent-light transition-colors">
            {study.linkLabel}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const { caseStudies } = useContent();
  return (
    <section id="case-studies" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">PM Case Studies</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Product thinking in practice</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">Structured case studies covering PRDs, user research, feature prioritisation, and wireframes — showing how I approach product problems end to end.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {caseStudies.map((s, i) => <CaseStudyCard key={s.id} study={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
