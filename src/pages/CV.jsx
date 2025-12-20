import React from 'react'

const CV = () => {
    return (
        <div className="page-container">
            <section className="section">
                <div className="container cv-container">
                    <div className="cv-header">
                        <h1 className="page-title">Curriculum Vitae</h1>
                        <button className="btn btn-primary">Download PDF</button>
                    </div>

                    <div className="cv-section">
                        <h2>Personal Information</h2>
                        <div className="cv-content">
                            <p><strong>Name:</strong> Your Full Name</p>
                            <p><strong>Location:</strong> Milan, Italy</p>
                            <p><strong>Email:</strong> your.email@example.com</p>
                            <p><strong>Phone:</strong> +39 123 456 7890</p>
                            <p><strong>LinkedIn:</strong> linkedin.com/in/yourprofile</p>
                            <p><strong>GitHub:</strong> github.com/yourusername</p>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h2>Professional Summary</h2>
                        <div className="cv-content">
                            <p>
                                Experienced Full Stack Developer with 5+ years of expertise in building scalable
                                web applications. Proficient in React, Node.js, and modern web technologies.
                                Strong problem-solving skills and a passion for creating user-centric solutions.
                                Proven track record of leading development teams and delivering high-quality projects.
                            </p>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h2>Work Experience</h2>
                        <div className="cv-item">
                            <div className="cv-item-header">
                                <h3>Senior Frontend Developer</h3>
                                <span className="cv-period">2022 - Present</span>
                            </div>
                            <p className="cv-company">Tech Company Inc. | Milan, Italy</p>
                            <ul className="cv-list">
                                <li>Led development of responsive web applications using React and TypeScript</li>
                                <li>Mentored team of 5 junior developers, improving code quality by 40%</li>
                                <li>Implemented CI/CD pipeline, reducing deployment time by 60%</li>
                                <li>Architected scalable component library used across 10+ projects</li>
                                <li>Optimized application performance, achieving 95+ Lighthouse scores</li>
                            </ul>
                        </div>

                        <div className="cv-item">
                            <div className="cv-item-header">
                                <h3>Full Stack Developer</h3>
                                <span className="cv-period">2020 - 2022</span>
                            </div>
                            <p className="cv-company">StartUp Co. | Remote</p>
                            <ul className="cv-list">
                                <li>Developed 10+ client projects using MERN stack</li>
                                <li>Increased user engagement by 60% through UX improvements</li>
                                <li>Implemented real-time features with WebSockets</li>
                                <li>Optimized database queries, reducing response time by 50%</li>
                                <li>Collaborated with cross-functional teams in agile environment</li>
                            </ul>
                        </div>

                        <div className="cv-item">
                            <div className="cv-item-header">
                                <h3>Junior Developer</h3>
                                <span className="cv-period">2019 - 2020</span>
                            </div>
                            <p className="cv-company">Digital Agency | Milan, Italy</p>
                            <ul className="cv-list">
                                <li>Contributed to various web development projects</li>
                                <li>Learned React, Node.js, and modern development practices</li>
                                <li>Improved testing coverage from 20% to 80%</li>
                                <li>Participated in code reviews and pair programming</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h2>Education</h2>
                        <div className="cv-item">
                            <div className="cv-item-header">
                                <h3>Master's in Computer Science</h3>
                                <span className="cv-period">2020 - 2022</span>
                            </div>
                            <p className="cv-company">University of Technology | Milan, Italy</p>
                            <ul className="cv-list">
                                <li>Specialized in Software Engineering and AI</li>
                                <li>GPA: 3.9/4.0 - Graduated with honors</li>
                                <li>Thesis: Machine Learning in Web Applications</li>
                                <li>Dean's List all semesters</li>
                            </ul>
                        </div>

                        <div className="cv-item">
                            <div className="cv-item-header">
                                <h3>Bachelor's in Software Engineering</h3>
                                <span className="cv-period">2016 - 2020</span>
                            </div>
                            <p className="cv-company">Tech University | Milan, Italy</p>
                            <ul className="cv-list">
                                <li>GPA: 3.7/4.0</li>
                                <li>Member of Computer Science Society</li>
                                <li>Hackathon Winner 2019</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h2>Technical Skills</h2>
                        <div className="cv-skills-grid">
                            <div>
                                <h4>Frontend</h4>
                                <p>React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Redux, Next.js</p>
                            </div>
                            <div>
                                <h4>Backend</h4>
                                <p>Node.js, Express, Python, Django, PostgreSQL, MongoDB, REST APIs, GraphQL</p>
                            </div>
                            <div>
                                <h4>Tools & DevOps</h4>
                                <p>Git, Docker, AWS, CI/CD, Jenkins, Kubernetes, Linux, Nginx</p>
                            </div>
                            <div>
                                <h4>Other</h4>
                                <p>Agile/Scrum, Testing (Jest, Cypress), SEO, Performance Optimization</p>
                            </div>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h2>Certifications</h2>
                        <ul className="cv-list">
                            <li>AWS Certified Solutions Architect - Amazon Web Services (2023)</li>
                            <li>React Advanced Certification - Meta (2022)</li>
                            <li>Full Stack Web Development - freeCodeCamp (2021)</li>
                        </ul>
                    </div>

                    <div className="cv-section">
                        <h2>Languages</h2>
                        <ul className="cv-list">
                            <li>Italian - Native</li>
                            <li>English - Fluent (C1)</li>
                            <li>Spanish - Intermediate (B1)</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CV
