
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { ThemeToggle } from './ui/ThemeToggle';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm'
                : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 dark:from-white dark:to-white/80">
                            Jashwanth Reddy
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
                            About
                        </a>
                        <a href="#projects" className="text-foreground/60 hover:text-foreground transition-colors">
                            Projects
                        </a>
                        <a href="#skills" className="text-foreground/60 hover:text-foreground transition-colors">
                            Skills
                        </a>
                        <a href="#contact" className="text-foreground/60 hover:text-foreground transition-colors">
                            Contact
                        </a>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="ml-2 p-2 rounded-md text-foreground hover:bg-foreground/5 transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/40 shadow-xl animate-in slide-in-from-top-2">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a
                            href="#about"
                            className="block px-3 py-2 rounded-md hover:bg-foreground/5 text-foreground/80 hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="block px-3 py-2 rounded-md hover:bg-foreground/5 text-foreground/80 hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="#skills"
                            className="block px-3 py-2 rounded-md hover:bg-foreground/5 text-foreground/80 hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Skills
                        </a>
                        <a
                            href="#contact"
                            className="block px-3 py-2 rounded-md hover:bg-foreground/5 text-foreground/80 hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
