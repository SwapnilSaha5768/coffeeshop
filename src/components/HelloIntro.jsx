import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
    { lang: 'English', text: 'Hello' },
    { lang: 'Bangla', text: 'নমস্কার' },
    { lang: 'Hindi', text: 'नमस्ते' },
    { lang: 'Japanese', text: 'こんにちは' },
    { lang: 'Korean', text: '안녕하세요' },
    { lang: 'Chinese', text: '你好' },
    { lang: 'Spanish', text: 'Hola' },
];

export default function HelloIntro({ onComplete }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < greetings.length) {
            const timer = setTimeout(() => {
                setCurrentIndex((prev) => prev + 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            const finishTimer = setTimeout(() => {
                onComplete();
            }, 1000);
            return () => clearTimeout(finishTimer);
        }
    }, [currentIndex, onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F4E4D0] overflow-hidden font-sans">

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#3C2A20] rounded-full blur-sm opacity-90" />
            <div className="absolute -top-32 -right-10 w-72 h-72 bg-[#553E32] rounded-full mix-blend-multiply opacity-80" />

            <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-[#3C2A20] rounded-full opacity-90" />
            <div className="absolute -bottom-48 -left-10 w-96 h-96 bg-[#5A4234] rounded-full opacity-80" />

            <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center w-full max-w-4xl">
                <AnimatePresence mode='wait'>
                    {currentIndex < greetings.length && (
                        <motion.div
                            key={greetings[currentIndex].lang}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <h1 className="text-5xl md:text-8xl font-serif italic font-bold tracking-wide text-[#3C2A20] drop-shadow-sm">
                                {greetings[currentIndex].text}
                            </h1>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
