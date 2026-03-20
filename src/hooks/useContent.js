"use client";
import { useState, useEffect } from "react";
import * as staticContent from "../data/content";

const STORAGE_KEY = "portfolio_content";

export function getContent() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...staticContent, ...JSON.parse(stored) };
  } catch {}
  return staticContent;
}

export function saveContent(key, value) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const current = stored ? JSON.parse(stored) : {};
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, [key]: value }));
    window.dispatchEvent(new Event("portfolio_content_updated"));
  } catch {}
}

export function useContent() {
  const [content, setContent] = useState(staticContent);

  useEffect(() => {
    setContent(getContent());
    const handler = () => setContent(getContent());
    window.addEventListener("portfolio_content_updated", handler);
    return () => window.removeEventListener("portfolio_content_updated", handler);
  }, []);

  return content;
}
