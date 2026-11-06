'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import clsx from 'clsx';
import { useRef } from 'react';

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-between pb-[50vh]">
            {/* Section 1: 0% - Start */}
            <Section start={0} end={0.2} align="center">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-4">
                        Akshat Shah<span className="text-purple-500">.</span>
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-200">
                            Software Engineer
                        </span>
                        <span className="text-purple-400 font-bold mx-1">&</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-200">
                            AI/ML Engineer
                        </span>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="mt-8 pointer-events-auto"
                >
                    <a
                        href="/Akshat%20Shah%20Resume%20(USA).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-purple-500/20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        View Resume
                    </a>
                </motion.div>
            </Section>

            {/* Section 2: 30% */}
            <Section start={0.25} end={0.5} align="left">
                <h2 className="text-4xl md:text-6xl font-semibold text-white ml-10 max-w-[60vw]">
                    Specializing in <span className="text-purple-400">Backend Systems</span>, <span className="text-blue-400">Generative AI</span>, <span className="text-purple-400">Cloud & MLOps</span>, and <span className="text-blue-400">AI Security</span>.
                </h2>
            </Section>

            {/* Section 3: 60% */}
            <Section start={0.55} end={0.8} align="right">
                <h2 className="text-4xl md:text-6xl font-semibold text-white mr-10 text-right max-w-[60vw] ml-auto">
                    Building scalable, cloud-native services, multi-agent systems, and production AI/ML solutions.
                </h2>
            </Section>

            <ScrollIndicator />
        </div>
    );
}

interface SectionProps {
    children: React.ReactNode;
    start: number;
    end: number;
    align: 'left' | 'center' | 'right';
}

function Section({ children, start, end, align }: SectionProps) {
    const { scrollYProgress } = useScroll();

    // Fade in/out based on scroll range
    const opacity = useTransform(scrollYProgress,
        [start, start + 0.05, end - 0.05, end],
        [0, 1, 1, 0]
    );

    // Parallax Y movement
    const y = useTransform(scrollYProgress,
        [start, end],
        [50, -50]
    );

    return (
        <div className={clsx(
            "fixed top-0 left-0 w-full h-screen flex flex-col justify-center px-4 md:px-20",
            {
                'items-start': align === 'left',
                'items-center': align === 'center',
                'items-end': align === 'right'
            }
        )}>
            <motion.div style={{ opacity, y }}>
                {children}
            </motion.div>
        </div>
    );
}

function ScrollIndicator() {
    return (
        <motion.div
            style={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-white/50 text-[15px] uppercase tracking-widest">Scroll to explore</span>
            <motion.div
                className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"
                animate={{ scaleY: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
        </motion.div>
    );
}
