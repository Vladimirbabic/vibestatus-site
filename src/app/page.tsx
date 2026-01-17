import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import StatusStates from "@/components/StatusStates";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <StatusStates />
        <Features />
        <Screenshots />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
