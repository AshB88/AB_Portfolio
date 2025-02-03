import '../styles/Resume.css';

function Resume() {
    return (
        <div className="resume">
            <h1>Resume</h1>
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
                        <h3>Full Stack Web Developer</h3>
                        <p>Rutgers Coding Bootcamp</p>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default Resume;