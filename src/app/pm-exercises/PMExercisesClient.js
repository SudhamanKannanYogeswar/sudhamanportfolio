"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { exercises } from "../../data/exercises";

const tagColors = {
  indigo: "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
  orange: "bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  green: "bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
  purple: "bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  red: "bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
  teal: "bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800",
};

const insightColors = {
  gap: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300",
  parity: "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300",
  lead: "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300",
};

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

function Pill({ children, color = "indigo" }) {
  return <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColors[color]}`}>{children}</span>;
}

function FormulaBox({ formula, note }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl p-4 mb-6">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Framework</p>
      <code className="text-sm font-mono text-accent font-bold">{formula}</code>
      {note && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{note}</p>}
    </div>
  );
}

function Takeaway({ text }) {
  return (
    <div className="mt-6 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
      <p className="text-sm text-indigo-800 dark:text-indigo-300"><span className="font-bold">Key takeaway: </span>{text}</p>
    </div>
  );
}

function OutcomeBox({ decision, outcome }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-6">
      <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Decision Made</p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{decision}</p>
      </div>
      <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
        <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-2">Outcome</p>
        <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">{outcome}</p>
      </div>
    </div>
  );
}

function RICEExercise({ ex }) {
  return (
    <>
      <FormulaBox formula={ex.framework} note={ex.frameworkNote} />
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{ex.context}</p>
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-2">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>{ex.table.headers.map((h) => <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{h}</th>)}</tr>
          </thead>
          <tbody>
            {ex.table.rows.map((row, i) => (
              <tr key={i} className={`border-t border-gray-100 dark:border-gray-800 ${i === 0 ? "bg-indigo-50/50 dark:bg-indigo-950/20" : "hover:bg-gray-50 dark:hover:bg-gray-800/40"}`}>
                {row.map((cell, j) => <td key={j} className={`px-4 py-3 ${j === row.length - 1 ? "font-bold text-accent" : "text-gray-700 dark:text-gray-300"}`}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mb-4">Highlighted row = #1 priority</p>
      <OutcomeBox decision={ex.decision} outcome={ex.outcome} />
      <Takeaway text={ex.takeaway} />
    </>
  );
}

function RCAExercise({ ex }) {
  return (
    <>
      <FormulaBox formula={ex.framework} note={ex.frameworkNote} />
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{ex.context}</p>
      <div className="space-y-3 mb-6">
        {ex.whys.map((w, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</div>
              {i < ex.whys.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 dark:bg-gray-700 mt-1" />}
            </div>
            <div className="pb-4">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{w.q}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{w.a}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 mb-4">
        <p className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide mb-1">Root Cause</p>
        <p className="text-sm text-red-800 dark:text-red-300 font-medium">{ex.rootCause}</p>
      </div>
      <OutcomeBox decision={ex.decision} outcome={ex.outcome} />
      <Takeaway text={ex.takeaway} />
    </>
  );
}

function MetricsExercise({ ex }) {
  return (
    <>
      <FormulaBox formula={ex.framework} note={ex.frameworkNote} />
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{ex.context}</p>
      <div className="text-center mb-6">
        <div className="inline-block px-6 py-3 rounded-2xl bg-accent text-white font-bold text-sm shadow-lg shadow-indigo-500/20">
          {ex.tree.northStar.value}
          <div className="text-xs font-normal opacity-80 mt-0.5">{ex.tree.northStar.label}</div>
        </div>
        <div className="w-0.5 h-6 bg-gray-300 dark:bg-gray-600 mx-auto mt-2" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
        {ex.tree.l1.map((d) => (
          <div key={d.value} className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-center">
            <p className="text-xs text-indigo-500 dark:text-indigo-400 font-semibold mb-1">{d.label}</p>
            <p className="text-xs text-indigo-800 dark:text-indigo-300 font-medium leading-tight">{d.value}</p>
          </div>
        ))}
      </div>
      <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600 mx-auto mb-2" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {ex.tree.l2.map((group) => (
          <div key={group.parent} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{group.parent}</p>
            <ul className="space-y-1">
              {group.metrics.map((m) => (
                <li key={m} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1"><span className="text-accent mt-0.5">.</span>{m}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <OutcomeBox decision={ex.decision} outcome={ex.outcome} />
      <Takeaway text={ex.takeaway} />
    </>
  );
}

function SpecExercise({ ex }) {
  const p = ex.prd;
  return (
    <>
      <FormulaBox formula={ex.framework} note={ex.frameworkNote} />
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{ex.context}</p>
      <div className="space-y-4 mb-6">
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
          <p className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide mb-1">Problem</p>
          <p className="text-sm text-red-800 dark:text-red-300">{p.problem}</p>
        </div>
        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
          <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-1">Goal</p>
          <p className="text-sm text-green-800 dark:text-green-300">{p.goal}</p>
        </div>
        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Non-Goals</p>
          <ul className="space-y-1">
            {p.nonGoals.map((ng) => <li key={ng} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"><span className="text-gray-400 mt-0.5">x</span>{ng}</li>)}
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-2">User Stories</p>
          <ul className="space-y-2">
            {p.userStories.map((s) => <li key={s} className="text-sm text-indigo-800 dark:text-indigo-300 flex items-start gap-2"><span className="mt-0.5">-</span>{s}</li>)}
          </ul>
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-4">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Success Metric</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Target</th>
            </tr>
          </thead>
          <tbody>
            {p.successMetrics.map((m, i) => (
              <tr key={i} className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/40">
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{m.metric}</td>
                <td className="px-4 py-3 font-semibold text-accent">{m.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-2 mb-4">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Risks and Mitigations</p>
        {p.risks.map((r, i) => (
          <div key={i} className="flex gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
            <span className="text-amber-500 text-sm shrink-0">!</span>
            <div>
              <span className="text-sm font-semibold text-amber-800 dark:text-amber-300">{r.risk}: </span>
              <span className="text-sm text-amber-700 dark:text-amber-400">{r.mitigation}</span>
            </div>
          </div>
        ))}
      </div>
      <OutcomeBox decision={ex.outcome} outcome={ex.outcome} />
      <Takeaway text={ex.takeaway} />
    </>
  );
}

function TeardownExercise({ ex }) {
  return (
    <>
      <FormulaBox formula={ex.framework} note={ex.frameworkNote} />
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{ex.context}</p>
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>{ex.matrix.headers.map((h, i) => <th key={h} className={`text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide ${i === 1 ? "text-accent" : "text-gray-500 dark:text-gray-400"}`}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {ex.matrix.rows.map((row, i) => (
              <tr key={i} className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/40">
                {row.map((cell, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-gray-700 dark:text-gray-300" : "text-center"} ${j === 1 ? "font-semibold" : ""}`}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-3 mb-6">
        {ex.insights.map((ins) => (
          <div key={ins.type} className={`p-4 rounded-xl border ${insightColors[ins.type]}`}>
            <span className="text-xs font-bold uppercase tracking-wide mr-2">{ins.label}:</span>
            <span className="text-sm">{ins.text}</span>
          </div>
        ))}
      </div>
      <OutcomeBox decision={ex.decision} outcome={ex.outcome} />
      <Takeaway text={ex.takeaway} />
    </>
  );
}

