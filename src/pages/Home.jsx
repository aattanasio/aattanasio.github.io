import React from 'react'

const Home = () => {
    return (
        <div className="page-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Asja Attanasio</span>
                    </h1>
                    <p className="hero-subtitle">Software Engineer | Developer | Problem Solver</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Education</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Master's in Computer Science Engineering</h3>
                                <span className="institution">Polytechnic University of Milan</span>
                                <span className="period">2023 - 2025</span>
                                <p>Completed a mixed academic track with a focus on practical software development and AI-related methodologies.</p>
                                <ul className="achievements">
                                    <li>Grading: 107/110</li>
                                    <li>Thesis: A Computational Framework to Study Online Conspiracy Theories on Reddit After Epstein’s Death</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Bachelor's in Computer Engineering</h3>
                                <span className="institution">University of Pisa</span>
                                <span className="period">2019 - 2023</span>
                                <p>Foundation in computer science, algorithms, and software development.</p>
                                <ul className="achievements">
                                    <li>Grading: 104/110</li>
                                    <li>Thesis: Analysis of the Effects of Quarantine on Users of the Subreddit The_Donald</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">School-to-Work Program</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Full Stack Developer</h3>
                                <span className="institution">IDS GeoRadar s.r.l.</span>
                                <span className="period">2020 - 2022</span>
                                <p>
                                    Built and maintained full-stack applications using MERN stack.
                                    Collaborated with designers and product managers to deliver features.
                                </p>
                                <ul className="achievements">
                                    <li>Developed 10+ client projects</li>
                                    <li>Increased user engagement by 60%</li>
                                    <li>Optimized database queries</li>
                                    <li>Implemented real-time features with WebSockets</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Junior Developer</h3>
                                <span className="institution">Digital Agency</span>
                                <span className="period">2019 - 2020</span>
                                <p>
                                    Contributed to various web development projects. Learned modern development
                                    practices and worked in an agile environment.
                                </p>
                                <ul className="achievements">
                                    <li>Completed 20+ tickets per sprint</li>
                                    <li>Learned React and Node.js</li>
                                    <li>Improved testing coverage to 80%</li>
                                    <li>Participated in code reviews</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
