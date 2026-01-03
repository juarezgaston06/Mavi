import React from 'react';
import './Map.css';

const Map = () => {
    return (
        <section className="map-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Ubicación</span>
                    <h2>Dónde Encontrarnos</h2>
                    <p className="address-text">Saavedra 226, X5111, Córdoba, Argentina</p>
                </div>
                <div className="map-wrapper animate-fade-in">
                    <iframe
                        src="https://maps.google.com/maps?q=Saavedra%20226,%20X5111,%20C%C3%B3rdoba,%20Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de Mavi"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Map;
