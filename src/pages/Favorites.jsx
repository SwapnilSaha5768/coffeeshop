import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/mockData';
import ProductCard from '../components/ui/ProductCard';
import BottomNav from '../components/layout/BottomNav';
import { motion } from 'framer-motion';

export default function Favorites() {
    const navigate = useNavigate();
    const { favorites } = useCart();

    const favoriteProducts = products.filter(p => favorites.includes(p.id));

    return (
        <div className="h-[100dvh] bg-coffee-50 dark:bg-coffee-950 font-sans flex flex-col overflow-hidden transition-colors duration-300">
            {/* Scrollable Area */}
            <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
                {/* Header */}
                <div className="p-6 flex items-center space-x-4">
                    <button onClick={() => navigate('/home')} className="text-coffee-900 dark:text-coffee-100 hover:bg-coffee-200 dark:hover:bg-coffee-800 p-2 rounded-xl transition-colors">
                        <ArrowLeft />
                    </button>
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl font-bold text-coffee-900 dark:text-coffee-100 font-serif transition-colors">My Favorites</h1>
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 px-6">
                    {favoriteProducts.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50 pb-20">
                            <div className="p-6 bg-white dark:bg-coffee-800 rounded-full transition-colors">
                                <Heart size={48} className="text-coffee-500" />
                            </div>
                            <div>
                                <h3 className="text-coffee-900 dark:text-coffee-100 font-serif text-xl transition-colors">No Favorites Yet</h3>
                                <p className="text-coffee-900 dark:text-coffee-300 text-sm mt-1 transition-colors">Mark your loved coffees to see them here.</p>
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {favoriteProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>

            <BottomNav />
        </div>
    );
}
