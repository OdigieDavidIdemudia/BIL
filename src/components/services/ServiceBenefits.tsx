"use client";

import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

interface ServiceBenefitsProps {
    features: string[];
    title?: string;
}

export default function ServiceBenefits({ features, title = "Key Capabilities" }: ServiceBenefitsProps) {
    return (
        <Section background="neutral">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-bil-black mb-10 text-center">
                    {title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start bg-white p-4 rounded-sm shadow-sm border border-bil-divider/50">
                            <CheckCircle2 size={24} className="text-bil-gold mt-1 mr-4 flex-shrink-0" />
                            <span className="text-bil-text-primary text-lg font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
