import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

    const handleCheckout = () => {
        const itemsText = cart
            .map((item) => `- ${item.name}${item.selectedOption ? ` (${item.selectedOption})` : ''} (x${item.quantity})`)
            .join('\n');

        const totalText = `Total: $${cartTotal.toLocaleString()}`;
        const message = encodeURIComponent(
            `Hola Mavi! 👋\n\nMe gustaría realizar el siguiente pedido:\n\n${itemsText}\n\n${totalText}\n\n¿Cómo podemos coordinar la entrega?`
        );

        // Tu número de WhatsApp configurado
        const phoneNumber = "5493543636167";
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
            <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Tu Carrito</h2>
                    <button className="close-btn" onClick={() => setIsCartOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <p>Tu carrito está vacío</p>
                            <button className="btn btn-primary" onClick={() => setIsCartOpen(false)}>
                                Seguir comprando
                            </button>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={`${item.id}-${item.selectedOption}`} className="cart-item">
                                <div className="cart-item-img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    {item.selectedOption && (
                                        <p className="item-option">
                                            {item.category === 'pestañas' ? `Largo: ${item.selectedOption}` : item.selectedOption}
                                        </p>
                                    )}
                                    <p className="item-price">{item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.selectedOption, -1)}><Minus size={14} /></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.selectedOption, 1)}><Plus size={14} /></button>
                                    </div>
                                </div>
                                <button className="remove-item" onClick={() => removeFromCart(item.id, item.selectedOption)}>
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total:</span>
                            <span>${cartTotal.toLocaleString()}</span>
                        </div>
                        <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
                            Finalizar Compra vía WhatsApp
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
