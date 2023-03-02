import './Header.css'
import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/About">A Propos</Link>
                    </li>
                </ul>
            </nav>
            
            <Outlet />
        </header>
    )
}

export default Header