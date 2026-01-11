import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, size = 'M') => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id && item.size === size);
            if (existing) {
                return prev.map(item =>
                    (item.id === product.id && item.size === size)
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            let basePrice = parseFloat(product.price);
            let adjustedPrice = basePrice;

            if (size === 'S') {
                adjustedPrice = basePrice - 0.75;
            } else if (size === 'L') {
                adjustedPrice = basePrice + 0.50;
            }

            return [...prev, { ...product, price: adjustedPrice.toFixed(2), quantity: 1, size }];
        });
    };

    const removeFromCart = (id, size) => {
        setCartItems(prev => prev.filter(item => !(item.id === id && item.size === size)));
    };

    const updateQuantity = (id, size, change) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id && item.size === size) {
                const newQty = item.quantity + change;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    const clearCart = () => setCartItems([]);

    // Initialize favorites from localStorage
    const [favorites, setFavorites] = useState(() => {
        try {
            const saved = localStorage.getItem('favorites');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error("Failed to load favorites", e);
            return [];
        }
    });

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        try {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } catch (e) {
            console.error("Failed to save favorites", e);
        }
    }, [favorites]);

    const toggleFavorite = (productId) => {
        setFavorites(prev => {
            if (prev.includes(productId)) {
                return prev.filter(id => id !== productId);
            }
            return [...prev, productId];
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, favorites, toggleFavorite }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
