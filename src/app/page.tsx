import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Footer />
    </>
  );
}
