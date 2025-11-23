import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Webrior.module.css';

const Navbar = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isActive = (path) => location.pathname === path;

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>
                Web<span>rior</span>
            </Link>

            {/* Desktop Navigation */}
            <div className={styles.navLinks}>
                <Link
                    to="/"
                    className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''}`}
                >
                    Home
                </Link>
                <Link
                    to="/services"
                    className={`${styles.navLink} ${isActive('/services') ? styles.activeLink : ''}`}
                >
                    Servicios
                </Link>
                <Link
                    to="/projects"
                    className={`${styles.navLink} ${isActive('/projects') ? styles.activeLink : ''}`}
                >
                    Proyectos
                </Link>
            </div>

            <Link to="/contact" className={styles.ctaButton}>
                Contactar
            </Link>

            {/* Mobile Hamburger Button */}
            <button
                className={styles.hamburger}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                <span className={mobileMenuOpen ? styles.hamburgerOpen : ''}></span>
                <span className={mobileMenuOpen ? styles.hamburgerOpen : ''}></span>
                <span className={mobileMenuOpen ? styles.hamburgerOpen : ''}></span>
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link
                        to="/"
                        className={`${styles.mobileNavLink} ${isActive('/') ? styles.activeLink : ''}`}
                        onClick={closeMobileMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="/services"
                        className={`${styles.mobileNavLink} ${isActive('/services') ? styles.activeLink : ''}`}
                        onClick={closeMobileMenu}
                    >
                        Servicios
                    </Link>
                    <Link
                        to="/projects"
                        className={`${styles.mobileNavLink} ${isActive('/projects') ? styles.activeLink : ''}`}
                        onClick={closeMobileMenu}
                    >
                        Proyectos
                    </Link>
                    <Link
                        to="/contact"
                        className={styles.mobileCtaButton}
                        onClick={closeMobileMenu}
                    >
                        Contactar
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
