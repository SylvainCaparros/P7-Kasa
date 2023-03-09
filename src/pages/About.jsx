import Banner from '../components/Banner/Banner'
import ImgAbout from '../assets/AboutBanner.png'
import Dropdown from '../components/Dropdown/Dropdown'
import Footer from '../components/Footer/Footer'
import '../sass/about.scss'

export default function About(props) {
    return (
      <>
        <main className="About">
          <Banner background={ImgAbout} />
          <div className='About_dropdown'>
            <div className='About_dropdown_form'>
              <Dropdown bar='Fiabilité' description='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.' />
            </div>
            <div className='About_dropdown_form'>
              <Dropdown bar='Respect' description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
            </div>
            <div className='About_dropdown_form'>
              <Dropdown bar='Service' description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
            </div>
            <div className='About_dropdown_form'>
              <Dropdown bar='Responsabilité' description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>          
          </div>
        </main>
        <Footer />
      </>
    );
  }