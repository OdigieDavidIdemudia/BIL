import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
    title: "Textiles Marketing",
    description: "Importation and distribution of premium textile materials.",
};

export default function TextilesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-bil-white">
            <Navbar />
            <ServiceHero
                title="Textiles Marketing"
                subtitle="Weaving quality into the fabric of the industry."
                description="Our Textiles division is a leading importer and distributor of high-quality fabrics. We source premium materials from around the globe to supply the fashion and manufacturing industries in Nigeria."
            />
            <ServiceOverview
                description="We are known for our diverse collection, consistent quality, and ability to forecast trends. From traditional prints to modern synthetics, we ensure our clients have access to the best materials the world has to offer.
                
                We work closely with fashion designers, retailers, and wholesalers to support the local fashion ecosystem with reliable supply chains."
            />
            <ServiceBenefits
                features={[
                    "Premium Fabric Importation",
                    "Wholesale Distribution",
                    "Custom Order Sourcing",
                    "Trend Forecasting",
                    "Nationwide Supply Chain"
                ]}
            />
            <ServiceStats
                stats={[
                    { label: "Yards Sold/Year", value: "1M+" },
                    { label: "Retail Partners", value: "200+" },
                    { label: "Varieties", value: "500+" },
                    { label: "Years in Market", value: "15+" }
                ]}
            />
            <ServiceCTA
                title="Fabric of Excellence"
                description="Browse our latest collections or request a catalog."
                buttonText="View Collection"
            />
            <Footer />
        </main>
    );
}
