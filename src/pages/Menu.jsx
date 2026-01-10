import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/mockData';
import ProductCard from '../components/ui/ProductCard';
import BottomNav from '../components/layout/BottomNav';
import { motion } from 'framer-motion';

export default function Menu() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="h-[100dvh] bg-coffee-50 dark:bg-coffee-950 font-sans flex flex-col overflow-hidden transition-colors duration-300">
            {/* Scrollable Area */}
            <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
                {/* Header */}
                <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                        <button onClick={() => navigate('/home')} className="text-coffee-900 dark:text-coffee-100 hover:bg-coffee-200 dark:hover:bg-coffee-800 p-2 rounded-xl transition-colors">
                            <ArrowLeft />
                        </button>
                        <h1 className="text-xl font-bold text-coffee-900 dark:text-coffee-100 font-serif transition-colors">Full Menu</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search coffees..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-100 placeholder-coffee-400 py-3 pl-12 pr-4 rounded-2xl outline-none border border-coffee-200 dark:border-coffee-700 focus:border-coffee-500 transition-all shadow-sm dark:shadow-none"
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center text-coffee-500 dark:text-coffee-300 mt-10 transition-colors">
                            No coffees found.
                        </div>
                    )}
                </div>
            </div>

            <BottomNav />
        </div>
    );
}
