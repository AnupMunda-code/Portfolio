import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ParallaxOrbs } from "@/components/ParallaxOrbs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";

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
      "A full-stack MERN application to track stock, manage products, and monitor inventory levels in real time. Includes CRUD operations for products, low-stock alerts, and a clean dashboard for an at-a-glance overview.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    repo: "https://github.com/AnupMunda-code",
    demo: "#",
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
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{children}</h2>
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
        <header id="top" className="sticky top-0 z-20 border-b border-border bg-background/60 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-mono text-lg font-bold">
              anup<span className="gradient-text">.dev</span>
            </Link>
            <div className="flex items-center gap-7">
              <div className="hidden gap-7 text-sm text-muted sm:flex">
                <a href="#about" className="transition-colors hover:text-foreground">About</a>
                <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
                <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
                <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
              </div>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-5xl px-6">
          {/* Hero */}
          <section className="flex min-h-[88vh] flex-col justify-center py-20">
            <Reveal>
              <div className="mb-7 flex items-center gap-4">
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
              <h1 className="text-6xl font-bold leading-[0.95] tracking-tight sm:text-8xl">
                Anup
                <br />
                <span className="gradient-text">Munda.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-lg text-muted sm:text-xl">
                A <span className="text-foreground">MERN stack developer</span> crafting
                full-stack web applications with MongoDB, Express, React, and Node.js —
                turning ideas into fast, polished products.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-foreground px-7 py-3 font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  View my work
                </a>
                <a
                  href={social.email}
                  className="rounded-full border border-border px-7 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  Get in touch
                </a>
                <a
                  href="/Anup_Munda_Resume.pdf"
                  download
                  className="rounded-full border border-border px-7 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  Download CV ↓
                </a>
              </div>
            </Reveal>
          </section>

          {/* Marquee */}
          <div className="marquee-mask -mx-6 border-y border-border py-6">
            <div className="marquee-track gap-10">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 font-mono text-2xl text-muted sm:text-3xl"
                >
                  {item}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <section className="grid grid-cols-2 gap-6 py-20 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold tracking-tight sm:text-5xl">
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
          <section id="about" className="py-24">
            <Reveal>
              <SectionLabel index="01">About</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Hello! I&apos;m Anup, a developer focused on the MERN stack. I love
                  turning ideas into functional, well-built web applications — from
                  designing the database schema to shipping a polished user interface.
                </p>
                <p>
                  My main focus right now is building full-stack projects that solve real
                  problems, like my Inventory Management System. I&apos;m always learning
                  and looking to take on new challenges.
                </p>
              </div>
            </Reveal>
          </section>

          {/* Skills */}
          <section id="skills" className="py-24">
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
          <section className="py-24">
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

          {/* Projects */}
          <section id="projects" className="py-24">
            <Reveal>
              <SectionLabel index="04">Projects</SectionLabel>
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

          {/* Contact */}
          <section id="contact" className="py-24 text-center">
            <Reveal>
              <p className="font-mono text-sm text-accent">05 — What&apos;s next</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
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
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-sm text-muted sm:flex-row">
            <span>Designed &amp; built by Anup Munda · Next.js &amp; Tailwind CSS</span>
            <a href="#top" className="transition-colors hover:text-accent">
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
