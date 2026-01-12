import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import coffeeHero from '../assets/coffee-hero.jpg';
import HelloIntro from '../components/HelloIntro';

export default function Welcome() {
    const navigate = useNavigate();
    const [showIntro, setShowIntro] = useState(true);

    return (
        <AnimatePresence mode="wait">
            {showIntro ? (
                <HelloIntro key="intro" onComplete={() => setShowIntro(false)} />
            ) : (
                <motion.div
                    key="main-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="min-h-screen bg-coffee-950 relative overflow-hidden font-sans flex flex-col justify-between"
                >

                    <div className="absolute inset-0 z-0">
                        <img
                            src={coffeeHero}
                            alt="Background"
                            className="w-full h-full object-cover object-center scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-coffee-950 via-transparent to-coffee-950 opacity-90" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 px-6 pt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <h1 className="text-6xl font-serif font-regular leading-[1.1] tracking-wide text-[#EBE0D0]">
                                <span className="block drop-shadow-md">Amazing</span>
                                <span className="block drop-shadow-md">taste of</span>
                                <span className="block font-serif italic text-[#C69C6D] drop-shadow-md">Coffee</span>
                            </h1>
                        </motion.div>
                    </div>

                    <div className="relative z-10 px-6 pb-12 w-full space-y-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-gray-300 text-base leading-relaxed max-w-xs"
                        >
                            Experience a taste revolution—this is coffee like you've never had it before.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center justify-between"
                        >
                            <Button onClick={() => navigate('/home')} className="flex-1 mr-4 shadow-2xl shadow-[#b37a40]/30 bg-[#b37a40] text-white py-4 rounded-2xl text-lg font-semibold">
                                Get Started
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
