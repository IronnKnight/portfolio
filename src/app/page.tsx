import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Approach } from "@/components/sections/Approach";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Approach />
      <Footer />
    </>
  );
}
