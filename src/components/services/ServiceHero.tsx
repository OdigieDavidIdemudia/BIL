"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    description?: string;
}

export default function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
    return (
        <section className="bg-bil-black text-white py-20 md:py-28 relative overflow-hidden">
            {/* Abstract Pattern - keeping the gold highlight minimal as requested */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-bil-gold/5 -skew-x-12 transform origin-top-right translate-x-20" />

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
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed border-l-4 border-bil-gold pl-6">
                        {subtitle}
                    </p>
                    {description && (
                        <p className="mt-6 text-lg text-gray-400 max-w-2xl leading-relaxed">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
