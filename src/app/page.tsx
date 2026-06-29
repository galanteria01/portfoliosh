import { profile, projects, socials } from "@/lib/data";

function Label({ children }: { children: string }) {
  return (
    <p className="mb-4 text-xs tracking-wide text-muted">
      <span className="text-accent">$</span> {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6 py-20">
      <header className="fade-in">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {profile.name}
          <span className="caret" aria-hidden />
        </h1>
        <p className="mt-3 text-cyan">{profile.role}</p>
      </header>

      <section className="mt-14 fade-in">
        <Label>about</Label>
        <p className="max-w-prose leading-relaxed text-foreground/85">
          {profile.bio.join(" ")}
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
          {profile.stack.map((s) => (
            <li key={s}>
              <span className="text-accent-dim">+</span> {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 fade-in">
        <Label>projects</Label>
        <ul className="flex flex-col gap-6">
          {projects.map((p) => (
            <li key={p.name}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-accent transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                  <span className="font-medium underline-offset-4 group-hover:text-accent group-hover:underline">
                    {p.name}
                  </span>
                  <span className="text-xs text-muted">[{p.language}]</span>
                </div>
                <p className="mt-1 pl-6 text-sm text-foreground/70">
                  {p.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 fade-in">
        <Label>contact</Label>
        <ul className="flex flex-col gap-2.5 text-sm">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group inline-flex flex-wrap items-baseline gap-x-3"
              >
                <span className="w-16 shrink-0 text-muted">{s.label}</span>
                <span className="underline-offset-4 group-hover:text-accent group-hover:underline">
                  {s.display}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-20 text-xs text-muted fade-in">
        <span className="text-accent-dim">$</span> {profile.handle}@{profile.host}{" "}
        · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
