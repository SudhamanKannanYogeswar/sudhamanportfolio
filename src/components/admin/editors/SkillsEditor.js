"use client";
import { useState } from "react";
import { getContent, saveContent } from "../../../hooks/useContent";
import { EditorCard, SaveButton } from "./shared";

export default function SkillsEditor() {
  const [skills, setSkills] = useState(() => getContent().skills);
  const [saved, setSaved] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  function updateCategory(cat, value) {
    setSkills((prev) => ({ ...prev, [cat]: value.split(",").map((s) => s.trim()).filter(Boolean) }));
  }

  function renameCategory(oldKey, newKey) {
    if (!newKey || newKey === oldKey) return;
    setSkills((prev) => {
      const entries = Object.entries(prev);
      return Object.fromEntries(entries.map(([k, v]) => [k === oldKey ? newKey : k, v]));
    });
  }

  function removeCategory(cat) {
    setSkills((prev) => {
      const copy = { ...prev };
      delete copy[cat];
      return copy;
    });
  }

  function addCategory() {
    if (!newCategory.trim()) return;
    setSkills((prev) => ({ ...prev, [newCategory.trim()]: [] }));
    setNewCategory("");
  }

  function save() {
    saveContent("skills", skills);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-6">
      {Object.entries(skills).map(([cat, items]) => (
        <EditorCard key={cat} title={cat} onRemove={() => removeCategory(cat)}>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Category Name</label>
            <input
              type="text"
              defaultValue={cat}
              onBlur={(e) => renameCategory(cat, e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-indigo-500 mb-2"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Skills (comma-separated)</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-indigo-500 resize-none"
              value={items.join(", ")}
              onChange={(e) => updateCategory(cat, e.target.value)}
            />
          </div>
        </EditorCard>
      ))}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="New category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-indigo-500"
        />
        <button onClick={addCategory} className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm transition-colors">
          Add
        </button>
      </div>
      <SaveButton saved={saved} onClick={save} />
    </div>
  );
}
