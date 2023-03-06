import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Img from '../assets/HomeBanner.png'
import '../sass/Home.scss'

export default function Home() {
  return (
    <div>
      <main>
          <Banner background={Img} content='Chez vous, partout et ailleurs'/>
      </main>
      <Footer />
    </div>
  );
}