'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/lib/useTheme';
import { Moon, Sun } from 'lucide-react';

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg text-accent hover:opacity-70 transition-opacity">
          Rhutik Sahu
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <ul className="hidden sm:flex gap-8 text-sm font-medium">
            <li>
              <Link href="/posts" className="hover:opacity-60 transition-opacity">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:opacity-60 transition-opacity">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:opacity-60 transition-opacity">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:opacity-60 transition-opacity">
                Contact
              </Link>
            </li>
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;