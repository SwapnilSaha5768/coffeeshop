import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Coffee, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUs() {
    const navigate = useNavigate();

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

                {/* Info Grid */}
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-coffee-800/50 p-4 rounded-2xl border border-coffee-700/30 flex items-start space-x-4">
                        <div className="p-2.5 bg-coffee-800 rounded-xl text-coffee-400">
                            <Clock size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-coffee-100 text-sm">Opening Hours</h4>
                            <p className="text-coffee-300 text-xs mt-1">Mon - Fri: 8am - 8pm</p>
                            <p className="text-coffee-300 text-xs">Sat - Sun: 9am - 8pm</p>
                        </div>
                    </div>

                    <div className="bg-coffee-800/50 p-4 rounded-2xl border border-coffee-700/30 flex items-start space-x-4">
                        <div className="p-2.5 bg-coffee-800 rounded-xl text-coffee-400">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-coffee-100 text-sm">Location</h4>
                            <p className="text-coffee-300 text-xs mt-1">12 Tajmahal Road, Mohammadpur</p>
                            <p className="text-coffee-300 text-xs">Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <div className="bg-coffee-800/50 p-4 rounded-2xl border border-coffee-700/30 flex items-start space-x-4">
                        <div className="p-2.5 bg-coffee-800 rounded-xl text-coffee-400">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-coffee-100 text-sm">Contact</h4>
                            <p className="text-coffee-300 text-xs mt-1">+8801726666666</p>
                            <p className="text-coffee-300 text-xs">hello@coffeeshop.com</p>
                        </div>
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
