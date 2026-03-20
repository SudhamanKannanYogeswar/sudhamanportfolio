"use client";
import { useState } from "react";
import { getContent, saveContent } from "../../../hooks/useContent";
import { Field, EditorCard, SaveButton } from "./shared";

export default function CaseStudiesEditor() {
  const [caseStudies, setCaseStudies] = useState(() => getContent().caseStudies);
  const [saved, setSaved] = useState(false);

  function update(index, key, value) {
    setCaseStudies((prev) => prev.map((c, i) => (i === index ? { ...c, [key]: value } : c)));
  }

  function add() {
    setCaseStudies((prev) => [
      ...prev,
      { id: Date.now(), title: "", tag: "", context: "", problem: "", approach: "", features: [], metrics: [], tools: [], link: "", linkLabel: "" },
    ]);
  }

  function remove(index) {
    setCaseStudies((prev) => prev.filter((_, i) => i !== index));
  }

  function save() {
    saveContent("caseStudies", caseStudies);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-6">
      {caseStudies.map((c, i) => (
        <EditorCard key={c.id} title={c.title || `Case Study ${i + 1}`} onRemove={() => remove(i)}>
          <Field label="Title" value={c.title} onChange={(v) => update(i, "title", v)} />
          <Field label="Tag" value={c.tag} onChange={(v) => update(i, "tag", v)} />
          <Field label="Context" value={c.context} onChange={(v) => update(i, "context", v)} multiline />
          <Field label="Problem" value={c.problem} onChange={(v) => update(i, "problem", v)} multiline />
          <Field label="Approach" value={c.approach} onChange={(v) => update(i, "approach", v)} multiline />
          <div>
            <label className="block text-xs text-gray-400 mb-1">Features (one per line)</label>
            <textarea rows={4} className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-indigo-500 resize-none" value={c.features.join("\n")} onChange={(e) => update(i, "features", e.target.value.split("\n").filter(Boolean))} />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Metrics (one per line)</label>
            <textarea rows={3} className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-indigo-500 resize-none" value={c.metrics.join("\n")} onChange={(e) => update(i, "metrics", e.target.value.split("\n").filter(Boolean))} />
          </div>
          <Field label="Tools (comma-separated)" value={c.tools.join(", ")} onChange={(v) => update(i, "tools", v.split(",").map((t) => t.trim()))} />
          <Field label="Link URL" value={c.link} onChange={(v) => update(i, "link", v)} />
          <Field label="Link Label" value={c.linkLabel} onChange={(v) => update(i, "linkLabel", v)} />
        </EditorCard>
      ))}
      <button onClick={add} className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
        + Add Case Study
      </button>
      <SaveButton saved={saved} onClick={save} />
    </div>
  );
}
