import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartFloat.css';

const CartFloat = () => {
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <div className="cart-float" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={28} />
            {cartCount > 0 && <span className="cart-badge-float">{cartCount}</span>}
        </div>
    );
};

export default CartFloat;
