import React from 'react';
import Navbar from './Navbar';
import layoutStyles from './Webrior.module.css';
import styles from './ServicesPage.module.css';

const ServicesPage = () => {
    return (
        <div className={layoutStyles.layout}>
            <Navbar />
            <div className={styles.pageContainer}>
                <h1 className={styles.pageTitle}>Servicios & Proceso</h1>

                {/* Services Grid */}
                <section className={styles.services}>
                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>⚡</div>
                            <h3 className={styles.serviceTitle}>Landings Rápidas</h3>
                            <p className={styles.serviceDesc}>Velocidad extrema para retener a cada visitante. Optimizadas al milímetro.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>💎</div>
                            <h3 className={styles.serviceTitle}>Branding Moderno</h3>
                            <p className={styles.serviceDesc}>Identidad visual que impacta y eleva el valor percibido de tu marca.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>🎯</div>
                            <h3 className={styles.serviceTitle}>Optimización</h3>
                            <p className={styles.serviceDesc}>Estructuras diseñadas para guiar al usuario hacia la conversión.</p>
                        </div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className={styles.process}>
                    <h2 className={styles.sectionTitle}>Nuestro Camino</h2>
                    <div className={styles.timeline}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Primer contacto</h3>
                                <p>Iniciamos la conversación para entender tus necesidades básicas y objetivos.</p>
                            </div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Reunión de requerimientos</h3>
                                <p>Profundizamos en los detalles técnicos y funcionales para definir el alcance exacto.</p>
                            </div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Desarrollo</h3>
                                <p>Construimos tu solución con código limpio, eficiente y escalable.</p>
                            </div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepContent}>
                                <h3>Validación del cliente</h3>
                                <p>Te presentamos el avance para asegurar que todo se alinea con tu visión.</p>
                            </div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>5</div>
                            <div className={styles.stepContent}>
                                <h3>Correcciones finales</h3>
                                <p>Afinamos los últimos detalles basándonos en tu feedback para un resultado perfecto.</p>
                            </div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>6</div>
                            <div className={styles.stepContent}>
                                <h3>Despliegue</h3>
                                <p>Lanzamos tu proyecto al mundo, asegurando un funcionamiento óptimo desde el primer segundo.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServicesPage;
