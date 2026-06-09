import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ParallaxOrbs } from "@/components/ParallaxOrbs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";
import { BackToTop } from "@/components/BackToTop";
import { MobileNav } from "@/components/MobileNav";

const stats = [
  { value: 9, suffix: "+", label: "Technologies" },
  { value: 1, suffix: "", label: "Featured project" },
  { value: 100, suffix: "%", label: "Dedication" },
  { value: 24, suffix: "/7", label: "Always learning" },
];

const services = [
  {
    title: "Frontend",
    desc: "Building responsive, accessible interfaces with React and Tailwind CSS that feel fast and polished.",
    items: ["React", "Tailwind", "Responsive UI"],
  },
  {
    title: "Backend",
    desc: "Designing REST APIs and data models with Node.js, Express, and MongoDB that scale cleanly.",
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Full-Stack",
    desc: "Shipping complete MERN applications end-to-end — from database schema to deployed product.",
    items: ["MERN", "Auth", "Deployment"],
  },
];

const marqueeItems = [
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
  "Git",
];

const skills = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "REST APIs",
  "Tailwind CSS",
  "Git & GitHub",
];

const projects = [
  {
    title: "Inventory Management System",
    description:
      "A full-stack MERN application built with a team during my internship to track stock, manage products, and monitor inventory levels in real time. Includes CRUD operations for products, low-stock alerts, and a clean dashboard for an at-a-glance overview.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    repo: "https://github.com/AnupMunda-code",
    demo: "#",
  },
];

const experience = [
  {
    role: "MERN Stack Developer Intern",
    company: "Venturing Digitally",
    href: "https://venturingdigitally.com/",
    period: "Jun 2025 – Sep 2025",
    points: [
      "Built an Inventory Management System with a team using the MERN stack (MongoDB, Express, React, Node.js).",
      "Developed responsive user interfaces and integrated REST APIs end-to-end.",
      "Collaborated in a team environment on a real-world product, improving code quality and delivery.",
    ],
  },
];

const certifications = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    meta: "Credential ID: 78xgy28gvwvp",
    file: "/certificates/Claude_Code_in_Action.pdf",
    verify: "https://verify.skilljar.com/c/78xgy28gvwvp",
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte · via Forage",
    meta: "Dec 2025 · Coding & Development",
    file: "/certificates/Deloitte_Technology_Job_Simulation.pdf",
    verify: "",
  },
];

const social = {
  email: "mailto:anupmunda03@gmail.com",
  github: "https://github.com/AnupMunda-code",
  linkedin: "https://www.linkedin.com/in/anup-munda-2b9b832a6",
  instagram: "https://www.instagram.com/anma0446",
  twitter: "https://x.com/nma0446",
  facebook: "https://www.facebook.com/share/1BJW8xt4jF/",
  reddit: "https://www.reddit.com/u/Alarming_Classic4041",
};

