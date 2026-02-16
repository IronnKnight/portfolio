interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block rounded-full bg-card px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
