import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import logo from '../assets/logo_mavi.jpg';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 2rem',
            borderTop: '1px solid #f0f0f0',
            textAlign: 'center',
            marginTop: 'auto',
            backgroundColor: 'var(--color-bg)'
        }}>
            <img src={logo} alt="Mavi" style={{
                height: '80px',
                width: 'auto',
                borderRadius: '50%',
                marginBottom: '2rem'
            }} />

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2.5rem',
                marginBottom: '2.5rem'
            }}>
                <a
                    href="https://www.instagram.com/mavi.beautystudio.ok?igsh=OTF2bHk2YmM0OXQx"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--color-black)', transition: 'color 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-old-rose)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-black)'}
                >
                    <Instagram size={28} strokeWidth={1.5} />
                </a>

                <a
                    href="https://wa.me/5493543636167"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--color-black)', transition: 'color 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-old-rose)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-black)'}
                >
                    <MessageCircle size={28} strokeWidth={1.5} />
                </a>

                <div
                    style={{ color: 'var(--color-black)', cursor: 'default' }}
                >
                    <Mail size={28} strokeWidth={1.5} />
                </div>
            </div>

            <p style={{ color: '#999', fontSize: '0.8rem' }}>
                © {new Date().getFullYear()} Mavi Insumos Estéticos. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
