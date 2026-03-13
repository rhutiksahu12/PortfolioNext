'use client';

import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Check if user prefers dark mode
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const stored = localStorage.getItem('theme');
        const initialTheme = stored || (prefersDark ? 'dark' : 'light');

        setTheme(initialTheme as 'light' | 'dark');
        setMounted(true);

        // Update document class
        const root = document.documentElement;
        if (initialTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, []);

    // Expose useTheme hook
    useEffect(() => {
        (window as any).__useTheme = {
            theme,
            setTheme: (newTheme: 'light' | 'dark') => {
                setTheme(newTheme);
                localStorage.setItem('theme', newTheme);
                const root = document.documentElement;
                if (newTheme === 'dark') {
                    root.classList.add('dark');
                } else {
                    root.classList.remove('dark');
                }
            },
        };
    }, [theme]);

    if (!mounted) return <>{children}</>;

    return <>{children}</>;
}
