import { motion } from 'framer-motion';

export default function Button({ children, onClick, className = '', variant = 'primary' }) {
    const baseStyle = "px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 active:scale-95";
    const variants = {
        primary: "bg-coffee-500 text-white shadow-lg shadow-coffee-500/30 hover:bg-coffee-400",
        secondary: "bg-coffee-200 text-coffee-900 hover:bg-coffee-100",
        outline: "border-2 border-coffee-500 text-coffee-500 hover:bg-coffee-500/10"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </motion.button>
    );
}
