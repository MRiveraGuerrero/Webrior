import React from 'react';
import Navbar from './Navbar';
import layoutStyles from './Webrior.module.css';
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
    const projects = [
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
        },
        // === LANDINGS ===
        {
            id: 'northpoint',
            title: 'North Point Studios',
            category: 'Tattoo Studio',
            image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1974&auto=format&fit=crop',
            url: 'https://www.mikelrivera.com/landings/north-point-studios-ink',
            accent: '#dc2626'
        },
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
