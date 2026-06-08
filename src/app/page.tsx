import Link from "next/link";

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
    // Update the repo link if your project lives at a specific URL.
    repo: "https://github.com/AnupMunda-code",
    demo: "#",
  },
];

// Your contact links.
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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
      <span className="text-accent">#</span> {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-mono text-lg font-bold text-foreground">
            anup<span className="text-accent">.dev</span>
          </Link>
          <div className="hidden gap-6 text-sm text-muted sm:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground">
              Skills
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        {/* Hero */}
        <section className="flex min-h-[80vh] flex-col justify-center py-20">
          <p className="mb-4 font-mono text-accent">Hi, my name is</p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Anup Munda.
          </h1>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-muted sm:text-5xl">
            I build things for the web.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            I&apos;m a{" "}
            <span className="text-accent">MERN stack developer</span> who enjoys
            crafting full-stack web applications with MongoDB, Express, React,
            and Node.js.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href={social.email}
              className="rounded-md border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20">
          <SectionHeading>About Me</SectionHeading>
          <div className="max-w-2xl space-y-4 text-muted">
            <p>
              Hello! I&apos;m Anup, a developer focused on the MERN stack. I love
              turning ideas into functional, well-built web applications — from
              designing the database schema to shipping a polished user
              interface.
            </p>
            <p>
              My main focus right now is building full-stack projects that solve
              real problems, like my Inventory Management System. I&apos;m always
              learning and looking to take on new challenges.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <SectionHeading>Skills &amp; Technologies</SectionHeading>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-card px-4 py-2 font-mono text-sm text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent sm:p-8"
              >
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-muted">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded bg-background px-2.5 py-1 font-mono text-xs text-accent2"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-4 text-sm font-medium">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-accent"
                  >
                    GitHub →
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground transition-colors hover:text-accent"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 text-center">
          <SectionHeading>Get In Touch</SectionHeading>
          <p className="mx-auto max-w-xl text-muted">
            I&apos;m currently open to new opportunities and collaborations. Feel
            free to reach out — my inbox is always open!
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={social.email}
              className="rounded-md bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
            >
              Say Hello
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-5 py-2.5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center font-mono text-sm text-muted">
          Built with Next.js &amp; Tailwind CSS · Anup Munda
        </div>
      </footer>
    </>
  );
}
