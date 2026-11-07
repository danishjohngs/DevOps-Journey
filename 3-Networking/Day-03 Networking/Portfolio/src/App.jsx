
import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, Github, Linkedin,
  Mail, MapPin, Menu, Moon, Sun, Terminal, X, GraduationCap,
  ShieldCheck, Cloud, Code2, Command, Braces, Network
} from "lucide-react";
import "./App.css";

const profile = {
  name: "Danish John G S",
  shortName: "Danish John",
  role: "Aspiring Cloud Security Engineer",
  email: "danish.sec.dev@gmail.com",
  github: "https://github.com/danishjohngs",
  linkedin: "https://www.linkedin.com/in/danishjohngs",
};

const journey = [
  {
    number: "01",
    label: "FOUNDATIONS",
    title: "Cybersecurity foundations",
    description: "Developed an interest in cybersecurity, ethical hacking, security tools, and understanding how systems can be protected.",
  },
  {
    number: "02",
    label: "CREDENTIAL",
    title: "Certified Ethical Hacker",
    description: "Earned the CEH v13 certification from EC-Council.",
  },
  {
    number: "03",
    label: "HANDS-ON PRACTICE",
    title: "Linux & System Administration",
    description: "Started building practical Linux skills through terminal exercises, administration labs, troubleshooting, and Bash scripting.",
  },
  {
    number: "04",
    label: "CURRENT DIRECTION",
    title: "Cloud & DevOps Engineering",
    description: "Currently developing Linux, Bash, and networking foundations as preparation for cloud engineering and DevSecOps.",
  },
];

const skills = [
  { name: "Linux", description: "System administration and terminal fundamentals.", status: "Learning", icon: Command },
  { name: "Bash", description: "Shell scripting and task automation.", status: "Practising", icon: Braces },
  { name: "Networking", description: "Networking fundamentals and troubleshooting.", status: "Learning", icon: Network },
  { name: "Git & GitHub", description: "Version control and project documentation.", status: "Practising", icon: Github },
];

const projects = [
  {
    number: "01",
    name: "Linux Server Administration Lab",
    category: "LINUX / SYSTEM ADMINISTRATION",
    status: "Introductory lab completed",
    description: "An introductory Ubuntu and WSL2 administration lab covering users, groups, permissions, POSIX ACLs, and documented troubleshooting.",
    tech: ["Linux", "Ubuntu", "POSIX ACLs", "WSL2"],
    url: "https://github.com/danishjohngs/linux-server-administration-lab",
  },
  {
    number: "02",
    name: "Curavita",
    category: "PERSONAL PROJECT",
    status: "In progress",
    description: "Project details are not currently verifiable because the supplied public repository is unavailable.",
    tech: ["Personal project"],
    url: null,
  },
  {
    number: "03",
    name: "DevOps Journey",
    category: "LEARNING / DOCUMENTATION",
    status: "Ongoing",
    description: "A public learning journal documenting Linux, scripting, networking, and DevOps foundations.",
    tech: ["Linux", "Bash", "Git", "Networking"],
    url: "https://github.com/danishjohngs/DevOps-Journey",
  },
];

const navItems = ["About", "Journey", "Skills", "Projects", "Contact"];

function DJMark() {
  return <span className="dj-mark">DJ<span>.</span></span>;
}

function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#home" className="brand"><DJMark /><span>DANISH JOHN</span></a>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="theme-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={13} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  );
}

function Eyebrow({ children }) {
  return <div className="eyebrow"><span className="eyebrow-dot" />{children}</div>;
}

