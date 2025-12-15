import React, { useState } from 'react';
import styles from './ProcessSlideshow.module.css';

const ProcessSlideshow = ({ isOpen, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            number: "01",
            title: "Primer Contacto",
            subtitle: "El inicio de algo grande",
            description: "Todo comienza con una conversación. Nos ponemos en contacto contigo para entender tus necesidades básicas, objetivos de negocio y visión general del proyecto.",
            details: [
                "📧 Contacto inicial por email o formulario",
                "💬 Primera llamada de descubrimiento (15-30 min)",
                "🎯 Identificación de objetivos principales",
                "⏱️ Estimación preliminar de tiempos"
            ],
            icon: "🤝",
            color: "#1A90FF"
        },
        {
            number: "02",
            title: "Reunión de Requerimientos",
            subtitle: "Profundizando en los detalles",
            description: "Sesión detallada donde exploramos a fondo todos los aspectos técnicos, funcionales y de diseño. Aquí definimos el alcance exacto del proyecto.",
            details: [
                "📋 Análisis exhaustivo de funcionalidades",
                "🎨 Definición de identidad visual y branding",
                "🔧 Especificaciones técnicas y tecnologías",
                "📊 Establecimiento de KPIs y métricas de éxito",
                "💰 Propuesta económica detallada"
            ],
            icon: "📝",
            color: "#00E0A8"
        },
        {
            number: "03",
            title: "Desarrollo",
            subtitle: "Construyendo tu visión",
            description: "Nuestro equipo se pone manos a la obra. Código limpio, arquitectura escalable y las mejores prácticas de desarrollo para crear tu solución digital.",
            details: [
                "⚡ Desarrollo ágil con sprints semanales",
                "🏗️ Arquitectura modular y escalable",
                "🎯 Optimización de rendimiento desde el inicio",
                "🔒 Implementación de seguridad y buenas prácticas",
                "📱 Diseño responsive y cross-browser",
                "🔄 Actualizaciones de progreso regulares"
            ],
            icon: "💻",
            color: "#FF7A1A"
        },
        {
            number: "04",
            title: "Validación del Cliente",
            subtitle: "Tu feedback es clave",
            description: "Te presentamos el avance del proyecto en un entorno de pruebas. Es tu momento de revisar, probar y asegurarte de que todo se alinea con tu visión.",
            details: [
                "🎥 Presentación en vivo del progreso",
                "🔍 Revisión detallada de funcionalidades",
                "📝 Recopilación de feedback estructurado",
                "✅ Validación de requisitos cumplidos",
                "🎨 Ajustes de diseño y UX si es necesario"
            ],
            icon: "👁️",
            color: "#9D4EDD"
        },
        {
            number: "05",
            title: "Correcciones Finales",
            subtitle: "Perfeccionando cada detalle",
            description: "Basándonos en tu feedback, realizamos los ajustes finales. Pulimos cada detalle hasta alcanzar la perfección que tu proyecto merece.",
            details: [
                "🔧 Implementación de cambios solicitados",
                "🐛 Corrección de bugs y optimizaciones",
                "✨ Refinamiento de animaciones y transiciones",
                "📱 Testing exhaustivo en múltiples dispositivos",
                "⚡ Optimización final de rendimiento",
                "📊 Verificación de métricas de calidad"
            ],
            icon: "✨",
            color: "#F72585"
        },
        {
            number: "06",
            title: "Despliegue",
            subtitle: "Lanzamiento al mundo",
            description: "Es hora del gran momento. Desplegamos tu proyecto en producción, asegurando un funcionamiento óptimo desde el primer segundo.",
            details: [
                "🚀 Configuración de servidor y dominio",
                "🔒 Implementación de certificados SSL",
                "📊 Configuración de analytics y monitoreo",
                "⚡ Optimización de CDN y caché",
                "🎯 SEO técnico y meta tags",
                "📚 Documentación y guía de uso",
                "🛠️ Soporte post-lanzamiento incluido"
            ],
            icon: "🚀",
            color: "#06FFA5"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    if (!isOpen) return null;

    const slide = slides[currentSlide];

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>✕</button>

                <div className={styles.slideContainer}>
                    <div className={styles.slideContent} key={currentSlide}>
                        <div className={styles.slideHeader}>
                            <div className={styles.slideNumber} style={{ color: slide.color }}>
                                {slide.number}
                            </div>
                            <div className={styles.slideIcon} style={{
                                background: `linear-gradient(135deg, ${slide.color}20, ${slide.color}10)`,
                                boxShadow: `0 0 30px ${slide.color}40`
                            }}>
                                {slide.icon}
                            </div>
                        </div>

                        <h2 className={styles.slideTitle}>{slide.title}</h2>
                        <p className={styles.slideSubtitle} style={{ color: slide.color }}>
                            {slide.subtitle}
                        </p>

                        <p className={styles.slideDescription}>{slide.description}</p>

                        <div className={styles.slideDetails}>
                            {slide.details.map((detail, index) => (
                                <div
                                    key={index}
                                    className={styles.detailItem}
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        borderLeftColor: slide.color
                                    }}
                                >
                                    {detail}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className={styles.navigation}>
                    <button
                        className={styles.navButton}
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                    >
                        ← Anterior
                    </button>

                    <div className={styles.dots}>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                                onClick={() => goToSlide(index)}
                                style={index === currentSlide ? { background: slide.color } : {}}
                            />
                        ))}
                    </div>

                    <button
                        className={styles.navButton}
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                    >
                        Siguiente →
                    </button>
                </div>

                {/* Progress Bar */}
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{
                            width: `${((currentSlide + 1) / slides.length) * 100}%`,
                            background: slide.color
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProcessSlideshow;
