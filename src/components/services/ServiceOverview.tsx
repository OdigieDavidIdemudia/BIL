"use client";

import { Section } from "@/components/ui/Section";
import clsx from "clsx";

interface ServiceOverviewProps {
    description: string;
    className?: string;
}

export default function ServiceOverview({ description, className }: ServiceOverviewProps) {
    return (
        <Section className={clsx("pb-0", className)}>
            <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
                <h2 className="text-3xl font-serif font-bold text-bil-black mb-6">Overview</h2>
                <div className="prose prose-lg text-bil-text-secondary max-w-none">
                    <p className="leading-relaxed whitespace-pre-line text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </Section>
    );
}