function SectionTitle({ number, label, title }) {
  return (
    <div className="section-heading">
      <Eyebrow>{number} / {label}</Eyebrow>
      <div className="heading-line"><h2>{title}</h2><span /></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <Eyebrow>HELLO, WORLD! I'M</Eyebrow>
        <h1>Danish<br /><span>John G S.</span></h1>
        <p className="hero-role">Aspiring Cloud Security Engineer</p>
<p className="hero-description">
  Exploring the intersection of cloud infrastructure, DevOps, and cybersecurity.
  Learning by building, troubleshooting, and creating practical solutions.
</p>
        <div className="hero-buttons">
          <a className="button-primary" href="#projects">Explore my work <ArrowDown size={14} /></a>
          <a className="button-secondary" href="#contact">Get in touch <ArrowUpRight size={14} /></a>
        </div>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={13} /> GitHub <ArrowUpRight size={10} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={13} /> LinkedIn <ArrowUpRight size={10} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={13} /> Email <ArrowUpRight size={10} /></a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="float-tag tag-top">CLOUD SECURITY <span>↗</span></div>
        <div className="profile-card">
          <div className="card-topline"><span>PROFILE / 001</span><span>ONLINE <i /></span></div>
          <div className="profile-identity">
            <div className="avatar">DJ<span>.</span></div>
            <div><small>IDENTITY VERIFIED</small><h3>Danish John</h3><p>Cloud Security / DevOps</p></div>
          </div>
          <div className="card-divider" />
          <div className="profile-detail"><span>LOCATION</span><strong><MapPin size={11} /> India</strong></div>
          <div className="profile-detail"><span>FOCUS</span><strong><Cloud size={11} /> Cloud & Security</strong></div>
          <div className="profile-detail"><span>STATUS</span><strong className="green-text">● Learning & building</strong></div>
          <div className="terminal-box">
            <div><span>~</span> /danish</div>
            <p><b>$</b> whoami</p>
            <p className="terminal-output">aspiring-cloud-security-engineer<span className="cursor">_</span></p>
          </div>
        </div>
        <div className="float-tag tag-bottom"><Terminal size={11} /> LINUX & BASH</div>
        <div className="visual-caption"><span>FIG. 01 / 03</span><span>BUILDING WITH PURPOSE</span></div>
      </div>
      <div className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={12} /></div>
      <div className="hero-bottom-line">
        <span>LINUX</span><span>NETWORKING</span><span>SECURITY</span><span>CLOUD</span><span>DEVOPS</span><span>AUTOMATION</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-wrap section-block" id="about">
      <SectionTitle number="01" label="CONTEXT" title="A little about me." />
      <div className="about-layout">
        <div className="about-copy">
          <h3>Curiosity is my starting point. <span>I learn by getting close to the system</span> — understanding how it works, where it breaks, and how to make it more resilient.</h3>
          <p>I'm Danish John G S, a technology enthusiast focused on building a career in cloud security and DevOps engineering. My journey began with an interest in cybersecurity and understanding how systems work.</p>
          <p>I believe in learning through hands-on practice: building projects, troubleshooting problems, documenting what I learn, and improving one step at a time.</p>
        </div>
        <div className="about-cards">
          <div className="about-card"><small>01 / EDUCATION</small><GraduationCap /><h4>Bachelor of<br />Computer Applications</h4><p>St. Benedict Academy, Bengaluru</p></div>
          <div className="about-card"><small>02 / CAREER FOCUS</small><Cloud /><h4>Cloud Security<br /><span>& DevSecOps</span></h4><p>Building secure, reliable infrastructure</p></div>
          <div className="about-card about-card-accent"><small>03 / APPROACH</small><h4>Learn.<br />Build. Break.<br />Fix.</h4><ArrowUpRight /></div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section-wrap section-block" id="journey">
      <SectionTitle number="02" label="THE PATH SO FAR" title="A practice of progress." />
      <div className="journey-list">
        {journey.map((item) => (
          <article className="journey-row" key={item.number}>
            <span className="journey-number">{item.number}</span>
            <div className="journey-content"><small>{item.label}</small><h3>{item.title}</h3><p>{item.description}</p></div>
            <span className="journey-mark">↗ / {item.number}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-wrap section-block" id="skills">
      <SectionTitle number="03" label="CURRENT TOOLKIT" title="Tools I'm working with." />
      <div className="skills-intro"><p>Foundations first. Depth over decoration. These are active learning areas, not claims of mastery.</p><span>↗ UPDATED CONTINUOUSLY</span></div>
      <div className="skills-list">
        {skills.map(({ name, description, status, icon: Icon }, index) => (
          <div className="skill-row" key={name}>
            <span className="skill-index">0{index + 1}</span>
            <Icon className="skill-icon" size={17} />
            <div className="skill-info"><h3>{name}</h3><p>{description}</p></div>
            <span className={`skill-status ${status === "Learning" ? "learning" : "practising"}`}><i />{status}</span>
            <ArrowUpRight className="skill-arrow" size={14} />
          </div>
        ))}
      </div>
      <p className="skills-note">Currently prioritising Linux, Bash, and networking before expanding into cloud infrastructure and automation.</p>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-wrap section-block" id="projects">
      <SectionTitle number="04" label="SELECTED WORK" title="Things I've built." />
      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-main">
              <div className="project-meta"><span>{project.number}</span><small>{project.category}</small><b>● {project.status}</b></div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              {project.url ? <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={13} /></a> : <span className="project-unavailable">Repository unavailable</span>}
            </div>
            <div className="project-number">{project.number}</div>
          </article>
        ))}
      </div>
      <a className="github-banner" href={profile.github} target="_blank" rel="noreferrer">
        <Github size={20} /><div><strong>Follow what I'm building.</strong><small>More notes, experiments, and projects on GitHub.</small></div><span>Explore GitHub profile <ArrowUpRight size={13} /></span>
      </a>
    </section>
  );
}

function Certification() {
  return (
    <section className="certification-band">
      <div className="section-wrap certification-layout">
        <div><Eyebrow>05 / CREDENTIAL</Eyebrow><h2>Learning<br />backed by<br />credentials.</h2><p>One credential in my stack — a marker of the work and curiosity behind the practice.</p></div>
        <div className="cert-card"><div className="cert-icon"><Award size={22} /></div><div><small>CERTIFICATION / 001</small><h3>Certified Ethical Hacker</h3><p>CEH v13 / EC-Council</p></div><ShieldCheck className="cert-shield" /></div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-wrap section-block contact-section" id="contact">
      <SectionTitle number="06" label="CONNECT" title="Let's connect." />
      <div className="contact-layout">
        <div><p>Have an opportunity, a technical discussion, or just want to connect? My inbox is open.</p><a className="button-primary" href={`mailto:${profile.email}`}>Send me an email <Mail size={13} /></a></div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail size={16} /><span><small>EMAIL</small>{profile.email}</span><ArrowUpRight size={14} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /><span><small>LINKEDIN</small>linkedin.com/in/danishjohngs</span><ArrowUpRight size={14} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /><span><small>GITHUB</small>github.com/danishjohngs</span><ArrowUpRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="section-wrap footer-inner"><a href="#home"><DJMark /></a><p>Designed & built by Danish John.<br /><span>Learning. Building. Improving.</span></p><small>LINUX · SECURITY · CLOUD · DEVOPS</small><a href="#home">BACK TO TOP ↑</a></div></footer>;
}

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".section-block, .certification-layout, .hero-copy, .hero-visual").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
