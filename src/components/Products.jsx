import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Products.css';

const productsData = [
    // Adhesivos
    { id: 1, name: 'Adhesivo Zaphiria Circe 3grs', price: '$24.300', img: '/products/adhesivos/Adhesivo Zaphiria Circe 3grs - $12.000.jpeg', category: 'adhesivos' },

    // Pinzas
    { id: 2, name: 'Pinza Nagaraku N-05', price: '$7.500', img: '/products/pinzas/Pinza Nagaraku N-05 - $7.500.jpeg', category: 'pinzas' },
    { id: 3, name: 'Pinza Nagaraku Nh-12', price: '$6.000', img: '/products/pinzas/Pinza Nagaraku Nh-12 - $6.000.jpeg', category: 'pinzas' },
    { id: 4, name: 'Pinza tipo Vetus 6A SA', price: '$6.000', img: '/products/pinzas/Pinza tipo Vetus 6A SA - $ 6.000.jpeg', category: 'pinzas' },

    // Lifting
    { id: 5, name: 'Balsamo Durazno', price: '$4.500', img: '/products/lifting/Balsamo Durazno - $4.500.jpeg', category: 'lifting' },
    { id: 6, name: 'Balsamo Palta', price: '$3.500', img: '/products/lifting/Balsamo Palta - $3.500.jpeg', category: 'lifting' },
    { id: 7, name: 'Bigudie Plano Tecnica Coreana', price: '$6.200', img: '/products/lifting/Bigudie Plano Tecnica Coreana - $6.200.jpeg', category: 'lifting' },
    { id: 8, name: 'Bigudie Ranita', price: '$9.000', img: '/products/lifting/Bigudie Ranita - $9.000.jpeg', category: 'lifting' },
    { id: 9, name: 'Bigudie Transparente', price: '$2.000', img: '/products/lifting/Bigudie Transparente - $2.000.jpeg', category: 'lifting' },
    { id: 10, name: 'Bigudies Miss Queen Curva L', price: '$3.500', img: '/products/lifting/Bigudies Miss Queen Curva L - $3.500.jpeg', category: 'lifting' },
    { id: 11, name: 'Cinta Silicona Contenedora', price: '$3.400', img: '/products/lifting/Cinta Silicona Contenedora - $3.400.jpeg', category: 'lifting' },
    { id: 12, name: 'Herramienta para Lifting', price: '$2.000', img: '/products/lifting/Herramienta para Lifting - $2.000.jpeg', category: 'lifting' },
    { id: 13, name: 'Kit Tinte Golle Negro', price: '$13.000', img: '/products/lifting/Kit Tinte Golle Negro - $13.000.jpeg', category: 'lifting' },
    { id: 14, name: 'Paso 1.2.3 Lifting', price: '$1.500', img: '/products/lifting/Paso 1.2.3 - $1500.jpeg', category: 'lifting' },
    { id: 15, name: 'Pegamento para Bigudies', price: '$6.000', img: '/products/lifting/Pegamento para Bigudies - $6.000.jpeg', category: 'lifting' },
    { id: 16, name: 'Peine Lifting x2', price: '$1.000', img: '/products/lifting/Peine Lifting x2 - $1.000.jpeg', category: 'lifting' },

    // Accesorios
    { id: 17, name: 'Anillo Cono con Division x100', price: '$2.000', img: '/products/accesorios/Anillo Cono con Division x100 - $2.000.webp', category: 'accesorios' },
    { id: 18, name: 'Anillo Cono sin Division', price: '$2.200', img: '/products/accesorios/Anillo Cono sin Division - $2.200.jpeg', category: 'accesorios' },
    { id: 19, name: 'Botella Pico Curvo 250ml', price: '$2.700', img: '/products/accesorios/Botella Pico Curvo 250ml - $2.700.webp', category: 'accesorios' },
    { id: 20, name: 'Cinta Hipolargenica', price: '$900', img: '/products/accesorios/Cinta Hipolargenica - $900.webp', category: 'accesorios' },
    { id: 21, name: 'Cinta Japonesa x5', price: '$2.000', img: '/products/accesorios/Cinta Japonesa x5 - $2.000.webp', category: 'accesorios' },
    { id: 22, name: 'Cinta Transpore', price: '$1.000', img: '/products/accesorios/Cinta Transpore - $1.000.webp', category: 'accesorios' },
    { id: 23, name: 'Espejito Inox', price: '$2.500', img: '/products/accesorios/Espejito Inox - $2.500.jpeg', category: 'accesorios' },
    { id: 24, name: 'Espejito Rosa Eco', price: '$1.000', img: '/products/accesorios/Espejito Rosa Eco - $1.000.jpeg', category: 'accesorios' },
    { id: 25, name: 'Microhisopos x100', price: '$2.250', img: '/products/accesorios/Microhisopos x100 - $2.250.jpeg', category: 'accesorios' },
    { id: 26, name: 'Muñequera Porta Pestañas', price: '$2.400', img: '/products/accesorios/Muñequera Porta Pestañas - $2.400.webp', category: 'accesorios' },
    { id: 27, name: 'Pack Cepillitos x50', price: '$2.500', img: '/products/accesorios/Pack Cepillitos para Pestañas x50 - $2.500.jpeg', category: 'accesorios' },
    { id: 28, name: 'Ventilador Gatito USB', price: '$7.000', img: '/products/accesorios/Ventilador Gatito USB -$7.000.jpeg', category: 'accesorios' },

    // Pestañas
    { id: 29, name: 'Nagaraku 0.10D', price: '$5.250', img: '/products/pestañas/naga 0.15d 12mm.webp', category: 'pestañas' },
    { id: 32, name: 'Zaphiria 0.07D', price: '$4.750', img: '/products/pestañas/yalu zaphi 0.007d.webp', category: 'pestañas' },
    { id: 33, name: 'Zaphiria spire mix', price: '$9.000', img: '/products/pestañas/zaphiria anime.jpeg', category: 'pestañas tecnologicas' },
    { id: 34, name: 'Zaphiria spike mix', price: '$10.500', img: '/products/pestañas/zaphiria wispy.jpeg', category: 'pestañas tecnologicas' },
    { id: 35, name: 'Nagaraku 0.07 D', price: '$5.250', img: '/products/pestañas/naga 0.007 d 10mm.webp', category: 'pestañas' },
    { id: 38, name: 'Big box YY mix 54 lineas', price: '$23.000', img: '/products/pestañas/YY.jpeg', category: 'pestañas tecnologicas' },
    { id: 39, name: 'Big box 3D mix 54 lineas', price: '$26.000', img: '/products/pestañas/3d.jpeg', category: 'pestañas tecnologicas' },
];