const socialLinks = [
  { label: "GitHub", href: social.github },
  { label: "LinkedIn", href: social.linkedin },
  { label: "Instagram", href: social.instagram },
  { label: "Twitter / X", href: social.twitter },
  { label: "Facebook", href: social.facebook },
  { label: "Reddit", href: social.reddit },
];

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3 sm:mb-10 sm:gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">{children}</h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="grain relative">
      {/* Background glow orbs (parallax) */}
      <ParallaxOrbs />

      <div className="relative z-[2]">
        {/* Nav */}
        <header id="top" className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md md:backdrop-blur-xl">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="font-mono text-lg font-bold">
              anup<span className="gradient-text">.dev</span>
            </Link>
            <div className="flex items-center gap-4 sm:gap-7">
              <div className="hidden gap-7 text-sm text-muted sm:flex">
                <a href="#about" className="transition-colors hover:text-foreground">About</a>
                <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
                <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
                <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
                <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
              </div>
              <ThemeToggle />
              <MobileNav />
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
          {/* Hero */}
          <section className="flex min-h-[88vh] flex-col justify-center py-16 sm:py-20">
            <Reveal>
              <div className="mb-7 flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent via-accent2 to-accent3 text-sm font-bold tracking-tight text-background">
                  ANMA
                  <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background bg-emerald-400" />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available for opportunities
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                Anup
                <br />
                <span className="gradient-text">Munda.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base text-muted sm:mt-8 sm:text-lg lg:text-xl">
                A <span className="text-foreground">MERN stack developer</span> crafting
                full-stack web applications with MongoDB, Express, React, and Node.js —
                turning ideas into fast, polished products.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-foreground px-6 py-3 font-medium text-background transition-transform hover:-translate-y-0.5 sm:px-7"
                >
                  View my work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-border px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent sm:px-7"
                >
                  Get in touch
                </a>
                <a
                  href="/Anup_Munda_Resume.pdf"
                  download
                  className="rounded-full border border-border px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent sm:px-7"
                >
                  Download CV ↓
                </a>
              </div>
            </Reveal>
          </section>

          {/* Marquee */}
          <div className="marquee-mask -mx-5 border-y border-border py-5 sm:-mx-6 sm:py-6 lg:-mx-8">
            <div className="marquee-track gap-8 sm:gap-10">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-8 font-mono text-xl text-muted sm:gap-10 sm:text-2xl lg:text-3xl"
                >
                  {item}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <section className="grid grid-cols-2 gap-6 py-12 sm:grid-cols-4 sm:py-20">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    <span className="gradient-text">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-muted">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </section>

          {/* About */}
          <section id="about" className="py-16 sm:py-24">
            <Reveal>
              <SectionLabel index="01">About</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  Hello! I&apos;m Anup — a developer who loves building for the web and is
                  genuinely curious about how technology shapes the world around us. I
                  enjoy learning, experimenting, and turning ideas into things that work.
                </p>
                <p>
                  I also work with artificial intelligence to build projects and enhance
                  my work — using modern AI tools alongside other technologies to work
                  smarter, move faster, and bring better ideas to life.
                </p>
                <p>
                  I&apos;m a firm believer in continuous learning. There&apos;s always
                  something new to pick up, and I&apos;m always growing my skills to
                  become a better developer.
                </p>
              </div>
            </Reveal>
          </section>

          {/* Skills */}
          <section id="skills" className="py-16 sm:py-24">
            <Reveal>
              <SectionLabel index="02">Skills &amp; Tech</SectionLabel>
            </Reveal>
            <Reveal>
              <ul className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="glass rounded-xl px-5 py-2.5 font-mono text-sm leading-none transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* What I Do */}
          <section className="py-16 sm:py-24">
            <Reveal>
              <SectionLabel index="03">What I Do</SectionLabel>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 0.1}>
                  <div className="glass group h-full rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-accent/50">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border font-mono text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.desc}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-accent2"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="py-16 sm:py-24">
            <Reveal>
              <SectionLabel index="04">Experience</SectionLabel>
            </Reveal>
            <div className="relative border-l border-border pl-6 sm:pl-8">
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 0.1}>
                  <div className="relative pb-2">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background sm:-left-[39px]" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="text-lg font-bold sm:text-xl">{job.role}</h3>
                      <span className="font-mono text-xs text-accent sm:text-sm">
                        {job.period}
                      </span>
                    </div>
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-muted transition-colors hover:text-accent"
                    >
                      {job.company} ↗
                    </a>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
                        >
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="py-16 sm:py-24">
            <Reveal>
              <SectionLabel index="05">Projects</SectionLabel>
            </Reveal>
            <div className="grid gap-6">
              {projects.map((project, i) => (
                <Reveal key={project.title} delay={i * 0.1}>
                  <article className="glass group relative overflow-hidden rounded-2xl p-8 transition-all hover:-translate-y-1 hover:border-accent/50">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <span className="font-mono text-sm text-accent">Featured project</span>
                      <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                      <p className="mt-4 max-w-2xl text-muted">{project.description}</p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <li
                            key={t}
                            className="rounded-md border border-border px-3 py-1 font-mono text-xs text-accent2"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 flex gap-5 text-sm font-medium">
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-accent"
                        >
                          GitHub →
                        </a>
                        {project.demo && project.demo !== "#" && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-accent"
                          >
                            Live Demo →
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section id="certifications" className="py-16 sm:py-24">
            <Reveal>
              <SectionLabel index="06">Certifications</SectionLabel>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {certifications.map((cert, i) => (
                <Reveal key={cert.title} delay={i * 0.1}>
                  <div className="glass group flex h-full flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-accent/50 sm:p-7">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-accent">
                      <span className="text-lg">🏆</span>
                    </div>
                    <h3 className="text-lg font-bold sm:text-xl">{cert.title}</h3>
                    <p className="mt-1 text-sm font-medium text-accent2">{cert.issuer}</p>
                    <p className="mt-2 font-mono text-xs text-muted">{cert.meta}</p>
                    <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground transition-colors hover:text-accent"
                      >
                        View certificate →
                      </a>
                      {cert.verify && (
                        <a
                          href={cert.verify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted transition-colors hover:text-accent"
                        >
                          Verify ↗
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-16 text-center sm:py-24">
            <Reveal>
              <p className="font-mono text-sm text-accent">07 — What&apos;s next</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s build something{" "}
                <span className="gradient-text">together.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
                I&apos;m currently open to new opportunities and collaborations. My inbox
                is always open — say hello!
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ContactForm />
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-center font-mono text-sm text-muted sm:flex-row sm:px-6 sm:text-left lg:px-8">
            <span>Designed &amp; built by Anup Munda · Next.js &amp; Tailwind CSS</span>
            <BackToTop />
          </div>
        </footer>
      </div>
    </div>
  );
}
