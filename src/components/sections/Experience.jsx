
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { Card } from '../ui/Card';

const experiences = [
    {
        role: "Cyber Defense & Ethical Hacking Intern",
        company: "Palo Alto Networks / AICTE",
        period: "Internship",
        description: "Gained hands-on experience in firewall management, penetration testing, and defensive security strategies.",
        type: "work"
    },
    {
        role: "AWS Machine Learning & Cloud Architecture",
        company: "AWS APAC / Eduskills",
        period: "Virtual Internship",
        description: "Designed scalable AWS architectures using Elastic Beanstalk and EC2, optimizing for cost and performance.",
        type: "work"
    },
    {
        role: "Software Engineering Virtual Experience",
        company: "J.P. Morgan",
        period: "Virtual Internship",
        description: "Focused on secure coding practices and system optimization in a corporate environment.",
        type: "work"
    }
];

const certifications = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "AWS",
        date: "2024",
        type: "cert"
    },
    {
        title: "Palo Alto Networks Cybersecurity",
        issuer: "Palo Alto Networks",
        date: "2023",
        type: "cert"
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience & Certifications</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and qualifications.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {/* Work Experience */}
                    <div className="relative border-l border-muted ml-3 md:ml-6 space-y-12">
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

                    {/* Certifications - Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 pt-12">
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
        </section>
    );
};
