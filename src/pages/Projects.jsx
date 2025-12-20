import React from 'react'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
            github: 'https://github.com/yourusername/project1',
            demo: 'https://project1-demo.com'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Real-time collaborative task manager with drag-and-drop functionality. Built with React and Firebase for instant synchronization.',
            technologies: ['React', 'Firebase', 'Material-UI', 'React DnD'],
            github: 'https://github.com/yourusername/project2',
            demo: 'https://project2-demo.com'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Beautiful weather application with location-based forecasts, interactive maps, and smooth animations. Integrates multiple weather APIs.',
            technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
            github: 'https://github.com/yourusername/project3',
            demo: 'https://project3-demo.com'
        },
        {
            id: 4,
            title: 'Social Media Analytics',
            description: 'Dashboard for tracking social media metrics across multiple platforms. Features real-time data visualization and custom reports.',
            technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
            github: 'https://github.com/yourusername/project4',
            demo: 'https://project4-demo.com'
        },
        {
            id: 5,
            title: 'AI Chat Application',
            description: 'Intelligent chatbot application using natural language processing. Includes conversation history and personalized responses.',
            technologies: ['React', 'Python', 'TensorFlow', 'WebSockets'],
            github: 'https://github.com/yourusername/project5',
            demo: 'https://project5-demo.com'
        },
        {
            id: 6,
            title: 'Portfolio Builder',
            description: 'No-code tool for creating professional portfolios. Drag-and-drop interface with multiple templates and hosting options.',
            technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
            github: 'https://github.com/yourusername/project6',
            demo: 'https://project6-demo.com'
        }
    ]

    return (
        <div className="page-container">
            <section className="section">
                <div className="container">
                    <h1 className="page-title">My Projects</h1>
                    <p className="page-subtitle">
                        A collection of projects I've built to solve real-world problems
                    </p>

                    <div className="projects-grid">
                        {projects.map(project => (
                            <div key={project.id} className="project-card">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-small"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-small btn-primary"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
