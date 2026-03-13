'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // In a real application, you would send this to an API endpoint
            // For now, we'll just simulate a successful submission
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen py-20 sm:py-32 px-4">
            <div className="max-w-2xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-4 border-b border-border pb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold">Get in Touch</h1>
                    <p className="text-lg text-muted-foreground">
                        Have a project in mind? Want to collaborate? Let&apos;s talk.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a
                        href="mailto:hello@rhutik.dev"
                        className="border border-border rounded-lg p-6 hover:bg-muted transition-colors group"
                    >
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground text-sm group-hover:opacity-80 transition-opacity">
                            rhutiksahu12@gmail.com
                        </p>
                    </a>

                    <a
                        href="https://twitter.com/rhutik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border rounded-lg p-6 hover:bg-muted transition-colors group"
                    >
                        <h3 className="font-semibold mb-2">Twitter</h3>
                        <p className="text-muted-foreground text-sm group-hover:opacity-80 transition-opacity">
                            @rhutik
                        </p>
                    </a>

                    <a
                        href="https://github.com/rhutiksahu12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border rounded-lg p-6 hover:bg-muted transition-colors group"
                    >
                        <h3 className="font-semibold mb-2">GitHub</h3>
                        <p className="text-muted-foreground text-sm group-hover:opacity-80 transition-opacity">
                            rhutiksahu12
                        </p>
                    </a>

                    <a
                        href="https://linkedin.com/in/rhutiksahu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border rounded-lg p-6 hover:bg-muted transition-colors group"
                    >
                        <h3 className="font-semibold mb-2">LinkedIn</h3>
                        <p className="text-muted-foreground text-sm group-hover:opacity-80 transition-opacity">
                            rhutiksahu
                        </p>
                    </a>
                </div>

                {/* Form */}
                <div className="border border-border rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Send me a message</h2>

                    {submitted && (
                        <div className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                ✓ Message sent successfully! I&apos;ll get back to you soon.
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-background focus:ring-accent bg-background text-foreground"
                                placeholder="Your name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-background focus:ring-foreground bg-background text-foreground"
                                placeholder="your@email.com"
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-background focus:ring-foreground bg-background text-foreground"
                                placeholder="What's this about?"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-background focus:ring-foreground bg-background text-foreground resize-none"
                                placeholder="Tell me more about your project or inquiry..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full px-6 py-3 font-medium bg-accent text-accent-foreground hover:opacity-90 disabled:opacity-50 transition-opacity rounded-lg shadow-md hover:shadow-lg"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

                {/* Response Time */}
                <div className="border-t border-border pt-8 text-center">
                    <p className="text-muted-foreground text-sm">
                        I typically respond to messages within 24-48 hours. For urgent matters, feel free to email directly.
                    </p>
                </div>
            </div>
        </div>
    );
}
