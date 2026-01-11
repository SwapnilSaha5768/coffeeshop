import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2, Coffee } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Button from '../components/ui/Button';
import CheckoutModal from '../components/CheckoutModal';

import { useCart } from '../context/CartContext';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
    const x = useMotionValue(0);
    const deleteOpacity = useTransform(x, [-50, -100], [0, 1]);

    return (
        <div className="relative mb-4">
            <div className="absolute inset-0 bg-red-500/10 rounded-3xl flex items-center justify-end pr-6 overflow-hidden border border-red-500/20">
                <motion.button
                    style={{ opacity: deleteOpacity }}
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="p-3 bg-red-500 text-white rounded-full shadow-lg shadow-red-500/30 active:scale-95 transition-transform"
                >
                    <Trash2 size={20} />
                </motion.button>
            </div>

            <motion.div
                style={{ x }}
                drag="x"
                dragConstraints={{ left: -100, right: 0 }}
                dragElastic={0.1}
                whileTap={{ cursor: "grabbing" }}
                className="relative bg-white dark:bg-coffee-800 p-4 rounded-3xl flex items-center justify-between space-x-4 border border-coffee-200 dark:border-coffee-700/50 shadow-md z-10 transition-colors"
            >
                <div className="w-16 h-16 bg-coffee-100 dark:bg-coffee-900 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden transition-colors">
                    <div className="w-full h-full bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${item.image})`, backgroundColor: '#2e231e' }} />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-coffee-900 dark:text-coffee-100 font-serif font-semibold truncate pr-2 transition-colors">{item.name}</h3>
                    <p className="text-coffee-500 dark:text-coffee-300 text-xs truncate pr-2 transition-colors">{item.description}</p>
                    <div className="flex items-center mt-1">
                        <span className="text-coffee-600 dark:text-coffee-500 font-bold text-sm w-12 transition-colors">${item.price}</span>
                        <span className="text-coffee-600 dark:text-coffee-400 text-xs bg-coffee-100 dark:bg-coffee-900/50 px-2 py-0.5 rounded-md border border-coffee-200 dark:border-coffee-700/50 shrink-0 transition-colors">{item.size}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                    <button onClick={() => updateQuantity(item.id, item.size, -1)} className="w-8 h-8 rounded-full border border-coffee-300 dark:border-coffee-600/50 flex items-center justify-center text-coffee-600 dark:text-coffee-200 hover:bg-coffee-200 dark:hover:bg-coffee-700 hover:text-coffee-900 dark:hover:text-white transition-colors">
                        <Minus size={14} />
                    </button>
                    <span className="text-coffee-900 dark:text-coffee-100 font-medium w-6 text-center transition-colors">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.size, 1)} className="w-8 h-8 rounded-full border border-coffee-300 dark:border-coffee-600/50 flex items-center justify-center text-coffee-600 dark:text-coffee-200 hover:bg-coffee-200 dark:hover:bg-coffee-700 hover:text-coffee-900 dark:hover:text-white transition-colors">
                        <Plus size={14} />
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default function Cart() {
    const navigate = useNavigate();
    const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);

    const handleCheckout = (userDetails) => {
        // Generate a random Order ID (e.g., #ORD-1234)
        const orderId = `#ORD-${Math.floor(1000 + Math.random() * 9000)}`;

        clearCart();
        setIsCheckoutModalOpen(false);
        navigate('/order-success', {
            state: {
                userDetails,
                orderId
            }
        });
    };

    return (
        <div className="h-[100dvh] overflow-hidden bg-coffee-50 dark:bg-coffee-950 flex flex-col p-6 space-y-6 font-sans transition-colors duration-300">
            <div className="flex items-center space-x-4">
                <button onClick={() => navigate(-1)} className="text-coffee-900 dark:text-coffee-100 hover:bg-coffee-200 dark:hover:bg-coffee-800 p-2 rounded-xl transition-colors">
                    <ArrowLeft />
                </button>
                <h1 className="text-xl font-bold text-coffee-900 dark:text-coffee-100 font-serif transition-colors">My Order</h1>
            </div>

            {cartItems.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1 flex flex-col items-center justify-center text-center space-y-6 opacity-50"
                >
                    <div className="w-24 h-24 rounded-full bg-white dark:bg-coffee-800 flex items-center justify-center mb-2 shadow-2xl relative transition-colors">
                        <div className="absolute inset-0 bg-coffee-500/10 rounded-full blur-xl animate-pulse"></div>
                        <Coffee size={48} className="text-coffee-500" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-serif text-coffee-900 dark:text-coffee-100 font-bold transition-colors">Your Cart is Empty</h3>
                        <p className="text-coffee-500 dark:text-coffee-300 text-sm max-w-[200px] mx-auto transition-colors">Looks like you haven't added your daily dose of caffeine yet.</p>
                    </div>
                    <Button onClick={() => navigate('/home')} className="w-48">
                        Browse Menu
                    </Button>
                </motion.div>
            ) : (
                <div className="flex-1 flex flex-col md:grid md:grid-cols-3 md:gap-8 min-h-0">
                    <div className="flex-1 space-y-2 overflow-y-auto pb-4 md:col-span-2 md:pr-2 scrollbar-hide">
                        <p className="text-coffee-400/50 text-xs text-center mb-2 italic">Swipe left on item to remove</p>
                        <AnimatePresence>
                            {cartItems.map(item => (
                                <CartItem
                                    key={`${item.id}-${item.size}`}
                                    item={item}
                                    updateQuantity={updateQuantity}
                                    removeFromCart={removeFromCart}
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="md:col-span-1">
                        <div className="space-y-4 pt-4 border-t border-coffee-200/50 dark:border-coffee-800/50 md:border-t-0 md:bg-white dark:md:bg-coffee-800/30 md:p-6 md:rounded-3xl md:h-fit md:sticky md:top-4 transition-colors">
                            <h2 className="hidden md:block text-xl font-serif font-bold text-coffee-900 dark:text-coffee-100 mb-4 transition-colors">Order Summary</h2>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-coffee-600 dark:text-coffee-300 text-sm transition-colors">
                                    <span>Subtotal</span>
                                    <span>${total}</span>
                                </div>
                                <div className="flex justify-between items-center text-coffee-600 dark:text-coffee-300 text-sm transition-colors">
                                    <span>Tax (5%)</span>
                                    <span>${(total * 0.05).toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="border-t border-coffee-200/50 dark:border-coffee-700/50 my-2 pt-2 flex justify-between items-center text-coffee-600 dark:text-coffee-200 transition-colors">
                                <span className="font-medium">Total Amount</span>
                                <span className="text-coffee-900 dark:text-coffee-100 font-bold text-xl transition-colors"><span className="text-coffee-500 dark:text-coffee-500">$</span>{(total * 1.05).toFixed(2)}</span>
                            </div>
                            <Button onClick={() => setIsCheckoutModalOpen(true)} className="w-full shadow-lg shadow-coffee-500/20">
                                Checkout Now
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <CheckoutModal
                isOpen={isCheckoutModalOpen}
                onClose={() => setIsCheckoutModalOpen(false)}
                onSubmit={handleCheckout}
            />
        </div>
    );
}
