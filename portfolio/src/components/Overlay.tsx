'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import clsx from 'clsx';
import { useRef } from 'react';

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        // We want the scroll progress of the entire page or the parent container?
        // Since this component is inside the 500vh container (placed absolutely), 
        // we can use global scroll or leverage the fact that it's in the flow.
        // But wait, it's sticky or fixed? 
        // The requirement: "text sections that sit on top of the canvas".
        // If the parent is 500vh, we can position these sections absolutely within it.
    });

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-between pb-[50vh]">
            {/* We can use specific top positions to space them out over the 500vh */}

            {/* Section 1: 0% - Start */}
            <Section start={0} end={0.2} align="center">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                    Akshat Shah<span className="text-purple-500">.</span><br />
                    <span className="text-gray-400 text-4xl md:text-6xl">Software Engineer.</span>
                </h1>
            </Section>

            {/* Section 2: 30% */}
            <Section start={0.25} end={0.5} align="left">
                <h2 className="text-4xl md:text-6xl font-semibold text-white ml-10 max-w-[60vw]">
                    Specializing in <span className="text-purple-400">Cybersecurity</span>, <span className="text-blue-400">IoT Solutions</span>, <span className="text-purple-400">Cloud</span> & <span className="text-blue-400">Machine Learning</span>.
                </h2>
            </Section>

            {/* Section 3: 60% */}
            <Section start={0.55} end={0.8} align="right">
                <h2 className="text-4xl md:text-6xl font-semibold text-white mr-10 text-right max-w-[60vw] ml-auto">
                    Building scalable, secure, and data-driven systems.
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
