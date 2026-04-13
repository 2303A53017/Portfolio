
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const projects = [
    {
        title: "Full-Stack E-Commerce Platform",
        description: "Architected an e-commerce platform with JWT authentication and role-based access control (RBAC). Optimized MySQL schema cutting query time by 35%.",
        technologies: ["React.js", "FastAPI", "MySQL", "AWS EC2"],
        github: "#",
        live: "#",
        color: "from-blue-500/20 to-indigo-500/20"
    },
    {
        title: "Task Manager Application",
        description: "Engineered a task tracking system with CRUD endpoints, enabling real-time UI updates. Structured a normalized database schema boosting retrieval speed by 40%.",
        technologies: ["FastAPI", "React.js", "Normalized DB", "REST API"],
        github: "#",
        live: "#",
        color: "from-emerald-500/20 to-green-500/20"
    },
    {
        title: "Personal Portfolio Website",
        description: "Developed a mobile-first React portfolio with third-party APIs and CSS animations. Achieved WCAG accessibility compliance and multi-browser support.",
        technologies: ["React.js", "CSS Animations", "Performance", "UI Testing"],
        github: "https://github.com/jashwanthreddy21/Portfolio1.git",
        live: "https://jashwanthreddy.me",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "Weather Dashboard",
        description: "A responsive web application that fetches real-time weather data and air quality metrics using OpenWeatherMap API. Designed to visualize 5-day forecasts with clean UI.",
        technologies: ["JavaScript", "APIs", "Frontend"],
        github: "https://github.com/jashwanthreddy21/weather-website",
        live: "https://weather-website-kag0.onrender.com",
        color: "from-cyan-500/20 to-blue-500/20"
    },
    {
        title: "Malware URL Scanner",
        description: "A web app that scans URLs for malware signatures and phishing threats using the VirusTotal API. Includes logging and threat classification display.",
        technologies: ["Web App", "VirusTotal API", "Security"],
        github: "https://github.com/jashwanthreddy21/malware-scanner",
        live: "https://malware-scanner-1.onrender.com",
        color: "from-red-500/20 to-orange-500/20"
    },
    {
        title: "Malware File Scanner",
        description: "A web-based malware scanner that allows users to upload files and scan them against VirusTotal. The UI gives a clear risk rating and hash output.",
        technologies: ["Web App", "Hashing", "VirusTotal API"],
        github: "https://github.com/jashwanthreddy21/File-malware-scanner",
        live: "https://file-malware-scanner-18g2.onrender.com/",
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Zombie Survival Game",
        description: "An immersive open-world survival game where players explore, gather resources, and overcome challenges to stay alive.",
        technologies: ["Game Development", "Survival Strategy"],
        github: "https://github.com/jashwanthreddy21/GMDD-Zombie-Game.git",
        live: "#",
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "Phishing Mail Detector",
        description: "A client-side web application that analyzes emails for phishing indicators. Evaluates sender domains, links, keywords, and attachments.",
        technologies: ["HTML", "CSS", "JavaScript", "Security"],
        github: "https://github.com/jashwanthreddy21/Phishing-Mail-Detector",
        live: "https://jashwanthreddy21.github.io/Phishing-Mail-Detector/",
        color: "from-yellow-500/20 to-amber-500/20"
    },
    {
        title: "Smart Pincode Finder",
        description: "Developed a Smart Pincode Finder that retrieves accurate postal codes using real-time location, map pinning, and place search via geolocation and reverse geocoding APIs.",
        technologies: ["HTML", "CSS", "JavaScript", "Restfull APIs"],
        github: "https://github.com/jashwanthreddy21/Smart-Pincode-Finder",
        live: "https://jashwanthreddy21.github.io/Smart-Pincode-Finder/",
        color: "from-yellow-500/20 to-amber-500/20"
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
