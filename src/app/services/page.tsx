import ServicesOverview from "@/components/ServicesOverview";
import { Section } from "@/components/ui/Section";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Our Businesses",
    description: "Explore the diverse business verticals of Brand Investment Limited.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-bil-white flex flex-col">
            <Navbar />
            <div className="bg-bil-black text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-serif font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-gray-400"> comprehensive solutions for a growing economy.</p>
                </div>
            </div>
            <ServicesOverview />
            <Footer />
        </main>
    );
}
