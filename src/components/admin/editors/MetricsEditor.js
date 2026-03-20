"use client";
import { useState } from "react";
import { getContent, saveContent } from "../../../hooks/useContent";
import { Field, EditorCard, SaveButton } from "./shared";

export default function MetricsEditor() {
  const [metrics, setMetrics] = useState(() => getContent().metrics);
  const [saved, setSaved] = useState(false);

  function update(index, key, value) {
    setMetrics((prev) => prev.map((m, i) => (i === index ? { ...m, [key]: value } : m)));
  }

  function add() {
    setMetrics((prev) => [...prev, { value: 0, suffix: "%", label: "" }]);
  }

  function remove(index) {
    setMetrics((prev) => prev.filter((_, i) => i !== index));
  }

  function save() {
    saveContent("metrics", metrics);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-6">
      {metrics.map((m, i) => (
        <EditorCard key={i} title={m.label || `Metric ${i + 1}`} onRemove={() => remove(i)}>
          <Field label="Value" value={String(m.value)} onChange={(v) => update(i, "value", Number(v))} />
          <Field label="Suffix (e.g. %)" value={m.suffix} onChange={(v) => update(i, "suffix", v)} />
          <Field label="Label" value={m.label} onChange={(v) => update(i, "label", v)} />
        </EditorCard>
      ))}
      <button onClick={add} className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
        + Add Metric
      </button>
      <SaveButton saved={saved} onClick={save} />
    </div>
  );
}
