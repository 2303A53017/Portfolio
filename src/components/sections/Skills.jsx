
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Terminal, Monitor, Layout, Server, Database, GitBranch } from 'lucide-react';
import { Card } from '../ui/Card';

const skills = [
    {
        category: "Operating Systems",
        items: ["Kali Linux", "Ubuntu", "Mac/Windows"],
        icon: <Code className="h-6 w-6 text-primary" />,
    },{
        category: "Programming Languages",
        items: ["Python", "Java", "JavaScript"],
        icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
        category: "Web & Database",
        items: ["React.js", "FastAPI", "Node.js", "MySQL", "HTML5/CSS3", "REST API Design"],
        icon: <Layout className="h-6 w-6 text-primary" />,
    },
    {
        category: "Cybersecurity",
        items: ["Network Sniffing", "Port Scanning", "Information Gathering"],
        icon: <Terminal className="h-6 w-6 text-primary" />,
    },
    {
        category: "Tools",
        items: ["VS Code", "Postman", "GitHub", "Wireshark", "Nmap", "Burp Suite", "Maltego"],
        icon: <Monitor className="h-6 w-6 text-primary" />,
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tighter sm:text-5xl"
                    >
                        Technical Proficiency
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]"
                    >
                        A curated list of technologies I work with to build robust applications.
                    </motion.p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-secondary/20 dark:bg-secondary/10 hover:bg-secondary/40">
                                <div className="flex flex-col space-y-2">
                                    <div className="mb-4 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{skill.category}</h3>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {skill.items.map((item, i) => (
                                            <span key={i} className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                                                {item}
                                            </span>
                                        ))}
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
