"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContent } from "../hooks/useContent";

const tagColors = {
  "Product Career": "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
  "AI / Product": "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  Analytics: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800",
};

function ArticleCard({ article, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.a ref={ref} href={article.url} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="group block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColors[article.tag] || tagColors.Analytics}`}>{article.tag}</span>
        <span className="text-xs text-gray-400">{article.date}</span>
      </div>
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent dark:group-hover:text-accent-light transition-colors leading-snug">{article.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{article.summary}</p>
      <div className="flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:gap-2.5 transition-all">
        Read article
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </motion.a>
  );
}

export default function Writing() {
  const { articles } = useContent();
  return (
    <section id="writing" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Thought Leadership</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Writing</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">Product thinking, analytics, and experimentation — written for practitioners.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => <ArticleCard key={a.title} article={a} index={i} />)}
        </div>
      </div>
    </section>
  );
}
