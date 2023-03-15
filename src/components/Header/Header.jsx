import '../../sass/header.scss'
import { Link, Outlet } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'

function Header() {
    const location = useLocation()
    const { pathname } = location
    const splitLocation = pathname.split("/")

    return (
        <div className='main'>
            <header className='header'>
                <img className='logo' src={Logo} alt='Logo du site'></img>
                <ul className='nav_list'>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to="/" className='nav_list_link'>Accueil</Link>
                    </li>
                    <li className={splitLocation[1] === "About" ? "active" : ""}>
                        <Link to="/About" className='nav_list_link'>A Propos</Link>
                    </li>
                </ul>
            </header>
            <Outlet />
        </div>
    )
}

export default Header