import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Approach } from "@/components/sections/Approach";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-100 -translate-y-16 rounded-md bg-accent px-4 py-2 text-sm text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Approach />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
