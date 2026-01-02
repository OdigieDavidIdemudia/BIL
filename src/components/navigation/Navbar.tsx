"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import ServicesDropdown from "./ServicesDropdown";

const navLinks = [
    { name: "Home", href: "/" },
    // Services is handled manually
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Mobile Menu
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Services Dropdown
    const pathname = usePathname();

    const toggleMobileMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 w-full bg-bil-white/90 backdrop-blur-md border-b border-bil-neutral/50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="relative h-12 w-12">
                            <Image
                                src="/images/logos/bil-logo.jpg"
                                alt="BIL Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="font-serif text-xl font-bold tracking-tight text-bil-black hidden sm:block">
                            Brand Investment Ltd
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center h-full">
                        <Link
                            href="/"
                            className={clsx(
                                "text-sm font-medium transition-colors duration-200 relative group py-2",
                                pathname === "/" ? "text-bil-gold" : "text-bil-text-secondary hover:text-bil-black"
                            )}
                        >
                            Home
                        </Link>

                        {/* Services Dropdown Trigger */}
                        <div
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button
                                className={clsx(
                                    "text-sm font-medium transition-colors duration-200 flex items-center gap-1",
                                    pathname.startsWith("/services") ? "text-bil-gold" : "text-bil-text-secondary hover:text-bil-black"
                                )}
                            >
                                Services <ChevronDown size={14} className={clsx("transition-transform", isServicesOpen ? "rotate-180" : "")} />
                            </button>
                            <ServicesDropdown isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
                        </div>

                        {/* Other Links */}
                        <Link
                            href="/about"
                            className={clsx(
                                "text-sm font-medium transition-colors duration-200 relative group py-2",
                                pathname === "/about" ? "text-bil-gold" : "text-bil-text-secondary hover:text-bil-black"
                            )}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            className={clsx(
                                "text-sm font-medium transition-colors duration-200 relative group py-2",
                                pathname === "/contact" ? "text-bil-gold" : "text-bil-text-secondary hover:text-bil-black"
                            )}
                        >
                            Contact
                        </Link>


                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-bil-black hover:text-bil-gold focus:outline-none transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={clsx(
                    "md:hidden absolute w-full bg-white border-b border-bil-neutral shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-4 pt-2 pb-6 space-y-2">
                    <Link
                        href="/"
                        onClick={toggleMobileMenu}
                        className="block px-3 py-3 text-base font-medium text-bil-text-secondary hover:text-bil-black hover:bg-gray-50 rounded-md"
                    >
                        Home
                    </Link>

                    {/* Mobile Services */}
                    <div className="px-3 py-3">
                        <h4 className="text-base font-bold text-bil-black mb-2">Services</h4>
                        <div className="pl-4 space-y-2 border-l-2 border-bil-neutral">
                            <Link href="/services/social-intervention" onClick={toggleMobileMenu} className="block py-1 text-sm text-bil-text-secondary">Social Intervention</Link>
                            <Link href="/services/agro-allied" onClick={toggleMobileMenu} className="block py-1 text-sm text-bil-text-secondary">Agro Allied</Link>
                            <Link href="/services/construction" onClick={toggleMobileMenu} className="block py-1 text-sm text-bil-text-secondary">Construction</Link>
                            <Link href="/services/automobile" onClick={toggleMobileMenu} className="block py-1 text-sm text-bil-text-secondary">Automobile</Link>
                            <Link href="/services/textiles" onClick={toggleMobileMenu} className="block py-1 text-sm text-bil-text-secondary">Textiles</Link>
                        </div>
                    </div>

                    <Link
                        href="/about"
                        onClick={toggleMobileMenu}
                        className="block px-3 py-3 text-base font-medium text-bil-text-secondary hover:text-bil-black hover:bg-gray-50 rounded-md"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        onClick={toggleMobileMenu}
                        className="block px-3 py-3 text-base font-medium text-bil-text-secondary hover:text-bil-black hover:bg-gray-50 rounded-md"
                    >
                        Contact
                    </Link>

                </div>
            </div>
        </nav>
    );
}
