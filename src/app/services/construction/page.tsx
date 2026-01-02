import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
    title: "Construction Development",
    description: "End-to-end civil engineering and infrastructure development delivering robust residential and commercial projects.",
};

export default function ConstructionPage() {
    return (
        <main className="min-h-screen flex flex-col bg-bil-white">
            <Navbar />
            <ServiceHero
                title="Construction Development"
                subtitle="Building the infrastructure for tomorrow."
                description="Our Construction division is committed to delivering world-class infrastructure and real estate solutions. From residential complexes to commercial high-rises and civil engineering projects, we bring precision and durability to every structure."
            />
            <ServiceOverview
                description="We partner with top architects and engineers to ensure that our developments not only meet but exceed safety and aesthetic standards.
                
                Our approach combines innovative design with rigorous project management, ensuring timely delivery and cost-effectiveness without compromising on quality."
            />
            <ServiceBenefits
                features={[
                    "Residential & Commercial Development",
                    "Civil Engineering & Infrastructure",
                    "Project Management & Consultancy",
                    "Sustainable Building Practices",
                    "Renovation & Rehabilitation"
                ]}
            />
            <ServiceStats
                stats={[
                    { label: "Completed Projects", value: "120+" },
                    { label: "Under Construction", value: "15" },
                    { label: "Client Satisfaction", value: "98%" },
                    { label: "Years Experience", value: "20+" }
                ]}
            />
            <ServiceCTA
                title="Build Your Vision With Us"
                description="Let's discuss your next infrastructure or real estate project."
            />
            <Footer />
        </main>
    );
}
