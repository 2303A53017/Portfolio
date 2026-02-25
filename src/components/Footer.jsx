
import React from 'react';

export const Footer = () => {
    return (
        <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Jashwanth Reddy. All rights reserved.
                </p>
                <nav className="flex gap-4 sm:gap-6">
                    <a className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </a>
                    <a className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </a>
                </nav>
            </div>
        </footer>
    );
};
