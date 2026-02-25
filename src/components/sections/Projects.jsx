
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const projects = [
    {
        title: "Malware Detector",
        description: "A Python-based tool that detects malicious URLs and files using blacklist checks and heuristic analysis methods.",
        technologies: ["Python", "Heuristic Analysis", "Security"],
        github: "#",
        live: "#",
        color: "from-red-500/20 to-orange-500/20"
    },
    {
        title: "Vulnerability Scanner",
        description: "Built a port scanner in Python to identify weak network services and potential vulnerabilities in target systems.",
        technologies: ["Python", "Networking", "Port Scanning"],
        github: "#",
        live: "#",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Secure Cloud Web App",
        description: "Designed a scalable web application deployed on AWS Elastic Beanstalk, focusing on performance and security optimization.",
        technologies: ["AWS", "Elastic Beanstalk", "EC2", "Full Stack"],
        github: "#",
        live: "#",
        color: "from-emerald-500/20 to-green-500/20"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-secondary/30 dark:bg-secondary/5">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tighter sm:text-5xl"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]"
                    >
                        Some of my best work that showcases my technical abilities.
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden group">
                                <div className={`h-48 w-full bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                    <Folder className="w-16 h-16 text-foreground/20 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4" /> Code
                                            </a>
                                        </Button>
                                        <Button size="sm" className="w-full gap-2" asChild>
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4" /> Demo
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
