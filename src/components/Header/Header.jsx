import '../../sass/Header.scss'
import { Link, Outlet } from "react-router-dom";
import Logo from '../../assets/LOGO.png'

function Header() {
    return (
        <div className='main'>
            <header className='header'>
                <img className='logo' src={Logo} alt='Logo du site'></img>
                <nav className='nav'>
                    <ul className='nav_list'>
                        <li>
                            <Link to="/" className='nav_list_link'>Accueil</Link>
                        </li>
                        <li>
                            <Link to="/About" className='nav_list_link'>A Propos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}

export default Header