import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='border-t border-border bg-muted/30'>
            <MaxWidthWrapper>
                <div className='py-12 sm:py-16 space-y-12'>
                    {/* Main Footer Content */}
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                        {/* Brand Section */}
                        <div className='space-y-4'>
                            <h3 className='font-semibold text-lg text-accent'>Rhutik Sahu</h3>
                            <p className='text-sm text-muted-foreground leading-relaxed'>
                                Frontend developer building performant, accessible, and beautiful web experiences.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className='space-y-4'>
                            <h4 className='font-semibold text-accent'>Quick Links</h4>
                            <ul className='space-y-2 text-sm text-muted-foreground'>
                                <li>
                                    <Link href="/posts" className="hover:text-foreground transition-colors">
                                        Posts
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="hover:text-foreground transition-colors">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-foreground transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-foreground transition-colors">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="https://docs.google.com/document/d/1F3wkYPnwAcv0ZcCTgnhWqJ2RA6xF17IFNgRGjJ9f85c/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                        aria-label="Resume"
                                    >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social & Legal */}
                        <div className='space-y-4'>
                            <h4 className='font-semibold text-accent'>Connect</h4>
                            <div className='flex gap-4'>
                                <Link
                                    href="https://github.com/rhutiksahu12"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-muted-foreground hover:text-foreground transition-colors'
                                    aria-label="GitHub"
                                >
                                    <Github className='w-5 h-5' />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/rhutiksahu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-muted-foreground hover:text-foreground transition-colors'
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className='w-5 h-5' />
                                </Link>
                                <Link
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-muted-foreground hover:text-foreground transition-colors'
                                    aria-label="Twitter"
                                >
                                    <Twitter className='w-5 h-5' />
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className='border-t border-border'></div>

                    {/* Bottom Footer */}
                    <div className='flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 text-sm text-muted-foreground'>
                        <p>&copy; {currentYear} Rhutik Sahu. All rights reserved.</p>
                        <div className='flex gap-6'>
                            <Link href="/imprint" className="hover:text-foreground transition-colors">
                                Imprint
                            </Link>
                            <a href="mailto:contact@rhutik.dev" className="hover:text-foreground transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer