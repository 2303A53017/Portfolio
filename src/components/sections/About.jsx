
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 bg-secondary/30 dark:bg-secondary/5">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Passionate about creating intuitive and performant web applications.
                        </p>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">My Journey</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                As a Computer Science student specializing in Cybersecurity at SR University, I've developed a strong foundation in ethical hacking, vulnerability assessment, and network security.
                                I combine my passion for security with full-stack development skills to build robust and secure applications.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Goals</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I aim to apply my technical expertise in penetration testing and cloud security to solve real-world challenges.
                                I am constantly learning new technologies and methodologies to stay ahead in the ever-evolving landscape of cybersecurity.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
