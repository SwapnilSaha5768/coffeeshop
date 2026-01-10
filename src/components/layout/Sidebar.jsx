import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Coffee, Heart, ShoppingBag, User, Settings, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: Home, label: 'Home', path: '/home' },
        { icon: Coffee, label: 'Menu', path: '/menu' },
        { icon: Heart, label: 'Favorites', path: '/favorites' },
        { icon: ShoppingBag, label: 'My Cart', path: '/cart' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 w-[280px] max-w-[85vw] h-full bg-coffee-50 dark:bg-coffee-900 z-50 flex flex-col rounded-r-[2rem] shadow-2xl border-r border-coffee-200 dark:border-coffee-800 transition-colors duration-300"
                    >
                        {/* Header */}
                        <div className="p-8 flex justify-between items-center border-b border-coffee-200/50 dark:border-coffee-800/50">
                            <h2 className="text-2xl font-serif font-bold text-coffee-800 dark:text-coffee-100">Coffee<span className="text-coffee-500">Shop</span></h2>
                            <button onClick={onClose} className="p-2 bg-coffee-200 dark:bg-coffee-800 rounded-xl text-coffee-600 dark:text-coffee-400 hover:text-coffee-900 dark:hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
                            {menuItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <button
                                        key={item.label}
                                        onClick={() => {
                                            navigate(item.path);
                                            onClose();
                                        }}
                                        className={`w-full flex items-center space-x-4 p-4 rounded-2xl transition-all font-medium ${isActive
                                            ? 'bg-coffee-500 text-white shadow-lg shadow-coffee-500/20'
                                            : 'text-coffee-600 dark:text-coffee-300 hover:bg-coffee-200 dark:hover:bg-coffee-800 hover:text-coffee-900 dark:hover:text-coffee-100'
                                            }`}
                                    >
                                        <item.icon size={22} />
                                        <span>{item.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Footer */}
                        <div className="p-8 border-t border-coffee-200/50 dark:border-coffee-800/50">
                            <button className="flex items-center space-x-3 text-coffee-500 dark:text-coffee-400 hover:text-red-500 dark:hover:text-red-400 transition-colors w-full px-4 py-2">
                                <LogOut size={20} />
                                <span className="font-medium">Sign Out</span>
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
