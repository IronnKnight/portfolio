import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { engineeringPrinciples } from "@/lib/data";

export function Approach() {
  return (
    <section id="approach" className="py-24">
      <Container>
        <SectionHeading label="How I work" title="Engineering Approach" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringPrinciples.map((principle) => (
            <Card key={principle.title}>
              <h3 className="mb-3 text-lg font-semibold">
                {principle.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {principle.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
