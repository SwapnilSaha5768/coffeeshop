import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Home } from 'lucide-react';
import Button from '../components/ui/Button';

export default function OrderSuccess() {
    const navigate = useNavigate();
    const location = useLocation();
    const { userDetails, orderId } = location.state || {};
    // Fallback if accessed directly without state
    const displayOrderId = orderId || '#ORD-1234';

    return (
        <div className="h-screen bg-coffee-50 dark:bg-coffee-950 flex flex-col items-center justify-center p-6 text-center space-y-8 font-sans overflow-hidden relative transition-colors duration-300">
            {/* Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-coffee-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-coffee-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
                className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 z-10"
            >
                <CheckCircle size={64} className="text-white" strokeWidth={3} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 z-10"
            >
                <h1 className="text-3xl font-serif font-bold text-coffee-900 dark:text-coffee-100 transition-colors">
                    {userDetails ? `Thank you, ${userDetails.name}!` : 'Order Placed!'}
                </h1>
                <p className="text-coffee-600 dark:text-coffee-300 max-w-xs mx-auto transition-colors">
                    Your coffee is being brewed with love{userDetails ? ` for ${userDetails.location}` : ''}.<br />
                    Use order <span className="font-mono font-bold">{displayOrderId}</span> to track it.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-xs z-10"
            >
                <Button onClick={() => navigate('/home')} className="w-full flex items-center justify-center space-x-2">
                    <Home size={20} />
                    <span>Back to Home</span>
                </Button>
            </motion.div>
        </div>
    );
}
