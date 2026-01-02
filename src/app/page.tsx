import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsPanel from "@/components/StatsPanel";
import ServicesOverview from "@/components/ServicesOverview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bil-white flex flex-col">
      <Navbar />
      <HeroSection />
      <StatsPanel />
      <ServicesOverview />
      <Footer />
    </main>
  );
}
