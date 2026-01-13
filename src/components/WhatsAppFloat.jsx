import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
    const phoneNumber = "5493543636167";
    const message = encodeURIComponent("Hola Mavi! 👋 Tengo una consulta.");

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            className="whatsapp-float"
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="tooltip">¿Necesitás ayuda?</span>
        </a>
    );
};

export default WhatsAppFloat;
