"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BriefcaseBusiness, Code2, FolderCode, GraduationCap, Home, Mail, MapPin, Menu, UserRound, X } from "lucide-react";
import { Github, Linkedin, Medium } from "./BrandIcons";
import ThemePicker from "./ThemePicker";
import { profile } from "@/lib/content";
import styles from "./Sidebar.module.css";

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: UserRound },
  { id: "experience", label: "Professional Experience", icon: BriefcaseBusiness },
  { id: "projects", label: "Projects", icon: FolderCode },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact Me", icon: Mail },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const threshold = window.innerWidth < 900 ? 120 : 160;
        let current = "home";
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element && element.getBoundingClientRect().top <= threshold) current = section.id;
        }
        if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = "contact";
        setActive(current);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const dismiss = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, []);

  return (
    <>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <aside className={styles.sidebar} aria-label="Portfolio sidebar">
        <div className={styles.brandRow}>
          <a href="#home" className={styles.brand} aria-label="Adarsh Vijayakumar, home" onClick={() => setOpen(false)}>
            <span className={styles.brandPortrait}>
              {profile.photo ? <Image src={profile.photo} alt="" fill sizes="(max-width: 899px) 40px, 64px" priority className={styles.brandImage} /> : <UserRound size={28} strokeWidth={1.5} aria-hidden="true" />}
            </span>
            <span className={styles.brandCopy}><strong>Adarsh Vijayakumar</strong><span>Software Engineer</span></span>
          </a>
          <button type="button" className={styles.menuButton} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="section-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div className={`${styles.menu} ${open ? styles.menuOpen : ""}`} id="section-navigation">
          <p className={styles.navLabel}>Explore</p>
          <nav aria-label="Portfolio sections">
            {sections.map(({ id, label, icon: Icon }) => (
              <a key={id} href={`#${id}`} className={`${styles.navLink} ${active === id ? styles.active : ""}`} aria-current={active === id ? "location" : undefined} onClick={() => { setActive(id); setOpen(false); }}>
                <Icon size={18} strokeWidth={1.7} /><span>{label}</span>
              </a>
            ))}
            <ThemePicker />
          </nav>
          <div className={styles.sidebarFooter}>
            <p><MapPin size={15} strokeWidth={1.7} />{profile.location}</p>
            <div className={styles.socialLinks}>
              <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="Adarsh on LinkedIn (opens in a new tab)"><Linkedin size={18} /></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Adarsh on GitHub (opens in a new tab)"><Github size={18} /></a>
              <a href={profile.medium} target="_blank" rel="noopener noreferrer" aria-label="Adarsh on Medium (opens in a new tab)"><Medium size={18} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email Adarsh"><Mail size={18} /></a>
            </div>
            <span className={styles.footerNote}>Thoughtful code. Meaningful impact.</span>
          </div>
        </div>
      </aside>
      {open && <button className={styles.backdrop} type="button" onClick={() => setOpen(false)} aria-label="Close navigation" tabIndex={-1} />}
    </>
  );
}
