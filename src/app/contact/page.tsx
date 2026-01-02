"use client";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Contact Hero */}
            <section className="bg-bil-black text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We are ready to partner with you. Reach out to discuss how we can drive growth together.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-bil-black">Get in touch</h2>
                        <p className="text-bil-text-secondary">
                            Whether you have a question about our services, pricing, or want to discuss a potential partnership, our team is ready to answer all your questions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-bil-neutral p-3 rounded-sm">
                                    <MapPin className="text-bil-gold" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-bil-black">Head Office</h4>
                                    <p className="text-bil-text-secondary">
                                        123 Corporate Drive,<br />
                                        Victoria Island, Lagos,<br />
                                        Nigeria
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-bil-neutral p-3 rounded-sm">
                                    <Phone className="text-bil-gold" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-bil-black">Phone</h4>
                                    <p className="text-bil-text-secondary">+234 800 123 4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-bil-neutral p-3 rounded-sm">
                                    <Mail className="text-bil-gold" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-bil-black">Email</h4>
                                    <p className="text-bil-text-secondary">info@brandinvestment.ng</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-bil-neutral p-3 rounded-sm">
                                    <Clock className="text-bil-gold" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-bil-black">Business Hours</h4>
                                    <p className="text-bil-text-secondary">Monday - Friday: 8am - 5pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="bg-white p-6 shadow-lg border-bil-divider">
                        <CardContent className="pt-6">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-bil-black">Full Name</label>
                                        <input type="text" id="name" className="w-full px-4 py-2 border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-bil-gold/50" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-bil-black">Email</label>
                                        <input type="email" id="email" className="w-full px-4 py-2 border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-bil-gold/50" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-bil-black">Subject</label>
                                    <select id="subject" className="w-full px-4 py-2 border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-bil-gold/50">
                                        <option value="">Select a Department</option>
                                        <option value="agro">Agro Allied</option>
                                        <option value="construction">Construction</option>
                                        <option value="auto">Automobile</option>
                                        <option value="textiles">Textiles</option>
                                        <option value="general">General Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-bil-black">Message</label>
                                    <textarea id="message" rows={5} className="w-full px-4 py-2 border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-bil-gold/50" placeholder="How can we help you?"></textarea>
                                </div>

                                <Button className="w-full" size="lg">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
