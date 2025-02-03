import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';

const Portfolio = () => {
    return (
        <div className="container">
            <h1>Portfolio</h1>
            <section>
                <div className="card" id="project1">
                    <Project
                        title="Portfolio"
                        link="https://abportfolio888.netlify.app/Portfolio"
                        gitHubLink="https://github.com/AshB88/AB_Portfolio"
                    />
                </div>
                <div className="card" id="project2">
                    <Project 
                        title="Better Reads"
                        link="https://ashb88.github.io/Better-Reads/"
                        gitHubLink="https://github.com/AshB88/Better-Reads"
                    />
                </div>
                <div className="card" id="project3">
                    <Project 
                        title="Study Guide"
                        link="https://ashb88.github.io/prework-study-guide/"
                        gitHubLink="https://github.com/AshB88/prework-study-guide"
                    />
                </div>
                <div className="card" id="project4">
                    <Project 
                        title="Coming Soon"
                        link="#"
                        gitHubLink="#"
                    />
                </div>
                <div className="card" id="project5">
                    <Project 
                        title="Coming Soon"
                        link="#"
                        gitHubLink="#"
                    />
                </div>
                <div className="card" id="project6">
                    <Project 
                        title="Coming Soon"
                        link="#"
                        gitHubLink="#"
                    />
                </div>
            </section>
        </div>
    )
}

export default Portfolio;