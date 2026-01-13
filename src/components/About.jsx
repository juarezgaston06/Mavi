import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container about-grid">
                <div className="about-image-container animate-fade-in">
                    <div className="about-image-card">
                        <div className="about-image-overlay"></div>
                        <img
                            src="/products/lifting/paso 123.jpeg"
                            alt="Mavi Studio"
                            className="about-image"
                        />
                    </div>
                    <div className="experience-badge">
                        <span className="years">5+</span>
                        <span className="exp-text">Años de Calidad</span>
                    </div>
                </div>

                <div className="about-text animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <span className="subtitle">Nuestra Historia</span>
                    <h2>Pasión por la Estética Profesional</h2>
                    <p>
                        En <strong>Mavi</strong>, entendemos que cada detalle cuenta. Nacimos con la misión de proveer a las lashistas y profesionales del sector los insumos de la más alta calidad, seleccionados cuidadosamente para garantizar resultados excepcionales en cada aplicación.
                    </p>
                    <p>
                        Nuestra filosofía se basa en el minimalismo, la precisión y el compromiso con la excelencia. No solo vendemos productos, acompañamos el crecimiento de tu estudio con asesoramiento y las últimas tendencias del mercado mundial.
                    </p>

                    <div className="values-list">
                        <div className="value-item">
                            <span className="value-dot"></span>
                            <div>
                                <h4>Calidad Premium</h4>
                                <p>Productos testeados bajo los más altos estándares.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
