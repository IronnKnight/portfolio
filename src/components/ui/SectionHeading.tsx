interface SectionHeadingProps {
  title: string;
  label?: string;
}

export function SectionHeading({ title, label }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      {label && (
        <span className="mb-2 block font-mono text-sm tracking-wide text-accent">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
