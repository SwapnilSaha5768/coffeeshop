import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Menu from './pages/Menu';
import Popular from './pages/Popular';
import AboutUs from './pages/AboutUs';
import OrderSuccess from './pages/OrderSuccess';
import Settings from './pages/Settings';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          <div className="min-h-screen bg-coffee-50 dark:bg-coffee-950 text-coffee-900 dark:text-coffee-50 font-sans transition-colors duration-300">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
