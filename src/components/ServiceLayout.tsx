"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    stats?: { label: string; value: string }[];
    children?: React.ReactNode;
}

export default function ServiceLayout({
    title,
    subtitle,
    description,
    features,
    stats,
    children,
}: ServiceLayoutProps) {
    return (
        <div className="min-h-screen bg-bil-white">
            {/* Service Hero */}
            <section className="bg-bil-black text-white py-20 md:py-32 relative overflow-hidden">
                {/* Abstract Pattern */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-bil-gold/10 -skew-x-12 transform origin-top-right translate-x-20" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-bil-gold hover:text-white transition-colors mb-6 text-sm font-medium"
                    >
                        <ArrowLeft size={16} className="mr-2" /> Back to Services
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="prose prose-lg text-bil-text-secondary">
                        <h2 className="text-3xl font-serif font-bold text-bil-black mb-6">Overview</h2>
                        <p className="leading-relaxed whitespace-pre-line">{description}</p>
                    </div>

                    <div className="bg-bil-neutral p-8 rounded-sm border-l-4 border-bil-gold">
                        <h3 className="text-xl font-serif font-bold text-bil-black mb-6">Key Capabilities</h3>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 size={20} className="text-bil-gold mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-bil-text-primary">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <Link href="/contact">
                                <Button className="w-full">Partner with our {title} Division</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Stats Section (Optional) */}
            {stats && (
                <Section background="neutral" className="border-y border-bil-divider">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-serif font-bold text-bil-gold mb-2">{stat.value}</div>
                                <div className="text-sm text-bil-text-secondary uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {children}
        </div>
    );
}
