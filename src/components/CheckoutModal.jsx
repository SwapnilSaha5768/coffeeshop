
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X, User, MapPin, ChevronDown, Check } from 'lucide-react';
import Button from './ui/Button';

const NOOK_NAMES = [
    "The Quiet Nook",
    "The Brewed Nook",
    "The Daily Grind Corner",
    "The Velvet Roast Nook",
    "The Bean & Blanket Corner"
];

export default function CheckoutModal({ isOpen, onClose, onSubmit }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            name: '',
            location: NOOK_NAMES[0]
        }
    });

    const selectedLocation = watch('location');

    // Reset form when modal opens/closes
    useEffect(() => {
        if (isOpen) {
            reset({
                name: '',
                location: NOOK_NAMES[0]
            });
            setIsDropdownOpen(false);
        }
    }, [isOpen, reset]);

    const onFormSubmit = (data) => {
        onSubmit(data);
        reset();
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-colors"
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white dark:bg-coffee-900 rounded-3xl w-full max-w-md p-6 shadow-2xl pointer-events-auto border border-coffee-100 dark:border-coffee-700">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-serif font-bold text-coffee-900 dark:text-coffee-100">Almost There!</h3>
                                <button onClick={onClose} className="p-2 hover:bg-coffee-100 dark:hover:bg-coffee-800 rounded-full transition-colors text-coffee-600 dark:text-coffee-400">
                                    <X size={24} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
                                <div>
                                    <label className="block text-base font-medium text-coffee-700 dark:text-coffee-300 mb-1 ml-1">Your Name</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-400">
                                            <User size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            {...register("name", { required: "Please enter your name" })}
                                            placeholder="Enter your name"
                                            className={`w-full pl-12 pr-4 py-3.5 bg-coffee-50 dark:bg-coffee-950/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-500/50 text-coffee-900 dark:text-coffee-100 placeholder-coffee-400 dark:placeholder-coffee-600 transition-colors text-lg ${errors.name ? 'border-red-500' : 'border-coffee-200 dark:border-coffee-700/50'}`}
                                            autoFocus
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1 ml-1">{errors.name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-base font-medium text-coffee-700 dark:text-coffee-300 mb-1 ml-1">Choose your Spot</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-400 pointer-events-none z-10">
                                            <MapPin size={20} />
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="w-full pl-12 pr-10 py-3.5 bg-coffee-50 dark:bg-coffee-950/50 border border-coffee-200 dark:border-coffee-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-500/50 text-coffee-900 dark:text-coffee-100 transition-colors text-lg text-left truncate"
                                        >
                                            {selectedLocation}
                                        </button>

                                        <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-coffee-400 transition-transform duration-200 pointer-events-none z-10 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                            <ChevronDown size={20} />
                                        </div>

                                        {/* Dropdown Menu */}
                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-coffee-800 border border-coffee-200 dark:border-coffee-700 rounded-xl shadow-xl z-20 overflow-hidden max-h-60 overflow-y-auto"
                                                >
                                                    {NOOK_NAMES.map((nook) => (
                                                        <button
                                                            key={nook}
                                                            type="button"
                                                            onClick={() => {
                                                                setValue('location', nook);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                            className={`w-full px-4 py-3 text-left hover:bg-coffee-50 dark:hover:bg-coffee-700/50 transition-colors flex items-center justify-between group ${selectedLocation === nook ? 'bg-coffee-100 dark:bg-coffee-700/50 text-coffee-900 dark:text-coffee-100 font-medium' : 'text-coffee-700 dark:text-coffee-300'}`}
                                                        >
                                                            <span className="text-base">{nook}</span>
                                                            {selectedLocation === nook && <Check size={18} className="text-coffee-600 dark:text-coffee-400" />}
                                                        </button>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Invisible backdrop to close dropdown when clicking outside */}
                                        {isDropdownOpen && (
                                            <div
                                                className="fixed inset-0 z-10"
                                                onClick={() => setIsDropdownOpen(false)}
                                            />
                                        )}
                                    </div>
                                </div>

                                <Button type="submit" className="w-full mt-2 text-lg py-3">
                                    Confirm Order
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
