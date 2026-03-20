"use client";
import { useState } from "react";
import { getContent, saveContent } from "../../../hooks/useContent";
import { Field, EditorCard, SaveButton } from "./shared";

export default function ArticlesEditor() {
  const [articles, setArticles] = useState(() => getContent().articles);
  const [saved, setSaved] = useState(false);

  function update(index, key, value) {
    setArticles((prev) => prev.map((a, i) => (i === index ? { ...a, [key]: value } : a)));
  }

  function add() {
    setArticles((prev) => [...prev, { title: "", summary: "", tag: "", url: "#", date: "" }]);
  }

  function remove(index) {
    setArticles((prev) => prev.filter((_, i) => i !== index));
  }

  function save() {
    saveContent("articles", articles);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-6">
      {articles.map((a, i) => (
        <EditorCard key={i} title={a.title || `Article ${i + 1}`} onRemove={() => remove(i)}>
          <Field label="Title" value={a.title} onChange={(v) => update(i, "title", v)} />
          <Field label="Summary" value={a.summary} onChange={(v) => update(i, "summary", v)} multiline />
          <Field label="Tag" value={a.tag} onChange={(v) => update(i, "tag", v)} />
          <Field label="URL" value={a.url} onChange={(v) => update(i, "url", v)} />
          <Field label="Date" value={a.date} onChange={(v) => update(i, "date", v)} />
        </EditorCard>
      ))}
      <button onClick={add} className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
        + Add Article
      </button>
      <SaveButton saved={saved} onClick={save} />
    </div>
  );
}
