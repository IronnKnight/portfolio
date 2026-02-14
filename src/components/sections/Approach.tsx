import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { engineeringPrinciples } from "@/lib/data";

export function Approach() {
  return (
    <section id="approach" className="py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading label="How I work" title="Engineering Approach" />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringPrinciples.map((principle, index) => (
            <ScrollReveal key={principle.title} delay={index * 0.1}>
              <Card className="h-full">
                <h3 className="mb-3 text-lg font-semibold">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
