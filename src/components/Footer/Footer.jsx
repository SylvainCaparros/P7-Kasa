import '../../sass/Footer.scss'
import Logo from '../../assets/LOGO.png'

function Footer() {
    return (
        <footer>
            <img className='logo' src={Logo} alt='Logo du site'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer