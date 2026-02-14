import { Resend } from "resend";
import type { ContactFormData } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  return resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    subject: `Portfolio message from ${data.name}`,
    replyTo: data.email,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      "",
      `Message:`,
      data.message,
    ].join("\n"),
  });
}
