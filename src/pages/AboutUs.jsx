import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Coffee, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

import coffee1 from '../assets/coffee-1.png';
import coffee2 from '../assets/coffee-2.png';
import coffee3 from '../assets/coffee-3.png';
import coffee4 from '../assets/coffee-4.png';
import coffee5 from '../assets/coffee-5.png';
import coffee6 from '../assets/coffee-6.png';

export default function AboutUs() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();

            let open = false;
            if (day >= 1 && day <= 5) {
                if (hour >= 8 && hour < 20) open = true;
            }
            else {
                if (hour >= 9 && hour < 20) open = true;
            }
            setIsOpen(open);
        };

        checkStatus();
        const timer = setInterval(checkStatus, 60000);
        return () => clearInterval(timer);
    }, []);

    const galleryImages = [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6];

    return (
        <div className="min-h-screen bg-coffee-950 flex flex-col font-sans text-coffee-100 overflow-y-auto pb-24 scrollbar-hide">
            {/* Header */}
            <div className="p-6 flex items-center space-x-4 sticky top-0 bg-coffee-950/80 backdrop-blur-md z-10 border-b border-coffee-1000/50">
                <button onClick={() => navigate(-1)} className="text-coffee-100 hover:bg-coffee-1000 p-2 rounded-xl transition-colors">
                    <ArrowLeft />
                </button>
                <h1 className="text-xl font-bold font-serif">About Us</h1>
            </div>

            <div className="flex-1 p-6 space-y-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative w-full h-48 rounded-3xl overflow-hidden bg-coffee-1000 shadow-xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-1000 to-coffee-900 flex items-center justify-center">
                        <Coffee size={64} className="text-coffee-300 opacity-20" />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/20">
                        <h2 className="text-3xl font-serif font-bold text-coffee-50 mb-2">Crafting Moments</h2>
                        <p className="text-coffee-200 text-sm font-medium tracking-wide border-t border-coffee-500/50 pt-2 px-4">EST. 2024</p>
                    </div>
                </motion.div>

                {/* Our Story */}
                <div className="space-y-3">
                    <h3 className="text-xl font-serif font-bold text-coffee-100 flex items-center gap-2">
                        <Coffee size={20} className="text-coffee-500" />
                        Our Story
                    </h3>
                    <p className="text-coffee-300 leading-relaxed text-sm text-justify">
                        Born from a passion for the perfect brew, <strong>CoffeeShop</strong> started as a small dream to bring premium, artisanal coffee to our community. We believe that every cup tells a story – from the careful selection of beans to the precise art of brewing.
                    </p>
                    <p className="text-coffee-300 leading-relaxed text-sm text-justify">
                        We are more than just a coffee shop; we are a sanctuary for dreamers, creators, and coffee lovers alike.
                    </p>
                </div>

                {/* Gallery Section */}
                <div className="space-y-4">
                    <h3 className="text-xl font-serif font-bold text-coffee-100 flex items-center gap-2">
                        <div className="w-1 h-6 bg-coffee-500 rounded-full"></div>
                        Our Gallery
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {galleryImages.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-coffee-800/50"
                            >
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-coffee-800/50 p-4 rounded-2xl border border-coffee-700/30 flex items-start space-x-4">
                        <div className="p-2.5 bg-coffee-800 rounded-xl text-coffee-400">
                            <Clock size={20} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-coffee-100 text-sm">Opening Hours</h4>
                                <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${isOpen ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'} flex items-center gap-1.5`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                                    {isOpen ? 'Open Now' : 'Closed'}
                                </div>
                            </div>
                            <p className="text-coffee-300 text-xs mt-1">Mon - Fri: 8am - 8pm</p>
                            <p className="text-coffee-300 text-xs">Sat - Sun: 9am - 8pm</p>
                        </div>
                    </div>

                    <div className="bg-coffee-800/50 rounded-2xl border border-coffee-700/30 overflow-hidden relative">
                        {/* Map Container */}
                        <div className="h-64 relative w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://maps.google.com/maps?q=12+Tajmahal+Road,+Mohammadpur,+Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="absolute inset-0 border-0 opacity-80"
                                allowFullScreen
                            ></iframe>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/50 to-transparent pointer-events-none"></div>

                            {/* Custom Marker */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none -mt-4">
                                <motion.div
                                    initial={{ y: -10 }}
                                    animate={{ y: 0 }}
                                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
                                    className="bg-coffee-900 p-3 rounded-full border-4 border-white dark:border-coffee-800 shadow-xl z-10"
                                >
                                    <Coffee size={24} className="text-white" />
                                </motion.div>
                                <div className="bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-100 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg mt-2 z-10">
                                    We are here
                                </div>
                            </div>
                        </div>

                        {/* Directions Button Section */}
                        <div className="p-4 relative z-20 -mt-12">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=12+Tajmahal+Road,+Mohammadpur,+Dhaka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-coffee-100 text-coffee-900 font-bold py-3.5 rounded-xl shadow-xl flex items-center justify-center space-x-2 active:scale-95 transition-transform hover:bg-white"
                            >
                                <MapPin size={20} className="text-coffee-600" />
                                <span>Get Directions</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Grid split */}
                    <div className="grid grid-cols-2 gap-4">
                        <a
                            href="tel:+8801726666666"
                            className="bg-coffee-800/50 p-6 rounded-2xl border border-coffee-700/30 flex flex-col items-center text-center space-y-3 hover:bg-coffee-800 transition-colors active:scale-95"
                        >
                            <div className="p-3 bg-coffee-800 rounded-full text-coffee-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-coffee-100 text-sm">Call Us</h4>
                                <p className="text-coffee-300 text-xs mt-1">+880 1726 666 666</p>
                            </div>
                        </a>

                        <a
                            href="mailto:hello@coffeeshop.com"
                            className="bg-coffee-800/50 p-6 rounded-2xl border border-coffee-700/30 flex flex-col items-center text-center space-y-3 hover:bg-coffee-800 transition-colors active:scale-95"
                        >
                            <div className="p-3 bg-coffee-800 rounded-full text-coffee-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-coffee-100 text-sm">Email Us</h4>
                                <p className="text-coffee-300 text-xs mt-1">hello@coffeeshop.com</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Footer Quote */}
                <div className="pt-6 border-t border-coffee-800/30 text-center">
                    <p className="font-serif italic text-coffee-400 text-lg">"Life begins after coffee."</p>
                </div>
            </div>
        </div>
    );
}
