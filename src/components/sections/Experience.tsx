import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { caseStudies } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading label="Where I've worked" title="Experience" />
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.project} delay={index * 0.1}>
              <Card>
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  {study.url ? (
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xl font-semibold transition-colors hover:text-accent"
                    >
                      {study.project}
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <h3 className="text-xl font-semibold">{study.project}</h3>
                  )}
                  <span className="font-mono text-sm text-muted">
                    {study.period}
                  </span>
                </div>

                <p className="mb-4 text-sm font-medium text-accent">
                  {study.position}
                </p>

                <ul className="mb-4 space-y-2">
                  {study.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {study.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
