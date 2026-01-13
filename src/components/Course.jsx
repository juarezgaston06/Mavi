import React, { useEffect } from 'react';
import { ChevronLeft, GraduationCap, Clock, BookOpen, ShieldCheck, Award } from 'lucide-react';
import './Course.css';

const Course = ({ onBack }) => {
    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const syllabus = [
        {
            title: "MÓDULO 1 – INTRODUCCIÓN PROFESIONAL",
            items: [
                "Normas de Higiene y Bioseguridad",
                "1. Higiene Personal de la Profesional",
                "2. Higiene del Espacio de Trabajo",
                "3. Higiene y Esterilización de Herramientas",
                "4. Preparación del Cliente",
                "5. Prevención de Contaminación Cruzada",
                "6. Manejo de Adhesivos y Productos Químicos",
                "7. Bioseguridad y Responsabilidad Legal",
                "8. Importancia de la Bioseguridad en la Imagen Profesional"
            ]
        },
        {
            title: "MÓDULO 2 – ANATOMÍA DEL OJO Y CICLO DE LA PESTAÑA NATURAL",
            items: [
                "1. Estructura Básica del Ojo (Enfoque Estético)",
                "2. La Pestaña Natural",
                "3. Ciclo de Crecimiento de la Pestaña",
                "4. Importancia del Ciclo para la Lashista Profesional"
            ]
        },
        {
            title: "MÓDULO 3 – TIPOS DE EXTENSIONES DE PESTAÑAS",
            items: [
                "1. Tipos de Extensiones Según el Material",
                "2. Consideraciones Profesionales sobre el Material",
                "3. Curvaturas, Longitudes y Grosores"
            ]
        },
        {
            title: "MÓDULO 4 – ADHESIVOS (PEGAMENTOS)",
            items: [
                "1. Componentes Principales del Adhesivo",
                "2. Factores que Influyen en el Secado del Adhesivo",
                "3. Conservación Correcta del Adhesivo",
                "4. Importancia del Correcto Uso del Adhesivo"
            ]
        },
        {
            title: "MÓDULO 5 – TÉCNICAS DE APLICACIÓN",
            items: [
                "1. Técnica Clásica (1D)",
                "2. Volumen Tecnológico",
                "3. Mega Volumen",
                "4. Elección de la Técnica Correcta"
            ]
        },
        {
            title: "MÓDULO 6 – EFECTOS Y DISEÑOS",
            items: [
                "EFECTO NATURAL",
                "EFECTO MUÑECA (DOLL EYE)",
                "EFECTO ARDILLA (SQUIRREL)",
                "EFECTO KIM / WISPY",
                "MAPPING (MAPEO DE PESTAÑAS)"
            ]
        },
        {
            title: "MÓDULO 7 – CONTRAINDICACIONES Y SALUD OCULAR",
            items: [
                "CONTRAINDICACIONES ABSOLUTAS",
                "ANTE ARDOR, MOLESTIA O REACCIÓN DURANTE EL SERVICIO"
            ]
        }
    ];

    return (
        <div className="course-page">
            <header className="course-header">
                <div className="container">
                    <button className="back-link" onClick={onBack}>
                        <ChevronLeft size={20} /> Volver a la tienda
                    </button>
                    <div className="header-content">
                        <span className="subtitle">Formación de Excelencia</span>
                        <h1>Curso para Colocación de Pestañas</h1>
                        <p className="description">
                            Convertite en una profesional certificada con nuestra formación integral.
                            Aprendé las técnicas más avanzadas y comenzá tu propio camino en el mundo de la estética.
                        </p>
                    </div>
                </div>
            </header>

            <section className="course-features">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-card">
                            <GraduationCap className="icon" />
                            <h3>Certificación</h3>
                            <p>Recibí tu diploma oficial avalado por Mavi Studio.</p>
                        </div>
                        <div className="feature-card">
                            <Clock className="icon" />
                            <h3>Horarios Flexibles</h3>
                            <p>Formación intensiva diseñada para adaptarse a vos.</p>
                        </div>
                        <div className="feature-card">
                            <BookOpen className="icon" />
                            <h3>Kit Incluido</h3>
                            <p>Te proveemos de los mejores materiales para tus prácticas.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="course-syllabus">
                <div className="container">
                    <div className="section-title">
                        <h2>Programa de Estudio</h2>
                        <div className="divider"></div>
                    </div>

                    <div className="syllabus-grid">
                        {syllabus.map((module, idx) => (
                            <div key={idx} className="module-card">
                                <div className="module-header">
                                    <span className="module-number">0{idx + 1}</span>
                                    <h3>{module.title}</h3>
                                </div>
                                <ul className="module-items">
                                    {module.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="course-cta">
                <div className="container">
                    <div className="cta-box">
                        <h2>¿Lista para transformar tu carrera?</h2>
                        <p>Inscribite hoy y empezá a construir tu futuro profesional.</p>
                        <button className="btn btn-primary btn-large" onClick={() => {
                            const message = encodeURIComponent("Hola Mavi! 👋\n\nMe gustaría recibir más información sobre el Curso para Colocación de Pestañas.");
                            window.open(`https://wa.me/5493543636167?text=${message}`, '_blank');
                        }}>
                            Consultar Disponibilidad
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Course;
