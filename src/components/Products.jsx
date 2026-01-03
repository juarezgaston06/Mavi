import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Products.css';

const productsData = [
    // Adhesivos
    { id: 1, name: 'Adhesivo Profesional', price: '$5.500', img: '/products/adhesivos/adhesivo.jpeg', category: 'adhesivos' },

    // Pinzas
    { id: 2, name: 'Pinza Naga Tornasol', price: '$4.200', img: '/products/pinzas/PINZA NAGA TORNASOL.jpeg', category: 'pinzas' },
    { id: 3, name: 'Pinza Recta', price: '$3.500', img: '/products/pinzas/pinza recta.jpeg', category: 'pinzas' },
    { id: 4, name: 'Pinza Tipo Vetus', price: '$3.800', img: '/products/pinzas/pinza tipo vetus.jpeg', category: 'pinzas' },

    // Pestañas
    { id: 5, name: 'Pestañas 3D Premium', price: '$4.800', img: '/products/pestañas/3d.jpeg', category: 'pestañas' },
    { id: 6, name: 'Naga 0.15D 12mm', price: '$4.500', img: '/products/pestañas/naga 0.15d 12mm.webp', category: 'pestañas' },
    { id: 7, name: 'Naga 0.15D 13mm', price: '$4.500', img: '/products/pestañas/naga 0.15d 13mm.webp', category: 'pestañas' },
    { id: 8, name: 'Naga 0.15D 8mm', price: '$4.500', img: '/products/pestañas/naga 0.15d 8mm.webp', category: 'pestañas' },
    { id: 9, name: 'Yalu Zaphi 0.007D', price: '$4.900', img: '/products/pestañas/yalu zaphi 0.007d.webp', category: 'pestañas' },
    { id: 10, name: 'Zaphiria Anime', price: '$5.200', img: '/products/pestañas/zaphiria anime.jpeg', category: 'pestañas' },
    { id: 11, name: 'Zaphiria Wispy', price: '$5.200', img: '/products/pestañas/zaphiria wispy.jpeg', category: 'pestañas' },
    { id: 12, name: 'Naga 0.007 D 10mm', price: '$4.500', img: '/products/pestañas/naga 0.007 d 10mm.webp', category: 'pestañas' },
    { id: 13, name: 'Naga 0.007 D 11mm', price: '$4.500', img: '/products/pestañas/naga 0.007 d 11mm.webp', category: 'pestañas' },
    { id: 14, name: 'Naga 0.007 D 12mm', price: '$4.500', img: '/products/pestañas/naga 0.007d 12 mm.webp', category: 'pestañas' },
    { id: 15, name: 'Naga 0.07 D 14mm', price: '$4.500', img: '/products/pestañas/naga 0.07 d 14mm.webp', category: 'pestañas' },

    // Lifting
    { id: 16, name: 'Bálsamo Durazno', price: '$3.200', img: '/products/lifting/BALSAMO DURAZNO.jpeg', category: 'lifting' },
    { id: 17, name: 'Bálsamo Palta', price: '$3.200', img: '/products/lifting/balsamo palta.jpeg', category: 'lifting' },
    { id: 18, name: 'Bigudíes Chato', price: '$2.500', img: '/products/lifting/bigudies chato.jpeg', category: 'lifting' },
    { id: 19, name: 'Bigudíes Queen', price: '$2.800', img: '/products/lifting/bigudies queen.jpeg', category: 'lifting' },
    { id: 20, name: 'Herramienta Lifting', price: '$1.800', img: '/products/lifting/herramienta lifting.jpeg', category: 'lifting' },
    { id: 21, name: 'Kit Gollee Tinte', price: '$8.500', img: '/products/lifting/kit golle tinte.jpeg', category: 'lifting' },
    { id: 22, name: 'Paso 1-2-3 Lifting', price: '$7.200', img: '/products/lifting/paso 123.jpeg', category: 'lifting' },
    { id: 23, name: 'Pegamento Bigudíes', price: '$3.500', img: '/products/lifting/pegamento para bigui.jpeg', category: 'lifting' },
    { id: 24, name: 'Peine Lift', price: '$1.200', img: '/products/lifting/peine lift.jpeg', category: 'lifting' },

    // Accesorios
    { id: 25, name: 'Ventilador Gatito', price: '$5.800', img: '/products/accesorios/ventilados gatito.jpeg', category: 'accesorios' },
    { id: 26, name: 'Anillos Chatos x10', price: '$1.500', img: '/products/accesorios/anillo chato con division x10', category: 'accesorios' },
    { id: 27, name: 'Cinta Japonesa x5', price: '$2.900', img: '/products/accesorios/cinta japonesa x5.webp', category: 'accesorios' },
    { id: 28, name: 'Cinta Papel', price: '$1.200', img: '/products/accesorios/cinta papel en bolsita.webp', category: 'accesorios' },
    { id: 29, name: 'Cinta Transpore', price: '$1.500', img: '/products/accesorios/cinta transpore.webp', category: 'accesorios' },
];

const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'pestañas', name: 'Pestañas' },
    { id: 'lifting', name: 'Lifting' },
    { id: 'adhesivos', name: 'Adhesivos' },
    { id: 'pinzas', name: 'Pinzas' },
    { id: 'accesorios', name: 'Accesorios' },
];

const Products = () => {
    const { addToCart } = useCart();
    const [activeCategory, setActiveCategory] = useState('todos');

    const filteredProducts = activeCategory === 'todos'
        ? productsData
        : productsData.filter(p => p.category === activeCategory);

    return (
        <section className="products-section" id="shop">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Mavi Professional</span>
                    <h2>Nuestro Catálogo</h2>
                    <div className="filters">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card animate-fade-in">
                            <div className="product-image-wrapper">
                                <img src={product.img} alt={product.name} loading="lazy" />
                                <div className="product-overlay">
                                    <button className="add-to-cart" onClick={() => addToCart(product)}>
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
