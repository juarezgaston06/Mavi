import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        // Fallback behavior: Mailto
        const subject = encodeURIComponent(`Consulta desde la web Mavi - ${data.name}`);
        const body = encodeURIComponent(`Nombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`);
        window.location.href = `mailto:mavibeauty25@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Contacto</span>
                    <h2>Estamos para Ayudarte</h2>
                </div>

                <div className="contact-grid">
                    <div className="contact-info animate-fade-in">
                        <div className="info-card">
                            <h3>Información de Contacto</h3>
                            <p>¿Tienes alguna duda sobre nuestros productos o envíos? Escríbenos.</p>

                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>mavibeauty25@gmail.com</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <a href="https://wa.me/5493543636167" target="_blank" rel="noreferrer" className="contact-link-item">
                                        <div className="info-icon">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <h4>WhatsApp</h4>
                                            <p>+54 9 3543 63-6167</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="info-item">
                                    <a href="https://www.instagram.com/mavi.beautystudio.ok?igsh=OTF2bHk2YmM0OXQx" target="_blank" rel="noreferrer" className="contact-link-item">
                                        <div className="info-icon">
                                            <Instagram size={20} />
                                        </div>
                                        <div>
                                            <h4>Instagram</h4>
                                            <p>@mavi.beautystudio.ok</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nombre Completo</label>
                                <input type="text" name="name" placeholder="Tu nombre..." required />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="tuemail@ejemplo.com" required />
                            </div>

                            <div className="form-group">
                                <label>Mensaje</label>
                                <textarea name="message" rows="5" placeholder="¿En qué podemos ayudarte?" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