function EstimationExercise({ ex }) {
  return (
    <>
      <FormulaBox formula={ex.framework} note={ex.frameworkNote} />
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{ex.context}</p>
      <div className="space-y-3 mb-6">
        {ex.steps.map((step, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
            <div className="flex-1 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{step.label}</p>
                <p className="text-sm font-bold text-accent">{step.value}</p>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{step.note}</p>
            </div>
          </div>
        ))}
      </div>
      <OutcomeBox decision={ex.decision} outcome={ex.outcome} />
      <Takeaway text={ex.takeaway} />
    </>
  );
}

const renderers = { rice: RICEExercise, rca: RCAExercise, metrics: MetricsExercise, spec: SpecExercise, teardown: TeardownExercise, estimation: EstimationExercise };

function ExerciseCard({ ex, index }) {
  const [open, setOpen] = useState(false);
  const Renderer = renderers[ex.id];
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen((o) => !o)} className="w-full text-left p-6 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors group">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Pill color={ex.tagColor}>{ex.tag}</Pill>
              {ex.tools.map((t) => <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">{t}</span>)}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-snug">{ex.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{ex.subtitle}</p>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}
            className="shrink-0 w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 group-hover:text-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="overflow-hidden">
            <div className="px-6 pb-8 border-t border-gray-100 dark:border-gray-700 pt-6">
              {Renderer && <Renderer ex={ex} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PMExercisesClient() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-10">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-600 dark:text-gray-300">PM Exercises</span>
        </div>
        <FadeIn>
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Product Thinking in Practice</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">PM Exercises</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-4">
            Real frameworks applied to real problems from my work at IDP. Each exercise shows how I think, not just what I built.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-12">Click any card to expand the full exercise.</p>
        </FadeIn>
        <div className="space-y-4">
          {exercises.map((ex, i) => <ExerciseCard key={ex.id} ex={ex} index={i} />)}
        </div>
        <FadeIn delay={0.4}>
          <div className="mt-16 p-8 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-center">
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Want to see more?</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">Check out my full case studies or get in touch to discuss product problems.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/#case-studies" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-indigo-600 transition-colors">
                View Case Studies
              </Link>
              <Link href="/#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 text-sm font-semibold hover:border-accent hover:text-accent transition-colors">
                Contact Me
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}