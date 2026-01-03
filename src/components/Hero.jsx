import React from 'react';
import heroImage from '../assets/hero_branded.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <div className="hero-text animate-fade-in">
                    <span className="subtitle">Estética & Bienestar</span>
                    <h1>Eleva tu Espacio</h1>
                    <p>Descubre nuestra colección exclusiva de insumos estéticos. Calidad premium y diseño minimalista para tu gabinete.</p>
                    <div className="hero-actions">
                        <a href="#shop" className="btn btn-primary">Ver Colección</a>
                        <a href="#about" className="btn btn-outline">Conocenos</a>
                    </div>
                </div>
                <div className="hero-image-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="image-overlay"></div>
                    <img src={heroImage} alt="Mavi Aesthetic Supplies" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
