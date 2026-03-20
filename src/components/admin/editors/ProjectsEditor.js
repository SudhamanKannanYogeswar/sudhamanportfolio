"use client";
import { useState } from "react";
import { getContent, saveContent } from "../../../hooks/useContent";
import { Field, EditorCard, SaveButton } from "./shared";

export default function ProjectsEditor() {
  const [projects, setProjects] = useState(() => getContent().projects);
  const [saved, setSaved] = useState(false);

  function update(index, key, value) {
    setProjects((prev) => prev.map((p, i) => (i === index ? { ...p, [key]: value } : p)));
  }

  function addProject() {
    setProjects((prev) => [
      ...prev,
      { id: Date.now(), title: "", tag: "", problem: "", approach: "", tools: [], impact: "", metric: "", metricLabel: "" },
    ]);
  }

  function removeProject(index) {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  }

  function save() {
    saveContent("projects", projects);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-6">
      {projects.map((p, i) => (
        <EditorCard key={p.id} title={p.title || `Project ${i + 1}`} onRemove={() => removeProject(i)}>
          <Field label="Title" value={p.title} onChange={(v) => update(i, "title", v)} />
          <Field label="Tag" value={p.tag} onChange={(v) => update(i, "tag", v)} />
          <Field label="Problem" value={p.problem} onChange={(v) => update(i, "problem", v)} multiline />
          <Field label="Approach" value={p.approach} onChange={(v) => update(i, "approach", v)} multiline />
          <Field label="Impact" value={p.impact} onChange={(v) => update(i, "impact", v)} />
          <Field label="Metric Value" value={p.metric} onChange={(v) => update(i, "metric", v)} />
          <Field label="Metric Label" value={p.metricLabel} onChange={(v) => update(i, "metricLabel", v)} />
          <Field label="Tools (comma-separated)" value={p.tools.join(", ")} onChange={(v) => update(i, "tools", v.split(",").map((t) => t.trim()))} />
        </EditorCard>
      ))}
      <button onClick={addProject} className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
        + Add Project
      </button>
      <SaveButton saved={saved} onClick={save} />
    </div>
  );
}
