import { motion } from 'framer-motion';

export default function CategoryTabs({ categories, activeCategory, onSelect }) {
    return (
        <div className="flex justify-between px-4 pb-2">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onSelect(cat.id)}
                    className={`flex-col flex items-center space-y-1 transition-colors duration-300 ${activeCategory === cat.id ? 'text-coffee-600 dark:text-coffee-100' : 'text-coffee-400 dark:text-coffee-300'
                        }`}
                >
                    <span className="text-base font-medium">{cat.name}</span>
                    {activeCategory === cat.id && (
                        <motion.div
                            layoutId="activeTab"
                            className="w-2 h-2 rounded-full bg-coffee-600 dark:bg-coffee-100"
                        />
                    )}
                </button>
            ))}
        </div>
    );
}
