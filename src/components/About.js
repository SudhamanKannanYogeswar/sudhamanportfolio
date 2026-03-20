"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { frameworks } from "../data/content";

function FadeIn({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">About Me</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                B2C at scale. B2B from scratch. Always outcome-driven.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                At IDP Education, I owned product across both B2C and B2B surfaces — two very different problem spaces that sharpened how I think about users, value, and scale.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                On the B2C side, I led the AI-powered student platform used across 60+ countries — optimising conversion funnels, running A/B experiments, and shipping an LLM chatbot that reduced manual query resolution by 35%. The focus was always on reducing friction and increasing qualified lead volume at scale.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                On the B2B side, I built form.idp.com — a self-serve Lead Generation SaaS platform used by 80+ internal stakeholders across marketing and sales teams. This meant thinking in terms of workflows, configurability, and time-to-value for business users rather than end consumers. Shipping the Form Builder cut go-live time by 40% and grew qualified lead volume by 18%.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="flex flex-wrap gap-3">
                {["Product Strategy", "Data Analytics", "Experimentation", "Stakeholder Alignment", "Agile Delivery"].map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-accent border border-indigo-200 dark:border-indigo-800">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.1}>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">My Product Thinking</span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How I approach product decisions</h3>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {frameworks.map((f, i) => (
                <FadeIn key={f.title} delay={0.1 + i * 0.08}>
                  <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-accent dark:hover:border-accent transition-colors h-full">
                    <div className="text-2xl mb-3">{f.icon}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{f.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
