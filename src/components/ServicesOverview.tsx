"use client";

import Link from "next/link";
import { ArrowUpRight, Tractor, Building2, Car, Shirt } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const services = [
    {
        title: "Agro Allied Production",
        description: "Sustainable framing, processing, and distribution of high-quality agricultural products for local and international markets.",
        icon: Tractor,
        href: "/services/agro-allied",
    },
    {
        title: "Construction Development",
        description: "End-to-end civil engineering and infrastructure development delivering robust residential and commercial projects.",
        icon: Building2,
        href: "/services/construction",
    },
    {
        title: "Automobile Sales",
        description: "Strategic partnerships with global manufacturers to supply premium vehicles and comprehensive fleet management services.",
        icon: Car,
        href: "/services/automobile",
    },
    {
        title: "Textiles Marketing",
        description: "Importation and distribution of premium textile materials, setting standards for quality and design in the fashion industry.",
        icon: Shirt,
        href: "/services/textiles",
    },
];

export default function ServicesOverview() {
    return (
        <Section background="neutral">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-bil-black mb-4">
                    Our Business Verticals
                </h2>
                <p className="text-bil-text-secondary md:text-lg">
                    We operate at the intersection of innovation and reliability, driving growth across four key pillars of the economy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <Link key={index} href={service.href} className="block h-full">
                        <Card className="h-full flex flex-col hover:border-bil-gold/50 transition-colors">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-sm bg-bil-gold/10 flex items-center justify-center text-bil-gold mb-4">
                                    <service.icon size={24} />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription className="text-base">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                            <div className="p-6 pt-0 mt-auto">
                                <div className="flex items-center text-bil-black font-medium text-sm gap-2 group-hover:text-bil-gold transition-colors">
                                    Learn More <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Link href="/services">
                    <Button variant="outline" size="lg">View All Services</Button>
                </Link>
            </div>
        </Section>
    );
}
