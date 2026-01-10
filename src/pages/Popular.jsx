import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { products } from '../data/mockData';
import ProductCard from '../components/ui/ProductCard';
import BottomNav from '../components/layout/BottomNav';
import { motion } from 'framer-motion';

export default function Popular() {
    const navigate = useNavigate();

    const popularProducts = products.filter(p => p.rating > 4.7);

    return (

        <div className="h-[100dvh] bg-coffee-50 dark:bg-coffee-950 font-sans flex flex-col overflow-hidden transition-colors duration-300">
            {/* Scrollable Area */}
            <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
                {/* Header */}
                <div className="p-6 flex items-center space-x-4">
                    <button onClick={() => navigate('/home')} className="text-[#2A1E19] dark:text-coffee-100 hover:bg-coffee-200 dark:hover:bg-coffee-800 p-2 rounded-xl transition-colors">
                        <ArrowLeft />
                    </button>
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl font-bold text-[#2A1E19] dark:text-coffee-100 font-serif transition-colors">Popular</h1>
                        <Star className="fill-yellow-400 text-yellow-400" size={20} />
                    </div>
                </div>

                {/* Subheader */}
                <div className="px-6 mb-6">
                    <p className="text-[#432f26] dark:text-coffee-300 transition-colors">Top rated coffees loved by our community.</p>
                </div>

                {/* Grid */}
                <div className="px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {popularProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </motion.div>
                </div>
            </div>

            <BottomNav />
        </div>
    );
}
