import '../../sass/footer.scss'
import Logo from '../../assets/LOGOWhite.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_contain'>
                <img className='footer_contain_logo' src={Logo} alt='Logo du site'></img>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer