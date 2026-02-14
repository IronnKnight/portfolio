"use client";

import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Approach", href: "#approach" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="font-mono text-sm font-medium text-foreground">
          NS
        </a>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2 border-l border-border pl-2">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
