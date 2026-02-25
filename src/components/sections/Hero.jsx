
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 sm:text-7xl xl:text-8xl/none">
                        Hi, I'm <br className="md:hidden" />
                        <span className="text-primary dark:text-white">Jashwanth Reddy</span>
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                        Cyber Security Student | Ethical Hacker | Web Developer
                        <br />
                        Specializing in cyber defense, cloud computing (AWS), and secure coding.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 min-w-[200px]"
                >
                    <Button size="lg" className="group">
                        View Projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="lg">
                        Download CV
                        <Download className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
