import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section id="stack" className="py-24">
      <Container>
        <SectionHeading label="What I use" title="Tech Stack" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category) => (
            <div key={category.name}>
              <h3 className="mb-4 font-mono text-sm font-medium text-muted">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
