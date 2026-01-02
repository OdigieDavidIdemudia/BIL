import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
    title: "Automobile Sales & Services",
    description: "Strategic partnerships with global manufacturers to supply premium vehicles and comprehensive fleet management.",
};

export default function AutomobilePage() {
    return (
        <main className="min-h-screen flex flex-col bg-bil-white">
            <Navbar />
            <ServiceHero
                title="Automobile Sales & Services"
                subtitle="Driving excellence with premium automotive solutions."
                description="We provide access to a wide range of premium vehicles through strategic partnerships with global manufacturers. Our service goes beyond sales—we offer comprehensive fleet management and after-sales support to ensure your vehicles remain in peak condition."
            />
            <ServiceOverview
                description="Whether for personal luxury or corporate fleets, we deliver reliability and class.
                
                Our relationship with our clients doesn't end at the showroom. We offer dedicated maintenance services, genuine spare parts, and flexible financing options to make vehicle ownership seamless and stress-free."
            />
            <ServiceBenefits
                features={[
                    "New Vehicle Sales (Luxury & Commercial)",
                    "Corporate Fleet Management",
                    "After-sales Service & Maintenance",
                    "Genuine Spare Parts Supply",
                    "Vehicle Financing Options"
                ]}
            />
            <ServiceStats
                stats={[
                    { label: "Vehicles Sold", value: "2,500+" },
                    { label: "Serviced Annually", value: "1,000+" },
                    { label: "Global Brands", value: "10+" },
                    { label: "Showrooms", value: "5" }
                ]}
            />
            <ServiceCTA
                title="Drive Your Dream"
                description="Visit our showroom or contact us for a fleet consultation."
                buttonText="Book a Test Drive"
            />
            <Footer />
        </main>
    );
}
