import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-bil-neutral text-bil-black border-t border-bil-divider">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl font-bold tracking-tight">
                            Brand Investment Ltd
                        </h3>
                        <p className="text-bil-text-secondary text-sm leading-relaxed max-w-xs">
                            Driving sustainable growth across Nigeria through excellence in production, construction, and services.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="#" className="text-bil-text-muted hover:text-bil-gold transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="text-bil-text-muted hover:text-bil-gold transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-bil-text-muted hover:text-bil-gold transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-bil-text-muted hover:text-bil-gold transition-colors">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-lg font-semibold mb-6">Business Verticals</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/services/agro-allied" className="text-bil-text-secondary hover:text-bil-gold transition-colors">
                                    Agro Allied Production
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/construction" className="text-bil-text-secondary hover:text-bil-gold transition-colors">
                                    Construction Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/automobile" className="text-bil-text-secondary hover:text-bil-gold transition-colors">
                                    Automobile Sales & Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/textiles" className="text-bil-text-secondary hover:text-bil-gold transition-colors">
                                    Textiles Importation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-serif text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/about" className="text-bil-text-secondary hover:text-bil-gold transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/leadership" className="text-bil-text-secondary hover:text-bil-gold transition-colors">
                                    Leadership
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-bil-text-secondary hover:text-bil-gold transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/portal" className="text-bil-text-secondary hover:text-bil-gold transition-colors">
                                    Staff Portal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 text-bil-text-secondary">
                                <MapPin size={18} className="mt-0.5 text-bil-gold flex-shrink-0" />
                                <span>
                                    123 Corporate Drive,<br />
                                    Victoria Island, Lagos,<br />
                                    Nigeria
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-bil-text-secondary">
                                <Phone size={18} className="text-bil-gold flex-shrink-0" />
                                <span>+234 800 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-bil-text-secondary">
                                <Mail size={18} className="text-bil-gold flex-shrink-0" />
                                <span>info@brandinvestment.ng</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-bil-divider flex flex-col md:flex-row justify-between items-center text-xs text-bil-text-muted">
                    <p>&copy; {currentYear} Brand Investment Limited. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-bil-black">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-bil-black">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
