import React from 'react';
import Navbar from './Navbar';
import styles from './ContactPage.module.css';

export default function ContactPage() {
    return (
        <div className={styles.layout}>
            <Navbar />

            <div className={styles.pageContainer}>
                <h1 className={styles.pageTitle}>Inicia tu Misión</h1>
                <p className={styles.pageSubtitle}>
                    Cuéntanos sobre tu proyecto. Estamos listos para construir algo extraordinario contigo.
                </p>

                <form
                    className={styles.form}
                    action="https://formsubmit.co/mikelrg2003@gmail.com"
                    method="POST"
                >
                    {/* Configuración para FormSubmit */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="Nuevo mensaje de contacto - Webrior" />
                    <input type="hidden" name="_template" value="table" />

                    <div>
                        <label className={styles.label}>Nombre</label>
                        <input
                            type="text"
                            name="name"
                            className={styles.input}
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    <div>
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            className={styles.input}
                            placeholder="tu@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label className={styles.label}>Teléfono</label>
                        <input
                            type="tel"
                            name="phone"
                            className={styles.input}
                            placeholder="+34 600 000 000"
                        />
                    </div>

                    <div>
                        <label className={styles.label}>Mensaje</label>
                        <textarea
                            rows="5"
                            name="message"
                            className={styles.textarea}
                            placeholder="Detalles del proyecto..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className={styles.button}>
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}
