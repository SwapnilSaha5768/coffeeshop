import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleAdd = (e) => {
        e.stopPropagation();
        addToCart(product, 'M');
    };

    return (
        <motion.div
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-coffee-100 dark:bg-coffee-800 p-3 rounded-[2rem] space-y-3 shadow-xl shadow-coffee-200/40 dark:shadow-none relative w-full flex-shrink-0 transition-colors duration-200"
        >
            <div className="relative">
                {/* Image Placeholder */}
                <div className="w-full aspect-square bg-coffee-100 dark:bg-coffee-900 rounded-[1.5rem] flex items-center justify-center overflow-hidden transition-colors">
                    {/* Replace with actual image in production */}
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${product.image})`, backgroundColor: '#47362E' }}>
                        {!product.image.includes('/') && <span className="text-white/20">img</span>}
                    </div>
                </div>
                <div className="absolute top-0 right-0 bg-white/80 dark:bg-coffee-1000/80 backdrop-blur-sm px-3 py-1.5 rounded-bl-2xl rounded-tr-[1.5rem] flex items-center space-x-1 border-b border-l border-white/20 dark:border-coffee-700 transition-colors">
                    {product.rating && (
                        <>
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-coffee-900 dark:text-coffee-100 text-xs font-bold transition-colors">{product.rating}</span>
                        </>
                    )}
                </div>
            </div>

            <div className="px-1 pb-2">
                <h3 className="text-coffee-900 dark:text-coffee-100 font-serif text-xl leading-tight truncate mb-1 transition-colors">{product.name}</h3>
                <p className="text-coffee-500 dark:text-coffee-300 text-xs truncate mb-3 transition-colors">{product.description}</p>

                <div className="flex items-center justify-between">
                    <span className="text-coffee-900 dark:text-coffee-100 font-bold text-xl transition-colors"><span className="text-coffee-500 dark:text-coffee-400 text-sm font-sans mr-0.5">$</span>{product.price}</span>
                    <button
                        onClick={handleAdd}
                        className="bg-coffee-500 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-coffee-400 active:scale-95 transition-all"
                    >
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
