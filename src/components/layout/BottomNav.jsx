import { Home, ShoppingBag, Heart, Info } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function BottomNav() {
    const navigate = useNavigate();
    const location = useLocation();
    const { cartItems } = useCart();

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const navItems = [
        { icon: Home, path: '/home', label: 'Home' },
        { icon: Heart, path: '/favorites', label: 'Fav' },
        { icon: ShoppingBag, path: '/cart', label: 'Cart' },
        { icon: Info, path: '/about', label: 'About' }
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#FFF8E7]/90 dark:bg-coffee-950/90 backdrop-blur-lg border-t border-coffee-200 dark:border-coffee-800 p-4 pb-6 z-50 rounded-t-3xl transition-colors duration-300">
            <div className="flex justify-around items-center">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    const isCart = item.label === 'Cart';

                    return (
                        <button
                            key={item.label}
                            onClick={() => navigate(item.path)}
                            className={`p-2 relative transition-colors duration-300 ${isActive ? 'text-coffee-600 dark:text-coffee-100' : 'text-coffee-400 dark:text-coffee-600 hover:text-coffee-600 dark:hover:text-white'
                                }`}
                        >
                            <item.icon size={24} fill={isActive ? "currentColor" : "none"} />

                            {isCart && totalItems > 0 && (
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -top-1 -right-1 bg-coffee-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-coffee-950"
                                    >
                                        {totalItems > 9 ? '9+' : totalItems}
                                    </motion.div>
                                </AnimatePresence>
                            )}
                        </button>
                    )
                })}
            </div>
        </div>
    );
}
