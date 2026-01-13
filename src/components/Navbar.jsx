import React, { useState } from 'react';
import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo_mavi.jpg';
import './Navbar.css';

const Navbar = ({ onHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    onHome && onHome();
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="#" className="logo bouncing-logo" onClick={handleLinkClick}>
          <img src={logo} alt="Mavi" className="navbar-logo" />
        </a>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={handleLinkClick}>Inicio</a></li>
          <li><a href="#shop" onClick={handleLinkClick}>Productos</a></li>
          <li><a href="#about" onClick={handleLinkClick}>Nosotros</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contacto</a></li>
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
