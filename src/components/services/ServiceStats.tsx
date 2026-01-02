"use client";

import { Section } from "@/components/ui/Section";

interface StatItem {
    label: string;
    value: string;
}

interface ServiceStatsProps {
    stats: StatItem[];
}

export default function ServiceStats({ stats }: ServiceStatsProps) {
    return (
        <Section className="border-t border-bil-divider">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                        <div className="text-4xl md:text-5xl font-serif font-bold text-bil-gold mb-2 group-hover:scale-105 transition-transform duration-300">
                            {stat.value}
                        </div>
                        <div className="text-sm md:text-base text-bil-text-secondary uppercase tracking-wider font-medium">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
