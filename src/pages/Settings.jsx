import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-coffee-50 dark:bg-coffee-950 text-coffee-900 dark:text-coffee-50 flex flex-col p-6 font-sans transition-colors duration-300">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-8">
                <button onClick={() => navigate(-1)} className="hover:bg-coffee-200 dark:hover:bg-coffee-800 p-2 rounded-xl transition-colors">
                    <ArrowLeft className="text-coffee-800 dark:text-coffee-100" />
                </button>
                <h1 className="text-xl font-bold font-serif">Settings</h1>
            </div>

            {/* Content */}
            <div className="space-y-6">
                {/* Theme Toggle Section */}
                <div className="bg-coffee-100 dark:bg-coffee-900/50 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-coffee-200 dark:bg-coffee-800 rounded-full text-coffee-800 dark:text-coffee-100">
                            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                        </div>
                        <div>
                            <h3 className="font-semibold font-serif text-lg">Appearance</h3>
                            <p className="text-xs text-coffee-600 dark:text-coffee-400">
                                {theme === 'dark' ? 'Dark Mode is on' : 'Light Mode is on'}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 flex items-center ${theme === 'dark' ? 'bg-coffee-500 justify-end' : 'bg-coffee-300 justify-start'}`}
                    >
                        <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
                    </button>
                </div>

                {/* Other simulated settings */}
                <div className="text-center pt-8 opacity-50 space-y-2">
                    <p className="text-xs">App Version 1.0.0</p>
                </div>
            </div>
        </div>
    );
}
