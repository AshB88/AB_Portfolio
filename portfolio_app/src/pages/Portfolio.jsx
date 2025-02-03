//import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';

const Portfolio = () => {
    return (
        <div className="container">
            <h1>Portfolio</h1>
            <section>
                <div className="card" id="project1">
                    <Project
                        title="Project 1"
                        link="https://ashb88.github.io/Better-Reads/"
                        gitHubLink="https://github.com/AshB88/Better-Reads"
                    />
                </div>
                <div className="card" id="project2">
                    <Project 
                        title="Coming Soon"
                        link="#"
                        gitHubLink="#"
                    />
                </div>
                <div className="card" id="project3">
                    <Project 
                        title="Coming Soon"
                        link="#"
                        gitHubLink="#"
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