const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'pestañas', name: 'Pestañas' },
    { id: 'pestañas tecnologicas', name: 'Pestañas Tecnologicas' },
    { id: 'lifting', name: 'Lifting' },
    { id: 'adhesivos', name: 'Adhesivos' },
    { id: 'pinzas', name: 'Pinzas' },
    { id: 'accesorios', name: 'Accesorios' },
];

const lengths = ['7mm', '8mm', '9mm', '10mm', '11mm', '12mm', '13mm', '14mm', '15mm'];
const steps = ['Paso 1', 'Paso 2', 'Paso 3'];

const ProductCard = ({ product, addToCart }) => {
    const isLash = product.category === 'pestañas';
    const isLiftingStep = product.name === 'Paso 1.2.3 Lifting';

    const [selectedOption, setSelectedOption] = useState(
        isLash ? '12mm' : (isLiftingStep ? 'Paso 1' : null)
    );

    const handleAddToCart = () => {
        const productToAdd = {
            ...product,
            selectedOption: (isLash || isLiftingStep) ? selectedOption : null
        };
        addToCart(productToAdd);
    };

    const categoryName = categories.find(c => c.id === product.category)?.name || product.category;

    return (
        <div className="product-card animate-fade-in">
            <div className="product-image-wrapper">
                <img src={product.img} alt={product.name} loading="lazy" />
                <div className="product-overlay">
                    <button className="add-to-cart" onClick={handleAddToCart}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
            <div className="product-info">
                <span className="product-category">{categoryName}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>

                {isLash && (
                    <div className="product-options">
                        <label htmlFor={`length-${product.id}`}>Largo:</label>
                        <select
                            id={`length-${product.id}`}
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="length-selector"
                        >
                            {lengths.map(len => (
                                <option key={len} value={len}>{len}</option>
                            ))}
                        </select>
                    </div>
                )}

                {isLiftingStep && (
                    <div className="product-options">
                        <label htmlFor={`step-${product.id}`}>Paso:</label>
                        <select
                            id={`step-${product.id}`}
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="length-selector"
                        >
                            {steps.map(step => (
                                <option key={step} value={step}>{step}</option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
        </div>
    );
};

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
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
