'use client';

import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

interface NewsletterSignupProps {
    showTitle?: boolean;
    showDescription?: boolean;
    buttonText?: string;
    variant?: 'default' | 'compact' | 'inline';
}

export default function NewsletterSignup({
    showTitle = true,
    showDescription = true,
    buttonText = 'Subscribe',
    variant = 'default',
}: NewsletterSignupProps) {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            // TODO: Replace with actual newsletter API endpoint
            // const response = await fetch('/api/newsletter/subscribe', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ email }),
            // });

            // if (!response.ok) {
            //   throw new Error('Failed to subscribe. Please try again.');
            // }

            // Simulated success
            setIsSuccess(true);
            setEmail('');

            // Reset success message after 3 seconds
            // setTimeout(() => setIsSuccess(false), 3000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    if (variant === 'compact') {
        return (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-sm">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading || isSuccess}
                    className="flex-1 px-4 py-2 bg-muted border border-border rounded-lg text-sm disabled:opacity-50"
                    required
                />
                <button
                    type="submit"
                    disabled={isLoading || isSuccess}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center gap-2"
                >
                    {isSuccess ? (
                        <>
                            <Check className="w-4 h-4" />
                            <span className="hidden sm:inline">Subscribed!</span>
                        </>
                    ) : (
                        buttonText
                    )}
                </button>
            </form>
        );
    }

    if (variant === 'inline') {
        return (
            <form
                onSubmit={handleSubmit}
                className="flex gap-2 flex-col sm:flex-row w-full"
            >
                <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading || isSuccess}
                    className="flex-1 px-4 py-3 bg-muted border border-border rounded-lg disabled:opacity-50"
                    required
                />
                <button
                    type="submit"
                    disabled={isLoading || isSuccess}
                    className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap"
                >
                    {isSuccess ? (
                        <>
                            <Check className="w-5 h-5" />
                            Subscribed!
                        </>
                    ) : (
                        <>
                            <Mail className="w-5 h-5" />
                            {buttonText}
                        </>
                    )}
                </button>
            </form>
        );
    }

    // Default variant
    return (
        <section className="py-12 sm:py-16 px-4 bg-muted/50 rounded-2xl border border-border">
            <div className="max-w-2xl mx-auto space-y-6">
                {showTitle && (
                    <div className="space-y-2">
                        <h3 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                            <Mail className="w-8 h-8 text-accent" />
                            Stay Updated
                        </h3>
                        {showDescription && (
                            <p className="text-muted-foreground">
                                Subscribe to my newsletter for insights on web development, performance optimization, and best practices.
                            </p>
                        )}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-3 flex-col sm:flex-row">
                        <input
                            type="email"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading || isSuccess}
                            className="flex-1 px-4 py-3 bg-background border border-border rounded-lg disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-accent"
                            required
                        />
                        <button
                            type="submit"
                            disabled={isLoading || isSuccess}
                            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap"
                        >
                            {isSuccess ? (
                                <>
                                    <Check className="w-5 h-5" />
                                    Subscribed!
                                </>
                            ) : isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                                    Subscribing...
                                </>
                            ) : (
                                <>
                                    <Mail className="w-5 h-5" />
                                    {buttonText}
                                </>
                            )}
                        </button>
                    </div>

                    {error && (
                        <p className="text-sm text-red-500 flex items-center gap-2">
                            <span>⚠️</span>
                            {error}
                        </p>
                    )}

                    <p className="text-xs text-muted-foreground">
                        I respect your privacy. Unsubscribe at any time.
                    </p>
                </form>
            </div>
        </section>
    );
}
