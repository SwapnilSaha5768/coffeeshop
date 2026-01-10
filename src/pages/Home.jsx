import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, Menu as MenuIcon, X } from 'lucide-react';
import { categories, products } from '../data/mockData';
import CategoryTabs from '../components/ui/CategoryTabs';
import ProductCard from '../components/ui/ProductCard';
import BottomNav from '../components/layout/BottomNav';
import Sidebar from '../components/layout/Sidebar';

export default function Home() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('coffee');
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const filteredProducts = products.filter(p => {
        const matchesCategory = p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour >= 9 && hour < 12) return "Good Morning";
        if (hour >= 12 && hour < 16) return "Good Noon";
        if (hour >= 16 && hour < 20) return "Good Evening";
        return "We are Closed Now, Opening Soon..!!";
    };

    return (
        <div className="h-[100dvh] bg-coffee-50 dark:bg-coffee-950 relative font-sans overflow-hidden flex flex-col transition-colors duration-300">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <div className="absolute top-0 left-0 w-full h-1/3 bg-coffee-800/20 blur-3xl -z-10 pointer-events-none" />

            <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
                <div className="px-6 pt-8 pb-4 z-10 sticky top-0 bg-coffee-50/80 dark:bg-coffee-950/80 backdrop-blur-md border-b border-coffee-200/50 dark:border-coffee-800/50 relative transition-colors duration-300">
                    <div className="h-11 flex items-center justify-between relative">
                        {showSearch ? (
                            <div className="w-full h-full flex items-center relative animate-in fade-in slide-in-from-top-1 duration-200">
                                <Search size={20} className="text-coffee-400 absolute left-4" />
                                <input
                                    type="text"
                                    placeholder="Search coffee..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full h-full bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-100 placeholder-coffee-400 text-sm pl-12 pr-12 rounded-xl outline-none border border-coffee-200 dark:border-coffee-700 focus:border-coffee-500 transition-all shadow-lg"
                                    autoFocus
                                />
                                <button
                                    onClick={() => { setShowSearch(false); setSearchQuery(''); }}
                                    className="absolute right-3 p-1.5 bg-coffee-100 dark:bg-coffee-700/50 rounded-full text-coffee-500 dark:text-coffee-300 hover:text-coffee-900 dark:hover:text-white transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* Left: Menu */}
                                <button onClick={() => setIsSidebarOpen(true)} className="w-11 h-11 flex items-center justify-center bg-white/50 dark:bg-coffee-800/50 rounded-xl text-coffee-900 dark:text-coffee-100 border border-coffee-200/50 dark:border-coffee-700/50 hover:bg-white dark:hover:bg-coffee-800 transition-colors relative z-20 shadow-sm dark:shadow-none">
                                    <MenuIcon size={22} />
                                </button>

                                {/* Center: Greeting (Absolutely Centered) */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                                    <p className="text-coffee-500 dark:text-coffee-300 text-[8px] font-bold tracking-[0.2em] uppercase opacity-80 transition-colors">{getGreeting()}</p>
                                </div>

                                {/* Right: Actions */}
                                <div className="flex items-center space-x-3 relative z-20">
                                    {/* Search Toggle */}
                                    <button
                                        onClick={() => setShowSearch(true)}
                                        className="w-11 h-11 flex items-center justify-center rounded-xl transition-all border bg-white/50 dark:bg-coffee-800/50 text-coffee-900 dark:text-coffee-100 border-coffee-200/50 dark:border-coffee-700/50 hover:bg-white dark:hover:bg-coffee-800 shadow-sm dark:shadow-none"
                                    >
                                        <Search size={20} />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>



                <div className="space-y-6">
                    <div className="mt-2">
                        <CategoryTabs
                            categories={categories}
                            activeCategory={activeCategory}
                            onSelect={setActiveCategory}
                        />
                    </div>

                    <div className="pl-6 overflow-x-auto pb-4 scrollbar-hide flex space-x-5 pr-6 min-h-[300px]">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <div key={product.id} className="min-w-[45vw] md:min-w-[220px]">
                                    <ProductCard product={product} />
                                </div>
                            ))
                        ) : (
                            <div className="w-full h-[250px] flex flex-col items-center justify-center text-coffee-300 space-y-2">
                                <span className="text-4xl">🚧</span>
                                <p className="font-serif text-lg tracking-wide">Coming Soon</p>
                                <p className="text-xs opacity-60">We are crafting something special!</p>
                            </div>
                        )}
                    </div>

                    {/* Popular Section */}
                    <div className="px-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-coffee-900 dark:text-coffee-100 font-medium text-lg transition-colors">Popular</h3>
                            <button onClick={() => navigate('/popular')} className="text-coffee-500 text-sm font-medium hover:text-coffee-400 transition-colors">View All</button>
                        </div>

                        <div className="space-y-3">
                            {products.filter(p => p.rating > 4.7).slice(0, 3).map(product => (
                                <div
                                    key={product.id}
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    className="p-3 bg-coffee-100 dark:bg-coffee-800/50 rounded-2xl flex items-center space-x-4 border border-coffee-200 dark:border-white/5 active:scale-95 transition-all shadow-sm dark:shadow-none hover:shadow-md"
                                >
                                    <div className="w-16 h-16 bg-white dark:bg-coffee-900 rounded-xl flex-shrink-0 relative overflow-hidden transition-colors">
                                        <div className="w-full h-full bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${product.image})`, backgroundColor: '#23180c' }} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-coffee-900 dark:text-coffee-100 font-medium transition-colors">{product.name}</h4>
                                        <p className="text-coffee-500 dark:text-coffee-300 text-xs mt-0.5 max-w-[150px] truncate transition-colors">{product.description}</p>
                                    </div>
                                    <span className="text-coffee-900 dark:text-coffee-100 font-bold pr-2 transition-colors"><span className="text-coffee-500 text-xs">$</span>{product.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <BottomNav />
        </div>
    );
}
