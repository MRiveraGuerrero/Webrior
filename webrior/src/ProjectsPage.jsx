import React from 'react';
import Navbar from './Navbar';
import layoutStyles from './Webrior.module.css';
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
    const projects = [
        // === LANDINGS ===
        {
            id: 'northpoint',
            title: 'North Point Studios',
            category: 'Tattoo Studio',
            image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1974&auto=format&fit=crop',
            url: '/landings/north-point-studios-ink',
            accent: '#dc2626'
        },
        {
            id: 'webrior',
            title: 'Webrior',
            category: 'Digital Agency',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
            url: '/landings/webrior',
            accent: '#00ff88'
        },
        {
            id: 'neon-cyber',
            title: 'Neon Cyber Store',
            category: 'E-commerce',
            image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop',
            url: '#',
            accent: '#00f3ff'
        },
        {
            id: 'arch-minimal',
            title: 'Arch Minimal',
            category: 'Architecture',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
            url: '#',
            accent: '#ffffff'
        },

        // === PROYECTOS REALES ===
        {
            id: 'sientame',
            title: 'Siéntame',
            category: 'SaaS · Reservas',
            image: '/assets/projects/sientame.png',
            url: 'https://sientame.com',
            accent: '#3a5df2'
        },
        {
            id: 'survival',
            title: 'Survival Vacation 2',
            category: 'Videojuego Web',
            image: '/assets/projects/survivalvacation2.png',
            url: 'https://survivalvacation2.com',
            accent: '#f57c00'
        },
        {
            id: 'bisky',
            title: 'BiSKY Team',
            category: 'Cohetería UPV/EHU',
            image: '/assets/projects/bisky.png',
            url: 'https://biskyteam.com',
            accent: '#ffffff'
        }
    ];

    return (
        <div className={layoutStyles.layout}>
            <Navbar />

            <div className={styles.pageContainer}>
                <h1 className={styles.pageTitle}>Nuestros Proyectos</h1>

                <div className={styles.portfolioGrid}>
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.portfolioCard}
                        >
                            <div
                                className={styles.portfolioImage}
                                style={{ backgroundImage: `url(${project.image})` }}
                            />

                            <div className={styles.portfolioInfo}>
                                <h3 className={styles.portfolioTitle}>{project.title}</h3>
                                <span
                                    className={styles.portfolioTags}
                                    style={{ color: project.accent }}
                                >
                                    {project.category}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
