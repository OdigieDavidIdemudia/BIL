"use client";

import Link from "next/link";
import {
    Users,
    Tractor,
    Building2,
    Car,
    Shirt,
    ArrowRight
} from "lucide-react";
import clsx from "clsx";

const services = [
    {
        name: "Social Intervention",
        description: "Community driven programs focused on long term economic and social impact",
        href: "/services/social-intervention",
        icon: Users,
    },
    {
        name: "Agro Allied Production",
        description: "Sustainable farming, processing, and distribution services",
        href: "/services/agro-allied",
        icon: Tractor,
    },
    {
        name: "Construction Development",
        description: "Residential, commercial, and infrastructure development solutions",
        href: "/services/construction",
        icon: Building2,
    },
    {
        name: "Automobile Sales",
        description: "Vehicle sales, fleet solutions, and after sales services",
        href: "/services/automobile",
        icon: Car,
    },
    {
        name: "Textiles Marketing",
        description: "Importation, distribution, and marketing of textile products",
        href: "/services/textiles",
        icon: Shirt,
    },
];

interface ServicesDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ServicesDropdown({ isOpen, onClose }: ServicesDropdownProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed top-20 left-0 w-full pt-4 z-40 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseLeave={onClose}
        >
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-xl shadow-xl border border-bil-neutral overflow-hidden flex max-w-5xl mx-auto">
                    {/* Left Column: Service List */}
                    <div className="w-2/3 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => (
                            <Link
                                key={service.name}
                                href={service.href}
                                onClick={onClose}
                                className="group p-4 rounded-lg hover:bg-bil-neutral transition-colors flex items-start gap-4"
                            >
                                <div className="mt-1 p-2 bg-bil-neutral rounded-md group-hover:bg-white group-hover:text-bil-gold transition-colors text-bil-text-secondary">
                                    <service.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-bil-black group-hover:text-bil-gold transition-colors">
                                        {service.name}
                                    </h4>
                                    <p className="text-sm text-bil-text-secondary mt-1">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Right Column: Contextual Illustration */}
                    <div className="w-1/3 bg-bil-neutral p-6 flex flex-col justify-center relative overflow-hidden">
                        {/* Abstract Background Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-bil-gold/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-bil-black/5 rounded-full blur-3xl" />

                        <div className="relative z-10 text-center">
                            <h3 className="text-lg font-serif font-bold text-bil-black mb-2">
                                Driving Growth
                            </h3>
                            <p className="text-sm text-bil-text-secondary mb-6">
                                Delivering excellence across key sectors of the Nigerian economy.
                            </p>
                            <Link
                                href="/services"
                                onClick={onClose}
                                className="inline-flex items-center text-sm font-medium text-bil-gold hover:text-bil-gold/80 transition-colors"
                            >
                                View All Services <ArrowRight size={16} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
