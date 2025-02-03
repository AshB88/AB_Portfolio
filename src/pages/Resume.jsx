import '../styles/Resume.css';
import React from 'react';
import resumePDF from'../assets/Resume.pdf';
import { TbFileDownload } from "react-icons/tb";


function Resume() {
    return (
        <div className="resume">
            <h1>Resume</h1>  
            <a href={resumePDF} download="Resume.pdf">Download PDF <TbFileDownload /></a>         
            <div className="columns">
                
                <div id="summary">
                    <h2>Summary</h2>
                    <p>Aspiring full-stack developer with a strong foundation in web development and a background in management, customer service, and team leadership. Passionate about problem-solving, efficient system design, and user-friendly applications. Currently completing a full-stack software development bootcamp and eager to leverage technical skills and leadership experience to transition into the tech industry.</p>
                </div>
                <section id="education">
                    <h2>Education</h2>
                    <div className="info">
                        <h3>North Point Hight School:</h3>
                        <p>2500 Davis Rd. Waldorf, MD 20603</p>
                        <p>High School Diploma</p>
                        <h3>Rutgers Coding Bootcamp:</h3>
                        <p>Full Stack Web Development Program</p>
                    </div>
                </section>
                <section id="skills">
                    <h2>Skills</h2>
                    <div className="info">
                        <h3>Front End:</h3>
                        <p>HTML, CSS, JavaScript, React</p>
                        <h3>Back End:</h3>
                        <p>Node.js, Express.js, SQL</p>
                        <h3>Databases:</h3>
                        <p>PostgreSQL</p>
                    </div>
                </section>
                <section id="experience">
                    <h2>Experience</h2>
                    <div className="info">         
                        <h3>Full Stack Web Developmet Program:</h3>
                        <p>In this program I have gained hands-on experience in full-stack development through real-world projects and agile team collaboration.</p>
                        <ul>
                            <li>Developed websites using React, Node.js, and Express.js.</li>
                            <li>Implemented RESTful APIs and integrated third-party services.</li>
                            <li>Collaborated with a team of developers using Git and GitHub for version control.</li>
                            <li>Utilized Agile methodologies to manage project timelines and deliverables.</li>
                            <li>Designed and optimized database schemas using PostgreSQL.</li>
                        </ul>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default Resume;