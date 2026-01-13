import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) =>
                item.id === product.id && item.selectedOption === product.selectedOption
            );
            if (existingItem) {
                return prevCart.map((item) =>
                    (item.id === product.id && item.selectedOption === product.selectedOption)
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId, selectedOption) => {
        setCart((prevCart) => prevCart.filter((item) =>
            !(item.id === productId && item.selectedOption === selectedOption)
        ));
    };

    const updateQuantity = (productId, selectedOption, amount) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === productId && item.selectedOption === selectedOption) {
                    const newQuantity = Math.max(1, item.quantity + amount);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((total, item) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, ''));
        return total + price * item.quantity;
    }, 0);

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};
