/**
 * Kannan P — Portfolio (React)
 * ---------------------------------------------------------------
 * Everything you edit lives in the `resume` object at the top.
 * The components below just render that data, so you never have to
 * hunt through JSX to change a job title or add a project.
 *
 * Sections: Nav · Hero · About · Education · Skills · Experience ·
 *           Projects · Achievements · Contact · Footer
 *
 * TO RECEIVE REAL EMAILS from the contact form, sign up for a free
 * service (Formspree / Web3Forms / Netlify Forms) and paste your URL
 * into FORM_ENDPOINT below.
 */

import React, { useState, useEffect, useRef } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/moeakwva"; // e.g. "https://formspree.io/f/yourid"

/* ============================================================
   1. RESUME DATA — edit this and the whole site updates
   ============================================================ */
const resume = {
  name: "Kannan P",
  role: "Frontend Software Engineer",
  years: "5+ years",
  headline: "real-time dashboards",
  headlineRest: ", trading platforms and analytics systems in React.",
  intro:
    "Five years of shipping scalable, high-performance web applications with React.js, Next.js, TypeScript and modern frontend architecture — with a focus on performance optimisation, predictable state management and reusable component systems that teams can keep building on.",

  contact: {
    email: "kannan143199@gmail.com",
    phone: "+91 97152 98296",
    phoneHref: "tel:+919715298296",
    location: "Tiruchengode, Namakkal, Tamil Nadu",
  },

  // Neither URL was on the resume — paste them here and they go live everywhere
  links: {
    linkedin: "https://www.linkedin.com/in/kannan-p-970a771a4/",
    github: "https://github.com/kannan1431999",
  },

  stats: [
    { value: "100+", label: "Production issues resolved" },
    { value: "250", unit: "KB", label: "JavaScript bundle removed" },
    { value: "1.5", unit: "s", label: "Faster load time" },
    { value: "3", label: "Product companies" },
  ],

  about: [
    "I'm a Frontend Software Engineer with 5+ years of experience building scalable, high-performance web applications using React.js, TypeScript, JavaScript, Next.js and modern frontend technologies. Most of my work has been on products where the data never stops moving — trading platforms, real-time dashboards and analytics systems.",
    "My strengths sit in frontend performance optimisation, state management, responsive UI development, REST APIs, WebSocket integration and scalable application design. I like turning tangled screens into reusable component architectures that the rest of the team can move quickly on.",
    "I've worked alongside backend engineers, QA and product managers to deliver enterprise-grade products with better usability, maintainability and performance.",
  ],

  education: {
    date: "Sep 2020",
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    school: "Sri Shanmugha College of Engineering and Technology",
    place: "Namakkal, Tamil Nadu",
  },

  skills: [
    {
      title: "Languages & core",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"],
    },
    {
      title: "Frameworks & libraries",
      items: ["React.js", "Next.js", "Vue.js"],
    },
    {
      title: "State management",
      items: ["Redux", "Redux Toolkit", "Context API", "Pinia", "Vuex"],
    },
    {
      title: "UI & visualisation",
      items: [
        "Material UI",
        "Tailwind CSS",
        "Bootstrap",
        "Semantic UI",
        "AG Grid",
        "Highcharts",
      ],
    },
    {
      title: "Backend & APIs",
      items: ["Node.js", "Express.js", "REST APIs", "WebSocket"],
    },
    { title: "Database", items: ["SQL"] },
    {
      title: "Tools & platforms",
      items: ["Git", "GitHub", "Jira", "ClickUp", "Postman"],
    },
    {
      title: "AI-assisted development",
      items: ["AI agent workflows", "Claude", "Cursor"],
    },
    {
      title: "Architecture",
      items: ["Modular UI architecture", "Data flow architecture", "eCommerce"],
    },
  ],

  experience: [
    {
      date: "Jan 2025 — Jun 2026",
      role: "Frontend Developer",
      company: "IndiaCharts Share Trading Pvt Ltd",
      location: "Bengaluru",
      points: [
        "Resolved 100+ production issues, improving overall system stability and user experience.",
        "Re-architected the frontend and rebuilt core modules using modern React.js patterns to improve extensibility.",
        "Defined a scalable component and folder structure that supported growth across feature modules.",
        "Presented real-time dashboards and data views to support trading decisions with responsive, accessible UI.",
        "Improved bundle architecture with lazy loading and dependency audits — 250KB less JavaScript and 1.5s faster load time.",
        "Implemented centralised Redux for high-frequency interactions to strengthen state integrity and predictable data flow.",
        "Applied in-memory storage to cut unnecessary API calls and improve page load performance.",
      ],
      tech: [
        "React.js",
        "Redux",
        "JavaScript (ES6+)",
        "Highcharts",
        "HTML5",
        "SCSS",
        "REST APIs",
        "Git",
      ],
    },
    {
      date: "Sep 2021 — Jan 2025",
      role: "Software Engineer",
      company: "Techjays",
      location: "Coimbatore",
      points: [
        "Developed scalable, responsive frontend applications for EdTech platforms using React.js, Redux, JavaScript and TypeScript.",
        "Built reusable UI components and a modular frontend architecture to improve maintainability and development speed.",
        "Implemented complex state management with Redux for predictable data flow and better application performance.",
        "Integrated REST APIs and worked with backend teams to deliver seamless experiences across multiple modules.",
        "Worked closely with QA, product managers and cross-functional teams to fix bugs, resolve technical debt and improve stability.",
        "Participated in Agile processes: sprint planning, code reviews and feature delivery cycles.",
        "Contributed to frontend optimisation through reusable component patterns, refactoring and UI performance work.",
      ],
      tech: [
        "React.js",
        "Redux",
        "JavaScript (ES6+)",
        "HTML5",
        "SCSS",
        "Jest",
        "React Testing Library",
        "REST APIs",
        "Git",
      ],
    },
    {
      date: "Aug 2020 — Jul 2021",
      role: "Product Engineer",
      badge: "Started as intern",
      company: "Amphisoft Technologies Pvt Ltd",
      location: "Coimbatore",
      points: [
        "Joined as a frontend development intern and moved into a full-time Product Engineer role within one month, based on performance and technical contribution.",
        "Developed responsive, user-friendly web interfaces using HTML5, CSS3, JavaScript and React.js.",
        "Built reusable frontend components and improved UI functionality for a better user experience.",
        "Collaborated with senior developers, QA and cross-functional stakeholders on new and existing features.",
        "Used Git for version control and clean collaborative development workflows.",
        "Improved application responsiveness, browser compatibility and frontend maintainability.",
      ],
      tech: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs",
        "Git",
        "Agile",
      ],
    },
  ],

  projects: [
    {
      title: "Strike — All-In-One Analytics Platform",
      org: "IndiaCharts Share Trading Pvt Ltd",
      description:
        "A market analytics platform providing real-time market data, advanced charting and analytics across stocks, indices, F&O, option chains, Greeks, heatmaps, sentiment indicators and trend scanners — with dashboards built for fast, data-driven trading decisions.",
      points: [
        "Delivered streaming data visualisations — charts, option-chain graphs, heatmaps — with debounced updates that keep the UI responsive when market data floods in.",
        "Integrated in-memory caching and API retry/backoff to cut redundant calls, handle transient failures gracefully and improve reliability on unstable networks.",
        "Owned frontend work end to end: UI architecture, component library, performance tuning and deployment readiness.",
      ],
      tech: ["React.js", "Redux", "Highcharts", "REST APIs", "SCSS"],
      github: "",
      demo: "https://web.strike.money/",
    },
    {
      title: "PepCare — Healthcare Management Platform",
      org: "Real-time consultation product",
      description:
        "A healthcare web platform connecting professionals and patients through real-time communication, built around secure sessions and role-based access.",
      points: [
        "Built real-time chat with React.js and WebSocket to improve communication between healthcare professionals and patients.",
        "Developed screen recording and session management features supporting consultation workflows and monitoring.",
        "Implemented secure multi-role authentication and role-based access control for different user types.",
        "Created responsive, reusable UI components to keep the application scalable and maintainable.",
        "Worked with backend and QA teams on API integration and stable feature delivery.",
      ],
      tech: ["React.js", "WebSocket", "REST APIs", "Role-based access"],
      github: "",
      demo: "https://www.pepcare.com/",
    },
  ],

  achievements: [
    {
      metric: "250KB / 1.5s",
      text: "Cut JavaScript bundle size by 250KB and improved load time by 1.5 seconds through lazy loading and dependency audits.",
    },
    {
      metric: "100+",
      text: "Production issues resolved at IndiaCharts, improving overall system stability and user experience.",
    },
    {
      metric: "1 month",
      text: "Promoted from frontend development intern to full-time Product Engineer at Amphisoft Technologies, based on performance and technical contribution.",
    },
    {
      metric: "Re-architecture",
      text: "Led a frontend re-architecture and defined a scalable component and folder structure that supported growth across feature modules.",
    },
  ],

  // Nothing was listed on the resume. Add objects like
  // { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" }
  certifications: [],
};

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact", cta: true },
];

