import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Minus, Plus } from 'lucide-react';
import { products } from '../data/mockData';
import Button from '../components/ui/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));
    const [size, setSize] = useState('M');

    const { addToCart, favorites, toggleFavorite } = useCart();

    const getAdjustedPrice = () => {
        const basePrice = parseFloat(product.price);
        if (size === 'S') return (basePrice - 0.75).toFixed(2);
        if (size === 'L') return (basePrice + 0.50).toFixed(2);
        return basePrice.toFixed(2);
    };

    const displayPrice = getAdjustedPrice();

    const handleAddToCart = () => {
        addToCart(product, size);
        navigate('/cart');
    };

    if (!product) return <div>Product not found</div>;

    return (
        <div className="min-h-screen bg-coffee-50 dark:bg-coffee-950 flex flex-col relative transition-colors duration-300">
            {/* Header Image Area */}
            <div className="flex-1 relative">
                <div className="absolute top-0 left-0 w-full p-6 flex justify-between z-10">
                    <button onClick={() => navigate(-1)} className="bg-white/40 dark:bg-coffee-900/40 backdrop-blur-md p-2 rounded-xl text-coffee-900 dark:text-white transition-colors">
                        <ArrowLeft />
                    </button>
                    <button
                        onClick={() => toggleFavorite(product.id)}
                        className={`bg-white/40 dark:bg-coffee-900/40 backdrop-blur-md p-2 rounded-xl transition-all ${favorites.includes(product.id) ? 'text-red-500' : 'text-coffee-900 dark:text-white'}`}
                    >
                        <Heart fill={favorites.includes(product.id) ? "currentColor" : "none"} />
                    </button>
                </div>

                <div className="w-full h-[45vh] bg-coffee-100 dark:bg-coffee-800 rounded-b-[3rem] shadow-2xl relative overflow-hidden transition-colors">
                    {/* Actual Image */}
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover relative z-0"
                    />
                </div>
            </div>

            {/* Details Body */}
            <div className="px-6 py-8 space-y-6 flex-1 flex flex-col justify-end">
                <div className="space-y-2">
                    <div className="flex justify-between items-start">
                        <h1 className="text-2xl font-serif font-bold text-coffee-900 dark:text-coffee-100 max-w-[200px] transition-colors">{product.name}</h1>
                        <div className="flex items-center space-x-1 text-coffee-500 dark:text-coffee-300 transition-colors">
                            {product.rating && (
                                <>
                                    <Star className="fill-yellow-400 text-yellow-400" size={16} />
                                    <span className="text-coffee-900 dark:text-coffee-100 font-bold transition-colors">{product.rating}</span>
                                    <span className="text-xs">({product.reviews})</span>
                                </>
                            )}
                        </div>
                    </div>
                    <p className="text-coffee-600 dark:text-coffee-300 text-sm transition-colors">{product.description}</p>
                </div>

                {/* Size Selector */}
                <div className="space-y-3">
                    <h3 className="text-coffee-900 dark:text-coffee-200 font-semibold font-serif transition-colors">Size</h3>
                    <div className="flex space-x-4">
                        {['S', 'M', 'L'].map(s => (
                            <button
                                key={s}
                                onClick={() => setSize(s)}
                                className={`flex-1 py-2 rounded-xl border-2 transition-all font-medium ${size === s ? 'border-coffee-500 text-coffee-500 bg-white dark:bg-coffee-800' : 'border-coffee-200 dark:border-coffee-800 text-coffee-400 bg-white/50 dark:bg-coffee-800/50'
                                    }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Footer Price & Add */}
                <div className="bg-white dark:bg-coffee-800/50 backdrop-blur-md rounded-3xl p-4 flex items-center justify-between mt-auto border border-coffee-200 dark:border-coffee-700/30 shadow-lg dark:shadow-none transition-colors">
                    <div>
                        <p className="text-coffee-500 dark:text-coffee-300 text-sm transition-colors">Price</p>
                        <p className="text-2xl font-bold text-coffee-900 dark:text-coffee-100 transition-colors"><span className="text-coffee-500">$</span>{displayPrice}</p>
                    </div>
                    <Button className="w-2/3 ml-8" onClick={handleAddToCart}>
                        Add to Order
                    </Button>
                </div>
            </div>
        </div>
    );
}
