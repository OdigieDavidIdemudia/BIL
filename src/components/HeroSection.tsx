"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center bg-bil-white overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-bil-neutral/30 hidden lg:block -skew-x-12 transform origin-top-right translate-x-20" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 max-w-2xl"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-bil-gold/30 bg-bil-gold/5 text-bil-gold text-xs font-semibold tracking-wider uppercase">
                            Brand Investment Limited
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-bil-black leading-[1.1]">
                            Building a <br />
                            <span className="text-bil-gold">Sustainable</span> Future
                        </h1>

                        <p className="text-lg md:text-xl text-bil-text-secondary leading-relaxed max-w-lg">
                            We deliver excellence across key economic sectors—from agro-allied production and construction to automobile services and textile marketing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/services">
                                <Button size="lg" className="w-full sm:w-auto gap-2">
                                    Explore Methodologies
                                    <ArrowRight size={16} />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Visual / Abstract Representation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative h-[500px] w-full hidden lg:flex items-center justify-center"
                    >
                        {/* Abstract composition using CSS/divs instead of heavy images for now */}
                        <div className="relative w-full h-full max-w-lg">
                            <div className="absolute top-10 right-10 w-64 h-80 bg-bil-neutral rounded-sm z-0" />
                            <div className="absolute top-0 right-0 w-full h-full border border-bil-divider z-10" />
                            <div className="absolute bottom-10 left-10 w-72 h-64 bg-slate-900 z-20 overflow-hidden shadow-2xl">
                                {/* Placeholder for real corporate imagery */}
                                <div className="w-full h-full bg-gradient-to-br from-bil-black to-gray-800 flex items-center justify-center text-white/20 font-serif text-4xl">
                                    BIL
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-0 w-1 h-32 bg-bil-gold z-30 transform -translate-y-1/2" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
