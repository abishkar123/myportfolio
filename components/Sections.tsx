import Image from "next/image";
import Reveal from "./Reveal";
import TypedText from "./TypedText";
import { site, experience, skills, projects } from "@/lib/data";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
    </Reveal>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 py-16 lg:flex-row lg:justify-between">
        <Reveal className="max-w-2xl text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Hi, my name is
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl lg:text-7xl">
            Abishkar <span className="gradient-text">Rai</span>.
          </h1>
          <h2 className="mt-4 font-display text-2xl font-semibold text-ink-muted sm:text-3xl">
            I build <TypedText />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-muted lg:mx-0">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 font-semibold text-[#0a0f0d] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-accent px-7 py-3 font-semibold text-accent transition hover:-translate-y-0.5 hover:bg-accent/10"
            >
              Get In Touch
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <a href={site.linkedin} target="_blank" aria-label="LinkedIn">
              <Image
                src="/assets/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="invert-[0.85] transition hover:-translate-y-1"
              />
            </a>
            <a href={site.github} target="_blank" aria-label="GitHub">
              <Image
                src="/assets/github.png"
                alt="GitHub"
                width={32}
                height={32}
                className="invert-[0.85] transition hover:-translate-y-1"
              />
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} className="shrink-0">
          <div className="rounded-full bg-gradient-to-br from-accent to-accent-2 p-1.5 shadow-[0_0_60px_rgba(52,211,153,0.25)]">
            <Image
              src="/assets/profile-pic.png"
              alt="Abishkar Rai"
              width={340}
              height={340}
              priority
              className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Get To Know More" title="About Me" />
      <div className="flex flex-col items-center gap-12 lg:flex-row">
        <Reveal className="shrink-0">
          <div className="flex h-80 w-80 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 shadow-2xl">
            <span className="font-display text-7xl font-bold text-[#0a0f0d]">AR</span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-4 text-ink-muted">
            <p>
              I&apos;m a Software Engineer in Sydney who enjoys turning complex problems into
              clean, user-centric products. I&apos;ve shipped responsive real estate platforms,
              EdTech features, and AI-powered tools — working across the stack from React and
              Next.js frontends to Node.js APIs deployed on AWS.
            </p>
            <p>
              Lately I&apos;ve been deep in the AI space: building RAG applications, AI
              customer-service agents with LangChain and vector databases, and automation
              workflows that save teams real time. I care about performance, clean architecture,
              and code reviews that make the whole team better.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-edge bg-surface p-6 text-center">
              <h3 className="font-display font-semibold">Experience</h3>
              <p className="mt-1 text-sm text-ink-muted">
                3+ years
                <br />
                Full-Stack Development
              </p>
            </div>
            <div className="rounded-2xl border border-edge bg-surface p-6 text-center">
              <h3 className="font-display font-semibold">Education</h3>
              <p className="mt-1 text-sm text-ink-muted">
                Bachelor of IT — Software Development
                <br />
                Federation University, Sydney
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Where I've Worked" title="Experience" />
      <div className="relative border-l-2 border-accent/30 pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 100} className="relative mb-8 last:mb-0">
            <span className="absolute -left-[41px] top-7 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-accent to-accent-2 ring-4 ring-accent/15" />
            <article className="rounded-2xl border border-edge bg-surface p-7 transition hover:-translate-y-1 hover:border-accent">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm font-semibold text-accent">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{job.location}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-muted">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="What I Work With" title="Skills" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 80}>
            <div className="h-full rounded-2xl border border-edge bg-surface p-6 transition hover:-translate-y-1 hover:border-accent">
              <h3 className="font-display font-semibold">{group.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Things I've Built" title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface transition hover:-translate-y-1.5 hover:border-accent">
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                <p className="flex-1 text-sm text-ink-muted">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      className="rounded-full border border-accent px-4 py-1.5 text-sm font-semibold text-accent transition hover:bg-accent/10"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12 text-center">
        <a
          href={site.github}
          target="_blank"
          className="inline-block rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 font-semibold text-[#0a0f0d] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
        >
          See More on GitHub
        </a>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const cards = [
    { label: site.email, href: `mailto:${site.email}`, icon: "/assets/email.png" },
    { label: site.phone, href: site.phoneHref },
    { label: "LinkedIn", href: site.linkedin, icon: "/assets/linkedin.png" },
    { label: "GitHub", href: site.github, icon: "/assets/github.png" },
  ];

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Get In Touch" title="Contact Me" />
      <Reveal className="-mt-6 mb-10 text-center">
        <p className="mx-auto max-w-xl text-ink-muted">
          I&apos;m open to new opportunities, collaborations, and interesting projects. Whether
          you have a question or just want to say hi, my inbox is always open.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <div className="flex flex-wrap justify-center gap-4">
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              className="flex items-center gap-3 rounded-full border border-edge bg-surface px-6 py-3 font-medium transition hover:-translate-y-1 hover:border-accent"
            >
              {card.icon ? (
                <Image
                  src={card.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="invert-[0.85]"
                />
              ) : (
                <span aria-hidden>📞</span>
              )}
              {card.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-edge/60 px-6 py-12 text-center text-sm text-ink-muted">
      <p>Designed &amp; built by Abishkar Rai · Sydney, NSW</p>
      <p className="mt-1">© {new Date().getFullYear()} Abishkar Rai. All rights reserved.</p>
    </footer>
  );
}
