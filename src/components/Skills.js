"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContent } from "../hooks/useContent";

const categoryMeta = {
  Product: { icon: "🧭", color: "from-indigo-500 to-purple-500", bg: "bg-indigo-50 dark:bg-indigo-950/40", border: "border-indigo-200 dark:border-indigo-800", tag: "bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300" },
  Analytics: { icon: "📊", color: "from-blue-500 to-cyan-500", bg: "bg-blue-50 dark:bg-blue-950/40", border: "border-blue-200 dark:border-blue-800", tag: "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300" },
  Tools: { icon: "🛠", color: "from-violet-500 to-pink-500", bg: "bg-violet-50 dark:bg-violet-950/40", border: "border-violet-200 dark:border-violet-800", tag: "bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300" },
};

function SkillCategory({ name, items, meta, index }) {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className={`rounded-2xl border p-6 ${meta.bg} ${meta.border}`}>
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.color} flex items-center justify-center text-lg shadow-sm`}>{meta.icon}</div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span key={skill} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.12 + i * 0.05 }}
            className={`text-sm font-medium px-3 py-1.5 rounded-lg ${meta.tag}`}>
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { skills } = useContent();
  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Capabilities</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Tools</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">A full-stack product toolkit — from strategy and roadmapping to SQL queries and analytics dashboards.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([name, items], i) => (
            <SkillCategory key={name} name={name} items={items} meta={categoryMeta[name] || categoryMeta.Tools} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
