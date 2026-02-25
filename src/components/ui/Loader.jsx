
import React from 'react';
import { motion } from 'framer-motion';

export const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl font-bold tracking-tighter animate-pulse"
            >
                <span className="text-primary dark:text-white">Jashwanth</span>
                <span className="text-muted-foreground delay-75">.Dev</span>
            </motion.div>
        </motion.div>
    );
};
