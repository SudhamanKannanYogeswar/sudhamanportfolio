"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProjectsEditor from "../../../components/admin/editors/ProjectsEditor";
import ExperienceEditor from "../../../components/admin/editors/ExperienceEditor";
import SkillsEditor from "../../../components/admin/editors/SkillsEditor";
import CaseStudiesEditor from "../../../components/admin/editors/CaseStudiesEditor";
import ArticlesEditor from "../../../components/admin/editors/ArticlesEditor";
import MetricsEditor from "../../../components/admin/editors/MetricsEditor";

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "caseStudies", label: "Case Studies" },
  { id: "articles", label: "Articles" },
  { id: "metrics", label: "Metrics" },
];

const editors = {
  projects: ProjectsEditor,
  experience: ExperienceEditor,
  skills: SkillsEditor,
  caseStudies: CaseStudiesEditor,
  articles: ArticlesEditor,
  metrics: MetricsEditor,
};

export default function AdminDashboard() {
  const [active, setActive] = useState("projects");
  const router = useRouter();
  const Editor = editors[active];

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  }

  function resetAll() {
    if (window.confirm("Reset all content to defaults? This cannot be undone.")) {
      localStorage.removeItem("portfolio_content");
      window.dispatchEvent(new Event("portfolio_content_updated"));
      window.location.reload();
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">Portfolio Admin</h1>
          <p className="text-xs text-gray-400">Changes are saved to your browser and reflected live on the site.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={resetAll} className="text-xs text-red-400 hover:text-red-300 transition-colors">
            Reset to Defaults
          </button>
          <button onClick={logout} className="text-xs px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors">
            Logout
          </button>
        </div>
      </div>

      <div className="flex">
        <aside className="w-48 shrink-0 border-r border-gray-800 min-h-[calc(100vh-65px)] p-4 space-y-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                active === t.id
                  ? "bg-indigo-600 text-white font-medium"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {t.label}
            </button>
          ))}
        </aside>

        <main className="flex-1 p-6 max-w-3xl">
          <h2 className="text-base font-semibold mb-5 text-gray-200">
            {tabs.find((t) => t.id === active)?.label}
          </h2>
          <Editor />
        </main>
      </div>
    </div>
  );
}
