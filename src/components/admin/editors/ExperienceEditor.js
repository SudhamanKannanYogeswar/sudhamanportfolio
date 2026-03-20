"use client";
import { useState } from "react";
import { getContent, saveContent } from "../../../hooks/useContent";
import { Field, EditorCard, SaveButton } from "./shared";

export default function ExperienceEditor() {
  const [experience, setExperience] = useState(() => getContent().experience);
  const [saved, setSaved] = useState(false);

  function update(index, key, value) {
    setExperience((prev) => prev.map((e, i) => (i === index ? { ...e, [key]: value } : e)));
  }

  function add() {
    setExperience((prev) => [...prev, { role: "", company: "", period: "", bullets: [] }]);
  }

  function remove(index) {
    setExperience((prev) => prev.filter((_, i) => i !== index));
  }

  function save() {
    saveContent("experience", experience);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-6">
      {experience.map((e, i) => (
        <EditorCard key={i} title={`${e.role} @ ${e.company}`} onRemove={() => remove(i)}>
          <Field label="Role" value={e.role} onChange={(v) => update(i, "role", v)} />
          <Field label="Company" value={e.company} onChange={(v) => update(i, "company", v)} />
          <Field label="Period" value={e.period} onChange={(v) => update(i, "period", v)} />
          <div>
            <label className="block text-xs text-gray-400 mb-1">Bullets (one per line)</label>
            <textarea
              rows={5}
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-indigo-500 resize-none"
              value={e.bullets.join("\n")}
              onChange={(ev) => update(i, "bullets", ev.target.value.split("\n").filter(Boolean))}
            />
          </div>
        </EditorCard>
      ))}
      <button onClick={add} className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
        + Add Role
      </button>
      <SaveButton saved={saved} onClick={save} />
    </div>
  );
}
