import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent/90",
  secondary:
    "border border-border text-foreground hover:bg-card",
  ghost:
    "text-muted hover:text-foreground",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = AsButton | AsAnchor;

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  const styles = `${base} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    return (
      <a className={styles} {...(props as AsAnchor)}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...(props as AsButton)}>
      {children}
    </button>
  );
}
