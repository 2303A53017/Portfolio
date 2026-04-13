
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { Card } from '../ui/Card';

const experiences = [
    {
        role: "Cybersecurity Intern",
        company: "CodeAlpha",
        period: "Jan 2025 - Mar 2025",
        description: "Performed network audits through packet sniffing and port scanning on 5+ lab environments, identifying 12+ vulnerabilities. Prepared precise OSINT-based threat reports with mitigation guidance.",
        type: "work"
    },
    {
        role: "Full-Stack Development Intern",
        company: "EduSkills",
        period: "Jun 2024 - Sep 2024",
        description: "Integrated external APIs to manage dynamic content within 3+ applications, improving system reliability. Constructed 4 responsive web interfaces ensuring cross-browser compatibility.",
        type: "work"
    },
    {
        role: "Network Security Intern",
        company: "Fortinet · EduSkills",
        period: "Jan 2024 - Apr 2024",
        description: "Enforced access control measures including Wi-Fi authentication and content filtering, mitigating risks by 45%. Configured firewall rulesets and IPS policies, maintaining a zero-breach record.",
        type: "work"
    }
];

const certifications = [
    {
        title: "Fortinet Certified Network Security Associate",
        issuer: "Fortinet",
        date: "2024",
        type: "cert"
    },
    {
        title: "Palo Alto Cybersecurity Virtual Internship",
        issuer: "EduSkills",
        date: "2024",
        type: "cert"
    },
    {
        title: "Ethical Hacking Virtual Internship",
        issuer: "EduSkills",
        date: "2024",
        type: "cert"
    },
    {
        title: "Zscaler Zero Trust Cloud Security Virtual Internship",
        issuer: "EduSkills",
        date: "2024",
        type: "cert"
    },
    {
        title: "Web Full Stack Developer Virtual Internship",
        issuer: "EduSkills",
        date: "2024",
        type: "cert"
    },
    {
        title: "6 Virtual Job Simulations",
        issuer: "AWS, TCS, J.P. Morgan & more",
        date: "2023-2024",
        type: "cert"
    }
];

const education = [
    {
        degree: "B.Tech, Computer Science Engineering (Cyber Security)",
        school: "SR University, Warangal",
        period: "Aug 2023 - May 2027"
    },
    {
        degree: "Intermediate (MPC)",
        school: "SR Junior College, Hyderabad",
        period: "Jun 2021 - May 2023"
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience & Education</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey, education and qualifications.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {/* Professional Experience */}
                    <div className="relative border-l border-muted ml-3 md:ml-6 space-y-12">
                        <h3 className="text-2xl font-bold ml-6 mb-8 text-foreground/80">Experience</h3>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                <div className="absolute -left-[5px] md:-left-[9px] top-0 h-3 w-3 md:h-5 md:w-5 rounded-full border-2 border-primary bg-background ring-4 ring-background" />
                                <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-2">
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <span className="hidden sm:inline-block text-muted-foreground">•</span>
                                    <span className="text-primary font-medium">{exp.company}</span>
                                    <span className="ml-auto text-sm text-muted-foreground flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" /> {exp.period}
                                    </span>
                                </div>
                                <p className="text-muted-foreground max-w-2xl">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Education */}
                    <div className="relative border-l border-muted ml-3 md:ml-6 space-y-12 pt-8">
                        <h3 className="text-2xl font-bold ml-6 mb-8 text-foreground/80">Education</h3>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                <div className="absolute -left-[5px] md:-left-[9px] top-0 h-3 w-3 md:h-5 md:w-5 rounded-full border-2 border-primary bg-background ring-4 ring-background" />
                                <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-2">
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <span className="hidden sm:inline-block text-muted-foreground">•</span>
                                    <span className="text-primary font-medium">{edu.school}</span>
                                    <span className="ml-auto text-sm text-muted-foreground flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" /> {edu.period}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications - Grid */}
                    <div className="pt-8">
                        <h3 className="text-2xl font-bold ml-6 mb-8 text-foreground/80">Certifications & Virtual Internships</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                            >
                                <Card className="flex items-center gap-4 p-4 border border-border/50 bg-secondary/10 hover:bg-secondary/30 transition-colors">
                                    <div className="bg-accent/10 p-3 rounded-full">
                                        <Award className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{cert.title}</h4>
                                        <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
