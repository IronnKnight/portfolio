import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { caseStudies } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading label="Where I've worked" title="Experience" />
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.company} delay={index * 0.1}>
              <Card>
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold">{study.company}</h3>
                  <span className="font-mono text-sm text-muted">
                    {study.period}
                  </span>
                </div>

                <p className="mb-1 text-sm font-medium text-accent">
                  {study.role}
                </p>

                <p className="mb-4 text-muted">{study.context}</p>

                <p className="mb-4 text-sm leading-relaxed">{study.problem}</p>

                <ul className="mb-4 space-y-2">
                  {study.decisions.map((decision) => (
                    <li
                      key={decision}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {decision}
                    </li>
                  ))}
                </ul>

                <p className="mb-6 text-sm font-medium">{study.impact}</p>

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
