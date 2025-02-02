import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <ul>
            <li className="nav-item">
                <Link
                    to="/"
                    class={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    About me
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Portfolio"
                    class={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Contact"
                    class={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Resume"
                    class={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;