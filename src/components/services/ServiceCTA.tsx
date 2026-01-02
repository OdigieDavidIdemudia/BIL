"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
    title?: string;
    description?: string;
    buttonText?: string;
    href?: string;
}

export default function ServiceCTA({
    title = "Ready to get started?",
    description = "Reach out to discuss how we can drive growth together.",
    buttonText = "Partner with Us",
    href = "/contact"
}: ServiceCTAProps) {
    return (
        <Section background="black" className="py-24 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                    {title}
                </h2>
                <p className="text-xl text-gray-400 mb-10">
                    {description}
                </p>
                <Link href={href}>
                    <Button size="lg" className="bg-bil-gold hover:bg-white hover:text-bil-black border-none text-white font-semibold px-8 py-6 text-lg">
                        {buttonText} <ArrowRight className="ml-2" />
                    </Button>
                </Link>
            </div>
        </Section>
    );
}
