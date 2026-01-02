import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
    title: "Agro Allied Production",
    description: "Sustainable framing, processing, and distribution of high-quality agricultural products.",
};

export default function AgroPage() {
    return (
        <main className="min-h-screen flex flex-col bg-bil-white">
            <Navbar />
            <ServiceHero
                title="Agro Allied Production"
                subtitle="Cultivating sustainable growth through modern agricultural practices."
                description="Our Agro Allied division is dedicated to transforming Nigeria's agricultural landscape. We integrate modern farming techniques with sustainable processing methods to deliver high-quality produce to local and international markets."
            />
            <ServiceOverview
                description="From large-scale crop cultivation to livestock management and food processing, we ensure that every step of the value chain adheres to global safety and quality standards. 
                
                We are committed to food security and economic empowerment, working with local farmers to improve yields and providing market access for their produce."
            />
            <ServiceBenefits
                features={[
                    "Large-scale mechanised farming",
                    "Advanced food processing facilities",
                    "Livestock management and breeding",
                    "Export-grade quality assurance",
                    "Sustainable irrigation systems"
                ]}
            />
            <ServiceStats
                stats={[
                    { label: "Acres Cultivated", value: "5,000+" },
                    { label: "Annual Yield", value: "10k Tons" },
                    { label: "Farmers Empowered", value: "500+" },
                    { label: "Products", value: "15+" }
                ]}
            />
            <ServiceCTA
                title="Sowing Seeds of Success"
                description="Partner with us to transform the future of agriculture."
            />
            <Footer />
        </main>
    );
}
