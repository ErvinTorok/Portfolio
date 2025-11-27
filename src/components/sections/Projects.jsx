import React from 'react';
import ProjectCard from '../common/ProjectCard';
import projectsData from '../../data/projects';
import '../../assets/styles/components/sections/projects.css';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            demoLink={project.demoLink}
                            codeLink={project.codeLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;