import React, { useState } from 'react';
import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="#" className="logo-link">
          <img src={logo} alt="Mavi Logo" className="navbar-logo" />
        </a>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
          <li><a href="#shop" onClick={() => setIsMenuOpen(false)}>Productos</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Nosotros</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
        </ul>

        <div className="nav-icons">
          <Search className="icon" size={22} strokeWidth={1.5} />
          <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag className="icon" size={22} strokeWidth={1.5} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