/* ============================================================
   2. SMALL HELPERS
   ============================================================ */

// Shows a clear placeholder when a URL hasn't been filled in yet
function linkOrPlaceholder(url, placeholder) {
  return url
    ? { href: url, label: url, missing: false }
    : { href: "#", label: placeholder, missing: true };
}

// Minimal inline SVG icons, so the site works with no icon library
const Icon = ({ name, className = "" }) => {
  const paths = {
    mail: "M2 5.5h20v13H2zM2 6l10 7 10-7",
    phone:
      "M6.6 2.5 9 3.2l1 3.4-1.8 1.5a13 13 0 0 0 6.7 6.7l1.5-1.8 3.4 1 .7 2.4a2 2 0 0 1-2 2.6C10.6 19.5 4.5 13.4 4 5.5a2 2 0 0 1 2.6-3Z",
    pin: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    github:
      "M9 19c-4.3 1.4-4.3-2.2-6-2.6m12 5v-3.6a3.1 3.1 0 0 0-.9-2.4c3-.3 6.1-1.5 6.1-6.6A5.1 5.1 0 0 0 18.8 5a4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.6 12.6 0 0 0-6.6 0C5.8 1.1 4.7 1.4 4.7 1.4A4.8 4.8 0 0 0 4.6 5a5.1 5.1 0 0 0-1.4 3.8c0 5.1 3.1 6.3 6.1 6.6a3.1 3.1 0 0 0-.9 2.4V21",
    linkedin:
      "M6 9v12M6 4.5v.01M10.5 21V9m0 4.5c0-2 1.4-3.5 3.4-3.5s3.6 1.5 3.6 4.2V21",
    arrowUp: "M12 19V5M5 12l7-7 7 7",
    external:
      "M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
    info: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 11v6M12 7.5v.01",
  };
  return (
    <svg
      className={"icon " + className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
};

/**
 * Reveal — fades its children in the first time they scroll into view.
 * Uses IntersectionObserver, which every modern browser supports.
 */
const Reveal = ({ children, as: Tag = "div", className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={"reveal " + (visible ? "is-visible " : "") + className}
    >
      {children}
    </Tag>
  );
};

// Shared section shell: mono eyebrow + heading + content
const Section = ({ id, eyebrow, title, children }) => (
  <section className="section" id={id}>
    <div className="container">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section__title">{title}</h2>
      {children}
    </div>
  </section>
);

const Tags = ({ items, muted = false }) => (
  <ul className={"tags" + (muted ? " tags--muted" : "")}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const Bullets = ({ items }) => (
  <ul className="bullets">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

/* ============================================================
   3. NAVIGATION
   ============================================================ */
const Navbar = ({ activeId }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile menu
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={"nav" + (scrolled ? " is-scrolled" : "")}>
      <div className="container nav__inner">
        <a
          href="#home"
          className="nav__brand"
          aria-label={resume.name + " — back to top"}
        >
          <span className="nav__monogram">KP</span>
          <span className="nav__brandtext">{resume.name}</span>
        </a>

        <nav
          className={"nav__menu" + (open ? " is-open" : "")}
          id="navMenu"
          aria-label="Main"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              className={
                "nav__link" +
                (item.cta ? " nav__link--cta" : "") +
                (activeId === item.id ? " is-active" : "")
              }
              href={"#" + item.id}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={"nav__toggle" + (open ? " is-open" : "")}
          aria-expanded={open}
          aria-controls="navMenu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__bar" />
          <span className="nav__bar" />
        </button>
      </div>
    </header>
  );
};

/* ============================================================
   4. HERO — the market line draws itself once on load
   ============================================================ */
const Hero = () => {
  const linkedin = linkOrPlaceholder(
    resume.links.linkedin,
    "[Add LinkedIn URL]",
  );
  const github = linkOrPlaceholder(resume.links.github, "[Add GitHub URL]");

  const line =
    "M0,250 L60,232 L120,244 L180,196 L240,214 L300,168 L360,186 L420,140 L480,158 L540,120 L600,146 L660,104 L720,126 L780,86 L840,102 L900,64 L960,84 L1020,52 L1080,70 L1140,34 L1200,48";

  return (
    <section className="hero" id="home">
      <svg
        className="hero__chart"
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4CC9F0" />
            <stop offset="100%" stopColor="#8B7CFF" />
          </linearGradient>
          <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B7CFF" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#8B7CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="hero__area"
          d={line + " L1200,320 L0,320 Z"}
          fill="url(#fillGrad)"
        />
        <path
          className="hero__line"
          d={line}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>

      <div className="container hero__inner">
        <p className="eyebrow hero__eyebrow">
          {resume.role} · {resume.years}
        </p>
        <h1 className="hero__name">{resume.name}</h1>

        <p className="hero__role">
          I build <span className="hl">{resume.headline}</span>
          {resume.headlineRest}
        </p>

        <p className="hero__intro">{resume.intro}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            View my work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact me
          </a>
        </div>

        <ul className="hero__links">
          <li>
            <a
              className="iconlink"
              target="_blank"
              href={linkedin.href}
              aria-label="LinkedIn profile"
            >
              <Icon name="linkedin" />{" "}
              {linkedin.missing ? linkedin.label : "LinkedIn"}
            </a>
          </li>
          <li>
            <a
              className="iconlink"
              target="_blank"
              href={github.href}
              aria-label="GitHub profile"
            >
              <Icon name="github" /> {github.missing ? github.label : "GitHub"}
            </a>
          </li>
          <li>
            <a className="iconlink" href={"mailto:" + resume.contact.email}>
              <Icon name="mail" /> {resume.contact.email}
            </a>
          </li>
        </ul>

        <dl className="stats">
          {resume.stats.map((stat, i) => (
            <Reveal key={stat.label} className="stats__item" delay={i * 80}>
              <dt className="stats__value">
                {stat.value}
                {stat.unit && <span className="stats__unit">{stat.unit}</span>}
              </dt>
              <dd className="stats__label">{stat.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
};

/* ============================================================
   5. CONTENT SECTIONS
   ============================================================ */
const About = () => (
  <Section
    id="about"
    eyebrow="01 — About"
    title="A frontend engineer who cares how the app behaves under load"
  >
    <div className="about">
      <Reveal className="about__text">
        {resume.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <ul className="about__facts">
          <li>
            <Icon name="pin" /> {resume.contact.location}
          </li>
          <li>
            <Icon name="phone" /> {resume.contact.phone}
          </li>
          <li>
            <Icon name="mail" /> {resume.contact.email}
          </li>
        </ul>
      </Reveal>

      {/* Profile photo: replace the placeholder below with
          <img src="/profile.jpg" alt="Portrait of Kannan P" /> */}
      <Reveal as="figure" className="about__photo">
        <div className="photo-frame">
          <span className="photo-frame__initials">KP</span>
          <span className="photo-frame__hint">[Add Profile Photo]</span>
        </div>
        <figcaption className="photo-caption">
          React · TypeScript · Real-time UI
        </figcaption>
      </Reveal>
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" eyebrow="02 — Education" title="Where it started">
    <Reveal as="article" className="edu">
      <div className="edu__date">{resume.education.date}</div>
      <div className="edu__body">
        <h3 className="edu__degree">{resume.education.degree}</h3>
        <p className="edu__school">{resume.education.school}</p>
        <p className="edu__place">
          <Icon name="pin" /> {resume.education.place}
        </p>
      </div>
    </Reveal>
  </Section>
);

const Skills = () => (
  <Section id="skills" eyebrow="03 — Technical skills" title="The toolkit">
    <div className="skills">
      {resume.skills.map((group, i) => (
        <Reveal
          key={group.title}
          as="article"
          className="card skill"
          delay={(i % 3) * 80}
        >
          <h3 className="skill__title">
            <span className="skill__index">
              {String(i + 1).padStart(2, "0")}
            </span>
            {group.title}
          </h3>
          <Tags items={group.items} />
        </Reveal>
      ))}
    </div>
  </Section>
);

const Experience = () => (
  <Section
    id="experience"
    eyebrow="04 — Experience"
    title="Five years, three product teams"
  >
    <ol className="timeline">
      {resume.experience.map((job) => (
        <Reveal key={job.company} as="li" className="timeline__item">
          <div className="timeline__marker" aria-hidden="true" />
          <div className="card timeline__card">
            <p className="timeline__date">{job.date}</p>
            <h3 className="timeline__role">
              {job.role}
              {job.badge && <span className="badge">{job.badge}</span>}
            </h3>
            <p className="timeline__company">
              {job.company} <span className="dot">·</span> {job.location}
            </p>
            <Bullets items={job.points} />
            <Tags items={job.tech} muted />
          </div>
        </Reveal>
      ))}
    </ol>
  </Section>
);

const Projects = () => (
  <Section
    id="projects"
    eyebrow="05 — Featured projects"
    title="Products I helped build"
  >
    <div className="projects">
      {resume.projects.map((project, i) => {
        const github = linkOrPlaceholder(project.github, "[Add GitHub URL]");
        const demo = linkOrPlaceholder(project.demo, "[Add live demo URL]");

        return (
          <Reveal
            key={project.title}
            as="article"
            className="card project"
            delay={i * 100}
          >
            <header className="project__head">
              <span className="project__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__org">{project.org}</p>
              </div>
            </header>

            <p className="project__desc">{project.description}</p>

            <h4 className="project__subhead">Key contributions</h4>
            <Bullets items={project.points} />
            <Tags items={project.tech} muted />

            <div className="project__links">
              {/* <a className="iconlink" href={github.href}>
                <Icon name="github" /> {github.missing ? github.label : "Source"}
              </a> */}
              <a className="iconlink" href={demo.href} target="_blank">
                <Icon name="external" />{" "}
                {demo.missing ? demo.label : "Live demo"}
              </a>
            </div>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

const Achievements = () => (
  <Section
    id="achievements"
    eyebrow="06 — Achievements & certifications"
    title="Measured outcomes"
  >
    <div className="wins">
      {resume.achievements.map((win, i) => (
        <Reveal
          key={win.metric}
          as="article"
          className="card win"
          delay={(i % 2) * 80}
        >
          <span className="win__metric">{win.metric}</span>
          <p className="win__text">{win.text}</p>
        </Reveal>
      ))}
    </div>

    <Reveal className="card certs">
      <h3 className="certs__title">Certifications</h3>
      {resume.certifications.length === 0 ? (
        <p className="certs__note">
          [Add certification name — issuing organisation — year]. Nothing was
          listed on the resume, so this is a placeholder. Add entries to{" "}
          <code>resume.certifications</code>, or delete the card if you'd rather
          not show it.
        </p>
      ) : (
        <ul className="certs__list">
          {resume.certifications.map((cert) => (
            <li key={cert.name}>
              <strong>{cert.name}</strong> — {cert.issuer}{" "}
              <span className="dot">·</span> {cert.year}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  </Section>
);

/* ============================================================
   6. CONTACT FORM — validation lives in React state
   ============================================================ */
const FIELDS = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    type: "text",
    test: (v) => v.trim().length >= 2,
    message: "Enter your name (at least 2 characters).",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "you@company.com",
    type: "email",
    test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    message: "Enter a valid email address, like you@company.com.",
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "What's this about?",
    type: "text",
    test: (v) => v.trim().length >= 3,
    message: "Add a short subject.",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "A few lines about the role or project",
    type: "textarea",
    test: (v) => v.trim().length >= 10,
    message: "Write at least 10 characters so I know what you need.",
  },
];

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const linkedin = linkOrPlaceholder(
    resume.links.linkedin,
    "[Add LinkedIn URL]",
  );
  const github = linkOrPlaceholder(resume.links.github, "[Add GitHub URL]");

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear an error as soon as the field becomes valid again
    const field = FIELDS.find((f) => f.name === name);
    if (errors[name] && field.test(value)) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateAll = () => {
    const next = {};
    FIELDS.forEach((field) => {
      if (!field.test(values[field.name])) next[field.name] = field.message;
    });
    setErrors(next);
    return next;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");

    const next = validateAll();
    const firstInvalid = FIELDS.find((f) => next[f.name]);
    if (firstInvalid) {
      document.getElementById(firstInvalid.name)?.focus();
      setStatus("Fix the highlighted fields and send again.");
      return;
    }

    if (!FORM_ENDPOINT) {
      setStatus(
        "Validated. Sending is not connected yet — add a form service URL to FORM_ENDPOINT, or email " +
          resume.contact.email +
          " directly.",
      );
      return;
    }

    try {
      setSending(true);
      setStatus("Sending…");
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setValues({ name: "", email: "", subject: "", message: "" });
        setStatus("Message sent. I'll reply within a day or two.");
      } else {
        setStatus(
          "That didn't send. Try again, or email " + resume.contact.email + ".",
        );
      }
    } catch (error) {
      setStatus("Network problem — check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="07 — Contact"
      title="Let's talk about your frontend"
    >
      <div className="contact">
        <Reveal className="contact__info">
          <p className="contact__lead">
            Open to frontend and full-stack frontend roles. The fastest way to
            reach me is email or phone.
          </p>

          <ul className="contact__list">
            <li>
              <span className="contact__icon">
                <Icon name="mail" />
              </span>
              <span>
                <span className="contact__label">Email</span>
                <a href={"mailto:" + resume.contact.email}>
                  {resume.contact.email}
                </a>
              </span>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="phone" />
              </span>
              <span>
                <span className="contact__label">Phone</span>
                <a href={resume.contact.phoneHref}>{resume.contact.phone}</a>
              </span>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="pin" />
              </span>
              <span>
                <span className="contact__label">Location</span>
                {resume.contact.location}
              </span>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="linkedin" />
              </span>
              <span>
                <span className="contact__label">LinkedIn</span>
                <a href={linkedin.href}>{linkedin.label}</a>
              </span>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="github" />
              </span>
              <span>
                <span className="contact__label">GitHub</span>
                <a href={github.href}>{github.label}</a>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal className="card contact__form">
          {/* Note: a plain <div> wrapper with onClick submit — no <form> needed */}
          <div>
            {FIELDS.map((field) => (
              <div className="field" key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    rows={5}
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    aria-invalid={Boolean(errors[field.name])}
                    className={errors[field.name] ? "has-error" : ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                ) : (
                  <input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    aria-invalid={Boolean(errors[field.name])}
                    className={errors[field.name] ? "has-error" : ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}
                <p className="field__error" role="alert">
                  {errors[field.name] || ""}
                </p>
              </div>
            ))}

            <button
              type="button"
              className="btn btn--primary btn--full"
              onClick={handleSubmit}
              disabled={sending}
            >
              {sending ? "Sending…" : "Send message"}
            </button>

            <p className="form-status" role="status">
              {status}
            </p>

            <p className="form-note">
              <Icon name="info" /> This form validates in the browser only. To
              actually receive emails, connect it to a free service such as
              Formspree, Web3Forms or Netlify Forms and set{" "}
              <code>FORM_ENDPOINT</code> at the top of this file.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

/* ============================================================
   7. FOOTER + BACK TO TOP
   ============================================================ */
const Footer = () => {
  const linkedin = linkOrPlaceholder(
    resume.links.linkedin,
    "[Add LinkedIn URL]",
  );
  const github = linkOrPlaceholder(resume.links.github, "[Add GitHub URL]");

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">
          {resume.name} <span className="dot">·</span> {resume.role}
        </p>
        <ul className="footer__links">
          <li>
            <a href={linkedin.href} aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
          </li>
          <li>
            <a href={github.href} aria-label="GitHub">
              <Icon name="github" />
            </a>
          </li>
          <li>
            <a href={"mailto:" + resume.contact.email} aria-label="Email">
              <Icon name="mail" />
            </a>
          </li>
          <li>
            <a href={resume.contact.phoneHref} aria-label="Phone">
              <Icon name="phone" />
            </a>
          </li>
        </ul>
        <p className="footer__copy">
          © {new Date().getFullYear()} {resume.name}. Built with React.
        </p>
      </div>
    </footer>
  );
};

const BackToTop = ({ visible }) => (
  <button
    className={"to-top" + (visible ? " is-visible" : "")}
    aria-label="Back to top"
    onClick={() => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    }}
  >
    <Icon name="arrowUp" />
  </button>
);

/* ============================================================
   8. APP — scroll progress, active nav, page assembly
   ============================================================ */
export default function App() {
  const [activeId, setActiveId] = useState("home");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  // Scroll progress bar + back-to-top visibility
  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
      setShowTop(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active navigation highlighting — whichever section owns the middle of the screen
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Page title and description, set once on mount
  useEffect(() => {
    document.title =
      resume.name + " — " + resume.role + " | React.js, Next.js, TypeScript";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = resume.intro;
  }, []);

  return (
    <div className="page">
      <style>{styles}</style>

      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <div
        className="scroll-progress"
        style={{ width: progress + "%" }}
        aria-hidden="true"
      />

      <Navbar activeId={activeId} />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <BackToTop visible={showTop} />
    </div>
  );
}

/* ============================================================
   9. STYLES
   Kept in this file so the component drops into any project.
   Move it to index.css if you prefer — nothing else changes.
   ============================================================ */
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

.page {
  --bg:#0B0E16; --bg-2:#10141F; --surface:#151A28; --surface-2:#1B2233;
  --line:#262E42; --text:#E7EAF3; --muted:#939CB4;
  --accent:#8B7CFF; --accent-2:#4CC9F0; --accent-soft:rgba(139,124,255,.14);
  --font-display:"Space Grotesk","Segoe UI",sans-serif;
  --font-body:"Inter","Segoe UI",system-ui,sans-serif;
  --font-mono:"JetBrains Mono","Courier New",monospace;
  --max:1120px; --radius:14px; --radius-sm:8px;
  --shadow:0 18px 40px rgba(0,0,0,.35); --nav-h:68px;

  background:
    radial-gradient(900px 480px at 82% -8%, rgba(139,124,255,.16), transparent 60%),
    radial-gradient(700px 400px at 5% 12%, rgba(76,201,240,.10), transparent 60%),
    var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}
html { scroll-behavior: smooth; scroll-padding-top: 84px; }
body { margin: 0; background: #0B0E16; }

.page *, .page *::before, .page *::after { box-sizing: border-box; }
.page ul, .page ol { margin: 0; padding: 0; list-style: none; }
.page a { color: inherit; text-decoration: none; }
.page h1, .page h2, .page h3, .page h4 { font-family: var(--font-display); line-height: 1.15; margin: 0; letter-spacing: -.02em; }
.page p { margin: 0 0 16px; }
.icon { width: 17px; height: 17px; flex: none; }

.container { width: 100%; max-width: var(--max); margin: 0 auto; padding: 0 24px; }
.section { padding: 96px 0; }
.section__title { font-size: clamp(1.7rem,3.6vw,2.5rem); font-weight: 600; max-width: 20ch; margin-bottom: 44px; }
.eyebrow { font-family: var(--font-mono); font-size:.78rem; letter-spacing:.16em; text-transform: uppercase; color: var(--accent); margin: 0 0 12px; }
.hl { color: var(--accent-2); }
.dot { color: var(--muted); margin: 0 4px; }
code { font-family: var(--font-mono); font-size:.82em; color: var(--text); }

.card {
  background: linear-gradient(180deg, var(--surface), var(--bg-2));
  border: 1px solid var(--line); border-radius: var(--radius); padding: 26px;
  transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
}
.card:hover { transform: translateY(-4px); border-color: rgba(139,124,255,.45); box-shadow: var(--shadow); }

.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 13px 26px; border-radius: 999px; border: 1px solid transparent;
  font-family: var(--font-display); font-size:.95rem; font-weight: 600; cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
}
.btn--primary { background: linear-gradient(120deg, var(--accent), var(--accent-2)); color: #0B0E16; }
.btn--primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(139,124,255,.35); }
.btn--primary:disabled { opacity:.6; cursor: not-allowed; transform: none; box-shadow: none; }
.btn--ghost { background: transparent; border-color: var(--line); color: var(--text); }
.btn--ghost:hover { border-color: var(--accent); background: var(--accent-soft); transform: translateY(-2px); }
.btn--full { width: 100%; }

.iconlink { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-mono); font-size:.85rem; color: var(--muted); transition: color .2s ease; }
.iconlink:hover { color: var(--accent-2); }

.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tags li { font-family: var(--font-mono); font-size:.78rem; padding: 5px 11px; border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); color: var(--text); }
.tags--muted li { color: var(--muted); background: transparent; }

.bullets li { position: relative; padding-left: 20px; margin-bottom: 9px; color: var(--muted); font-size:.94rem; }
.bullets li::before { content:""; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; border-radius: 2px; background: var(--accent); }

.skip-link { position: absolute; left: -9999px; top: 0; background: var(--accent); color: #0B0E16; padding: 10px 16px; z-index: 200; border-radius: 0 0 8px 0; }
.skip-link:focus { left: 0; }
.page a:focus-visible, .page button:focus-visible, .page input:focus-visible, .page textarea:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 3px; }

.scroll-progress { position: fixed; top: 0; left: 0; height: 2px; background: linear-gradient(90deg, var(--accent-2), var(--accent)); z-index: 120; }

/* Navigation */
.nav { position: fixed; top: 0; left: 0; right: 0; height: var(--nav-h); z-index: 100; display: flex; align-items: center; border-bottom: 1px solid transparent; transition: background .3s ease, border-color .3s ease; }
.nav.is-scrolled { background: rgba(11,14,22,.86); backdrop-filter: blur(12px); border-bottom-color: var(--line); }
.nav__inner { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
.nav__brand { display: flex; align-items: center; gap: 10px; }
.nav__monogram { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 10px; background: linear-gradient(135deg, var(--accent), var(--accent-2)); color: #0B0E16; font-family: var(--font-display); font-weight: 700; font-size:.85rem; }
.nav__brandtext { font-family: var(--font-display); font-weight: 600; white-space: nowrap; }
.nav__menu { display: flex; align-items: center; gap: 4px; }
.nav__link { padding: 8px 12px; border-radius: 999px; font-size:.9rem; color: var(--muted); transition: color .2s ease, background .2s ease; }
.nav__link:hover { color: var(--text); }
.nav__link.is-active { color: var(--text); background: var(--accent-soft); }
.nav__link--cta { border: 1px solid var(--line); color: var(--text); margin-left: 6px; }
.nav__link--cta:hover { border-color: var(--accent); }
.nav__toggle { display: none; flex-direction: column; justify-content: center; gap: 6px; width: 42px; height: 42px; border-radius: 10px; border: 1px solid var(--line); background: var(--surface); cursor: pointer; }
.nav__bar { display: block; width: 18px; height: 2px; margin: 0 auto; background: var(--text); transition: transform .25s ease; }
.nav__toggle.is-open .nav__bar:first-child { transform: translateY(4px) rotate(45deg); }
.nav__toggle.is-open .nav__bar:last-child { transform: translateY(-4px) rotate(-45deg); }

/* Hero */
.hero { position: relative; padding: calc(var(--nav-h) + 90px) 0 80px; overflow: hidden; }
.hero__chart { position: absolute; bottom: 0; left: 0; width: 100%; height: 62%; opacity:.5; pointer-events: none; }
.hero__line { stroke-dasharray: 2600; stroke-dashoffset: 2600; animation: draw 2.6s ease-out .2s forwards; }
.hero__area { opacity: 0; animation: fadeIn 1.6s ease-out 1.4s forwards; }
.hero__inner { position: relative; z-index: 2; }
.hero__eyebrow { margin-bottom: 18px; }
.hero__name {
  font-size: clamp(3rem,10vw,6.5rem); font-weight: 700; letter-spacing: -.04em; line-height:.95; margin-bottom: 18px;
  background: linear-gradient(100deg,#FFF 20%, var(--accent) 65%, var(--accent-2) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.hero__role { font-family: var(--font-display); font-size: clamp(1.1rem,2.6vw,1.6rem); font-weight: 500; max-width: 24ch; margin: 0 0 18px; }
.hero__intro { max-width: 58ch; color: var(--muted); margin: 0 0 30px; }
.hero__actions { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 26px; }
.hero__links { display: flex; flex-wrap: wrap; gap: 22px; margin-bottom: 60px; }

.stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; margin: 0; background: var(--line); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
.stats__item { background: var(--bg-2); padding: 22px; }
.stats__value { font-family: var(--font-display); font-size: 1.9rem; font-weight: 700; color: var(--accent-2); }
.stats__unit { font-size: 1rem; color: var(--muted); margin-left: 2px; }
.stats__label { margin: 4px 0 0; font-size:.85rem; color: var(--muted); }

/* About */
.about { display: grid; grid-template-columns: 1.5fr 1fr; gap: 48px; align-items: start; }
.about__text p { color: var(--muted); }
.about__facts { margin-top: 26px; display: grid; gap: 10px; }
.about__facts li { display: flex; align-items: center; gap: 12px; font-family: var(--font-mono); font-size:.85rem; color: var(--text); }
.about__facts .icon { color: var(--accent); }
.about__photo { margin: 0; }
.photo-frame { position: relative; display: grid; place-content: center; gap: 8px; aspect-ratio: 4/5; border-radius: var(--radius); border: 1px dashed var(--line); background: linear-gradient(160deg, var(--surface), var(--bg-2)); text-align: center; overflow: hidden; }
.photo-frame img { width: 100%; height: 100%; object-fit: cover; }
.photo-frame__initials { font-family: var(--font-display); font-size: 3.6rem; font-weight: 700; color: var(--accent); }
.photo-frame__hint { font-family: var(--font-mono); font-size:.75rem; color: var(--muted); }
.photo-caption { margin-top: 12px; font-family: var(--font-mono); font-size:.78rem; color: var(--muted); text-align: center; }

/* Education */
.edu { display: grid; grid-template-columns: 160px 1fr; gap: 24px; padding: 28px; border: 1px solid var(--line); border-radius: var(--radius); background: linear-gradient(180deg, var(--surface), var(--bg-2)); }
.edu__date { font-family: var(--font-mono); font-size:.85rem; color: var(--accent-2); }
.edu__degree { font-size: 1.2rem; font-weight: 600; margin-bottom: 6px; }
.edu__school { margin: 0; color: var(--text); }
.edu__place { margin: 6px 0 0; color: var(--muted); font-size:.9rem; display: flex; align-items: center; gap: 8px; }
.edu__place .icon { color: var(--accent); }

/* Skills */
.skills { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
.skill__title { display: flex; align-items: center; gap: 12px; font-size: 1rem; font-weight: 600; margin-bottom: 16px; }
.skill__index { font-family: var(--font-mono); font-size:.72rem; color: var(--accent); border: 1px solid var(--line); border-radius: 6px; padding: 2px 6px; }

/* Experience */
.timeline { position: relative; display: grid; gap: 26px; padding-left: 28px; }
.timeline::before { content:""; position: absolute; left: 5px; top: 8px; bottom: 8px; width: 1px; background: linear-gradient(180deg, var(--accent), transparent); }
.timeline__item { position: relative; }
.timeline__marker { position: absolute; left: -28px; top: 26px; width: 11px; height: 11px; border-radius: 50%; background: var(--bg); border: 2px solid var(--accent); }
.timeline__date { font-family: var(--font-mono); font-size:.82rem; color: var(--accent-2); margin: 0 0 8px; }
.timeline__role { font-size: 1.25rem; font-weight: 600; }
.timeline__company { margin: 4px 0 16px; color: var(--muted); font-size:.95rem; }
.timeline__card .tags { margin-top: 16px; }
.badge { display: inline-block; vertical-align: middle; margin-left: 10px; padding: 3px 10px; border-radius: 999px; background: var(--accent-soft); border: 1px solid rgba(139,124,255,.4); font-family: var(--font-mono); font-size:.7rem; color: var(--accent); }

/* Projects */
.projects { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
.project__head { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 16px; }
.project__num { display: grid; place-items: center; flex: none; width: 42px; height: 42px; border-radius: 12px; background: var(--accent-soft); color: var(--accent); font-family: var(--font-mono); font-size:.85rem; }
.project__title { font-size: 1.15rem; font-weight: 600; }
.project__org { margin: 4px 0 0; font-family: var(--font-mono); font-size:.78rem; color: var(--muted); }
.project__desc { color: var(--muted); font-size:.95rem; margin: 0 0 18px; }
.project__subhead { font-family: var(--font-mono); font-size:.75rem; letter-spacing:.12em; text-transform: uppercase; margin-bottom: 10px; }
.project .tags { margin-top: 16px; }
.project__links { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--line); }

/* Achievements */
.wins { display: grid; grid-template-columns: repeat(2,1fr); gap: 18px; margin-bottom: 20px; }
.win__metric { display: block; font-family: var(--font-display); font-size: 1.6rem; font-weight: 700; color: var(--accent); margin-bottom: 8px; }
.win__text { margin: 0; color: var(--muted); font-size:.94rem; }
.certs__title { font-size: 1rem; margin-bottom: 10px; }
.certs__note { margin: 0; color: var(--muted); font-size:.92rem; }
.certs__list li { color: var(--muted); margin-bottom: 8px; }
.certs__list strong { color: var(--text); }

/* Contact */
.contact { display: grid; grid-template-columns: 1fr 1.1fr; gap: 42px; align-items: start; }
.contact__lead { color: var(--muted); margin: 0 0 26px; max-width: 40ch; }
.contact__list { display: grid; gap: 18px; }
.contact__list li { display: flex; gap: 14px; align-items: flex-start; }
.contact__icon { display: grid; place-items: center; flex: none; width: 38px; height: 38px; border-radius: 10px; background: var(--surface-2); border: 1px solid var(--line); color: var(--accent); }
.contact__label { display: block; font-family: var(--font-mono); font-size:.72rem; letter-spacing:.1em; text-transform: uppercase; color: var(--muted); }
.contact__list a { transition: color .2s ease; }
.contact__list a:hover { color: var(--accent-2); }

.field { margin-bottom: 16px; }
.field label { display: block; font-family: var(--font-mono); font-size:.75rem; letter-spacing:.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 7px; }
.field input, .field textarea { width: 100%; padding: 12px 14px; border-radius: var(--radius-sm); border: 1px solid var(--line); background: var(--bg); color: var(--text); font-family: var(--font-body); font-size:.95rem; transition: border-color .2s ease, background .2s ease; }
.field input::placeholder, .field textarea::placeholder { color:#5C6580; }
.field input:focus, .field textarea:focus { border-color: var(--accent); background: var(--bg-2); }
.field textarea { resize: vertical; min-height: 120px; }
.field .has-error { border-color:#FF6B81; }
.field__error { margin: 6px 0 0; min-height: 1em; font-size:.8rem; color:#FF8A9B; }
.form-status { margin: 14px 0 0; font-size:.9rem; color: var(--accent-2); min-height: 1em; }
.form-note { margin: 16px 0 0; padding-top: 16px; border-top: 1px solid var(--line); font-size:.82rem; color: var(--muted); }
.form-note .icon { color: var(--accent); vertical-align: -3px; margin-right: 6px; }

/* Footer + back to top */
.footer { border-top: 1px solid var(--line); background: var(--bg-2); padding: 40px 0; }
.footer__inner { display: grid; gap: 18px; justify-items: center; text-align: center; }
.footer__name { margin: 0; font-family: var(--font-display); font-weight: 600; }
.footer__links { display: flex; gap: 12px; }
.footer__links a { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--line); color: var(--muted); transition: color .2s ease, border-color .2s ease, transform .2s ease; }
.footer__links a:hover { color: var(--accent); border-color: var(--accent); transform: translateY(-3px); }
.footer__copy { margin: 0; font-size:.84rem; color: var(--muted); }

.to-top { position: fixed; right: 22px; bottom: 22px; display: grid; place-items: center; width: 46px; height: 46px; border-radius: 50%; border: 1px solid var(--line); background: var(--surface); color: var(--text); cursor: pointer; opacity: 0; visibility: hidden; transform: translateY(10px); transition: opacity .25s ease, transform .25s ease, visibility .25s; z-index: 90; }
.to-top.is-visible { opacity: 1; visibility: visible; transform: translateY(0); }
.to-top:hover { border-color: var(--accent); color: var(--accent); }

/* Animations */
.reveal { opacity: 0; transform: translateY(22px); transition: opacity .6s ease, transform .6s ease; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
@keyframes draw { to { stroke-dashoffset: 0; } }
@keyframes fadeIn { to { opacity: 1; } }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .page *, .page *::before, .page *::after { animation-duration:.01ms !important; transition-duration:.01ms !important; }
  .reveal { opacity: 1; transform: none; }
  .hero__line { stroke-dashoffset: 0; }
  .hero__area { opacity: 1; }
}

/* Responsive */
@media (max-width: 980px) {
  .skills { grid-template-columns: repeat(2,1fr); }
  .projects { grid-template-columns: 1fr; }
  .about { grid-template-columns: 1fr; gap: 34px; }
  .about__photo { max-width: 300px; }
  .contact { grid-template-columns: 1fr; gap: 34px; }
  .stats { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 760px) {
  .section { padding: 72px 0; }
  .nav__toggle { display: flex; }
  .nav__menu {
    position: absolute; top: var(--nav-h); left: 0; right: 0;
    flex-direction: column; align-items: stretch; gap: 2px;
    padding: 14px 24px 22px; background: rgba(11,14,22,.97); backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--line);
    transform: translateY(-12px); opacity: 0; visibility: hidden;
    transition: opacity .25s ease, transform .25s ease, visibility .25s;
  }
  .nav__menu.is-open { opacity: 1; visibility: visible; transform: translateY(0); }
  .nav__link { padding: 12px 14px; font-size: 1rem; }
  .nav__link--cta { margin-left: 0; text-align: center; margin-top: 8px; }
  .hero { padding-top: calc(var(--nav-h) + 60px); }
  .hero__actions .btn { flex: 1 1 auto; }
  .edu { grid-template-columns: 1fr; gap: 10px; }
  .wins { grid-template-columns: 1fr; }
  .skills { grid-template-columns: 1fr; }
}
@media (max-width: 460px) {
  .stats { grid-template-columns: 1fr; }
  .hero__links { gap: 14px; }
  .card { padding: 20px; }
  .nav__brandtext { display: none; }
}
`;
