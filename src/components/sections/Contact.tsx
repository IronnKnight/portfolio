"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";
import { contactFormSchema } from "@/lib/validators";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import type { ContactFormData } from "@/types";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github size={18} />,
  LinkedIn: <Linkedin size={18} />,
  Email: <Mail size={18} />,
};

export function Contact() {
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({ type: "error", message: result.message || "Something went wrong." });
        return;
      }

      setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
      reset();
    } catch {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    }
  }

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading label="Say hello" title="Get in Touch" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-6 max-w-md text-muted">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just connecting with fellow engineers.
            </p>

            <div className="flex flex-col gap-3">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {socialIcons[social.label]}
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className="w-full resize-none rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {status && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.message}
              </p>
            )}

            <p className="text-xs text-muted">
              Rate limited to 3 submissions per 15 minutes.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
