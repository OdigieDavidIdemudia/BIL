import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
    title: "Social Intervention & Sustainable Growth",
    description: "Community driven programs focused on long term economic and social impact.",
};

export default function SocialInterventionPage() {
    return (
        <main className="min-h-screen flex flex-col bg-bil-white">
            <Navbar />
            <ServiceHero
                title="Social Intervention"
                subtitle="Empowering communities for sustainable future growth."
                description="We believe that true economic progress must be inclusive. Our Social Intervention division is dedicated to creating lasting impact through targeted community programs, youth empowerment, and infrastructure support."
            />
            <ServiceOverview
                description="At Brand Investment Limited, 'Social Intervention' isn't just charity; it's a core business strategy. We understand that a thriving business ecosystem requires a thriving community.
                
                Our initiatives are designed to bridge the gap between opportunity and potential. By investing in education, healthcare, and basic infrastructure, we are laying the groundwork for a more robust economy. We work closely with local leaders and international partners to ensure our projects are sustainable, scalable, and tailored to the unique needs of the communities we serve."
            />
            <ServiceBenefits
                title="Our Impact Areas"
                features={[
                    "Youth Empowerment Programs",
                    "Vocational Skill Acquisition Centers",
                    "Clean Water & Sanitation Initiatives",
                    "Educational Scholarship Schemes",
                    "Community Healthcare Support"
                ]}
            />
            <ServiceStats
                stats={[
                    { label: "Beneficiaries", value: "50k+" },
                    { label: "Communities", value: "100+" },
                    { label: "Programs", value: "25+" },
                    { label: "Volunteers", value: "500+" }
                ]}
            />
            <ServiceCTA
                title="Join Our Mission"
                description="Partner with us to amplify impact and drive sustainable change across Nigeria."
                buttonText="Support Our Initiatives"
            />
            <Footer />
        </main>
    );
}
