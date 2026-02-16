import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section id="stack" className="py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading label="What I use" title="Tech Stack" />
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {techStack.map((category, index) => (
            <ScrollReveal key={category.name} delay={index * 0.1}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline">
                <h3 className="shrink-0 font-mono text-sm font-medium text-muted sm:w-48">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
