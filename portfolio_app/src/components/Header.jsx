import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <h1>Ashleigh Brown</h1>
            <nav>
                <ul className="nav">
                    <li className="nav-item"><Link to="/">About Me</Link></li>
                    <li className="nav-item"><Link to="/Portfolio">Portfolio</Link></li>
                    <li className="nav-item"><Link to="/Resume">Resume</Link></li>                    
                    <li className="nav-item"><Link to ="/Contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;