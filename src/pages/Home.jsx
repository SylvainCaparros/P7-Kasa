import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import '../sass/Home.scss'

export default function Home(props) {
  return (
    <div>
      <main>
          <Banner />
      </main>
      <Footer />
    </div>
  );
}