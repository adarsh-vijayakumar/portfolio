"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Moon, Palette, Sun } from "lucide-react";
import { type Theme, themeStorageKey } from "@/lib/theme";
import styles from "./Sidebar.module.css";

export default function ThemePicker() {
  const [theme, setTheme] = useState<Theme>("light");
  const [expanded, setExpanded] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current);
    const sync = (event: StorageEvent) => {
      if (event.key !== themeStorageKey && event.key !== null) return;
      const next = event.newValue === "dark" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  function choose(next: Theme) {
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem(themeStorageKey, next); } catch {}
    setExpanded(false);
    trigger.current?.focus();
  }

  return (
    <div
      className={styles.themePicker}
      onPointerEnter={event => { if (event.pointerType === "mouse") setExpanded(true); }}
      onPointerLeave={event => { if (!event.currentTarget.contains(document.activeElement)) setExpanded(false); }}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false); }}
      onKeyDown={event => {
        if (event.key === "Escape") { event.stopPropagation(); setExpanded(false); trigger.current?.focus(); }
        if (event.key === "ArrowDown" && event.target === trigger.current) { event.preventDefault(); setExpanded(true); }
      }}
    >
      <button ref={trigger} type="button" className={`${styles.navLink} ${styles.themeTrigger} ${expanded ? styles.themeExpanded : ""}`} aria-expanded={expanded} aria-controls="theme-options" onClick={() => setExpanded(true)}>
        <Palette size={18} strokeWidth={1.7} /><span>Theme</span><ChevronDown size={15} className={styles.themeChevron} />
      </button>
      <fieldset id="theme-options" className={styles.themeOptions} hidden={!expanded}>
        <legend className={styles.visuallyHidden}>Choose website theme</legend>
        {(["light", "dark"] as const).map(option => {
          const Icon = option === "light" ? Sun : Moon;
          return <label className={`${styles.themeOption} ${theme === option ? styles.themeSelected : ""}`} key={option}>
            <input type="radio" name="portfolio-theme" value={option} checked={theme === option} onChange={() => choose(option)} onClick={() => { if (theme === option) choose(option); }} />
            <Icon size={16} strokeWidth={1.7} /><span>{option === "light" ? "Light" : "Dark"}</span>{theme === option && <Check size={15} className={styles.themeCheck} />}
          </label>;
        })}
      </fieldset>
    </div>
  );
}
