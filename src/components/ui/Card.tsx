interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/30 ${className}`}
    >
      {children}
    </div>
  );
}
