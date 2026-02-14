import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";
import { Github } from "lucide-react";

export function Hero() {
  return (
    <section className="flex min-h-[90vh] items-center pt-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <ScrollReveal>
              <span className="mb-4 block font-mono text-sm text-accent">
                {personalInfo.title}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {personalInfo.name}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                {personalInfo.statement}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="#experience">
                  View Experience
                </Button>
                <Button
                  variant="secondary"
                  href={personalInfo.socials.find((s) => s.label === "GitHub")?.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  <span className="ml-2">GitHub</span>
                </Button>
                <Button variant="ghost" href="#contact">
                  Contact
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="hidden lg:block">
              <Image
                src="/headshot.webp"
                alt={personalInfo.name}
                width={320}
                height={320}
                priority
                className="rounded-2xl object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
