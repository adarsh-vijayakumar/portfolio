import Image from "next/image";
import { Code2, ExternalLink, GraduationCap, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { Github, Linkedin, Medium } from "@/components/BrandIcons";
import Sidebar from "@/components/Sidebar";
import { experience, profile, projects, skillGroups } from "@/lib/content";
import styles from "./page.module.css";

function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2></div><span className={styles.sectionNumber}>{number}</span></div>;
}

export default function Portfolio() {
  return (
    <>
      <Sidebar />
      <main className={styles.main} id="main-content">
        <section className={styles.hero} id="home" aria-labelledby="home-title">
          <div className={styles.heroTop}><p className={styles.eyebrow}>Personal portfolio</p><span className={styles.location}><MapPin size={15} />{profile.location}</span></div>
          <div className={styles.portrait}>
            {profile.photo ? <Image src={profile.photo} alt={profile.name} fill sizes="(max-width: 599px) 148px, 176px" priority className={styles.profileImage} /> : <UserRound size={48} strokeWidth={1} aria-label="Profile photo placeholder" />}
          </div>
          <h1 id="home-title">{profile.name}</h1>
          <p className={styles.title}>{profile.title}</p>
          <p className={styles.heroDescription}>Building reliable systems, from the API to the interface.<br className={styles.desktopBreak} /> Five years of engineering across healthcare and retail.</p>
          <div className={styles.heroActions}><a className={styles.primaryButton} href="#experience">Explore my experience</a><a className={styles.secondaryButton} href="#contact"><Mail size={17} />Get in touch</a></div>
          <div className={styles.metrics} aria-label="Career highlights from resume">
            <div><strong>5 years</strong><span>US-based experience</span></div>
            <div><strong>$180M+</strong><span>Annual transactions supported</span></div>
            <div><strong>70k+</strong><span>Active caseloads supported</span></div>
          </div>
        </section>

        <section className={styles.section} id="about" aria-label="About">
          <SectionHeading number="01" eyebrow="A little about me" title="About" />
          <p className={styles.summary}>{profile.summary}</p>
          <div className={styles.focusAreas}><span>Microservices</span><span>Event-driven systems</span><span>Full stack development</span><span>Cloud deployment</span></div>
        </section>

        <section className={styles.section} id="experience" aria-label="Professional Experience">
          <SectionHeading number="02" eyebrow="Where I’ve made an impact" title="Professional Experience" />
          <div className={styles.timeline}>
            {experience.map((job, i) => (
              <article key={job.company} className={styles.experienceCard}>
                <span className={styles.timelineMarker}>{String(i + 1).padStart(2, "0")}</span>
                <div className={styles.jobHeader}><div><span className={styles.domain}>{job.domain}</span><h3>{job.company}</h3><p className={styles.role}>{job.role}</p></div><div className={styles.jobMeta}><span>{job.period}</span><span><MapPin size={13} />{job.location}</span></div></div>
                <ul className={styles.highlights}>{job.highlights.map(item => <li key={item}>{item}</li>)}</ul>
                <div className={styles.techTags}>{job.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="projects" aria-label="Projects">
          <SectionHeading number="03" eyebrow="Things I’ve built" title="Projects" />
          {projects.length ? (
            <div className={styles.projectGrid}>
              {projects.map(project => (
                <article key={project.title} className={styles.projectCard}>
                  <Code2 size={24} aria-hidden="true" />
                  <h3>{project.title}</h3>
                  <div className={styles.projectDescription}>
                    <p>{project.description}</p>
                    {project.highlights?.length ? <ul className={styles.projectHighlights}>{project.highlights.map(item => <li key={item.label}><strong>{item.label}:</strong> {item.text}</li>)}</ul> : null}
                    {project.technologies.length ? <div className={styles.techTags}>{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div> : null}
                  </div>
                  <footer className={styles.projectLinks}>
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub (opens in a new tab)`}><Github size={17} />View on GitHub</a>}
                    {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />Live project</a>}
                  </footer>
                </article>
              ))}
            </div>
          ) : <div className={styles.projectPlaceholder}><span className={styles.placeholderIcon}><Code2 size={26} strokeWidth={1.4} /></span><div><h3>More to share, soon.</h3><p>A selection of my personal projects will be featured here.</p></div></div>}
        </section>

        <section className={styles.section} id="skills" aria-label="Skills">
          <SectionHeading number="04" eyebrow="My engineering toolkit" title="Skills" />
          <div className={styles.skillList}>{skillGroups.map((group, i) => <div className={styles.skillRow} key={group.name}><h3><span>{String(i + 1).padStart(2, "0")}</span>{group.name}</h3><div className={styles.skillTags}>{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div>
        </section>

        <section className={styles.section} id="education" aria-label="Education">
          <SectionHeading number="05" eyebrow="The foundation" title="Education" />
          <article className={styles.educationCard}><div className={styles.educationIcon}><GraduationCap size={28} strokeWidth={1.5} /></div><div className={styles.educationContent}><p className={styles.degree}>Master of Computer Science</p><h3>Illinois Institute of Technology</h3><p><MapPin size={14} />Chicago, IL, USA</p></div><div className={styles.educationMeta}><span>May 2020</span><strong>GPA <span>3.7 / 4.0</span></strong></div></article>
        </section>

        <section className={`${styles.section} ${styles.contactSection}`} id="contact" aria-label="Contact Me">
          <SectionHeading number="06" eyebrow="Let’s connect" title="Contact Me" />
          <p className={styles.contactIntro}>Have an opportunity in mind, or just want to say hello?<br />I’d love to hear from you.</p>
          <div className={styles.contactList}>
            <a href={`mailto:${profile.email}`} className={styles.contactLink}><span className={styles.contactIcon}><Mail size={22} strokeWidth={1.6} /></span><span><span className={styles.contactLabel}>Email</span><span className={styles.contactValue}>{profile.email}</span></span></a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className={styles.contactLink}><span className={styles.contactIcon}><Phone size={22} strokeWidth={1.6} /></span><span><span className={styles.contactLabel}>Phone</span><span className={styles.contactValue}>{profile.phone}</span></span></a>
            <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" className={styles.contactLink} aria-label="Connect with Adarsh Vijayakumar on LinkedIn (opens in a new tab)"><span className={styles.contactIcon}><Linkedin size={22} strokeWidth={1.6} /></span><span><span className={styles.contactLabel}>LinkedIn</span><span className={styles.contactValue}>Adarsh Vijayakumar</span></span><ExternalLink size={16} className={styles.externalIcon} /></a>
            <a href={profile.medium} target="_blank" rel="noopener noreferrer" className={styles.contactLink} aria-label="Read Adarsh Vijayakumar on Medium (opens in a new tab)"><span className={styles.contactIcon}><Medium size={22} /></span><span><span className={styles.contactLabel}>Medium</span><span className={styles.contactValue}>@adarsh.vijayakumar07</span></span><ExternalLink size={16} className={styles.externalIcon} /></a>
          </div>
        </section>
        <footer className={styles.footer}><span>© {new Date().getFullYear()} {profile.name}</span><a href="#home">Back to top</a></footer>
      </main>
    </>
  );
}
