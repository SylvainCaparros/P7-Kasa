import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Img from '../assets/HomeBanner.png'
import Card from '../components/Card/Card';
import Apts from '../datas/apts.json'
import '../sass/Home.scss'


export default function Home() {
  return (
    <>
      <main className='containerHome'>
          <Banner background={Img} content='Chez vous, partout et ailleurs'/>
          <section className='sectionHome'>
            {Apts.map((apt, key) => {
              return <Card title={apt.title} key={key} id={apt.id} cover={apt.cover} />
            })}
          </section>
      </main>
      <Footer />
    </>
  );
}