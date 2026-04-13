
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import profileImg from '../../assets/profile.png';

export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 bg-secondary/30 dark:bg-secondary/5">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img src={profileImg} alt="Profile" className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-primary/20 aspect-square" />
                    </div>
                    
                    <div className="w-full md:w-2/3 space-y-8">
                        <div className="text-center md:text-left space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Results-driven Computer Science undergraduate with practical experience building web applications with React, FastAPI, and MySQL.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">My Journey</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                As a Computer Science student specializing in Cybersecurity at SR University, I'm proficient in developing scalable systems, creating RESTful endpoints, and deploying cloud-hosted solutions on AWS. I'm expanding my knowledge in Artificial Intelligence, Machine Learning, and DevOps to produce secure, efficient, and production-ready software.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
