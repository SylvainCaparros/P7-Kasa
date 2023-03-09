import Dropdown from '../components/Dropdown/Dropdown'
import Tag from '../components/Tag/Tag'
import Apts from '../datas/apts.json'
import Gallery from '../components/Gallery/Gallery'
import StarFill from '../components/Stars/StarFill'
import Footer from '../components/Footer/Footer'
import '../sass/housing.scss'



export default function Housing() {
    let url = document.location.href
    let idurl = new URL(url)
    let id = idurl.pathname.replace('/housing/', '')
    const aptFound = Apts.find(e => e.id === id)

    return (
      <>
        <main className="Housing">
          <Gallery pictures={aptFound.pictures} />
          <div className='Housing_details'>
            <div className='Housing_details_location'>
              <h1 className='Housing_details_location_title'>{aptFound.title}</h1>
              <h2 className='Housing_details_location_town'>{aptFound.location}</h2>
              <div className='Housing_details_location_tags'>
                {aptFound.tags.map((tag, key) => {
                  return <Tag content={tag} key={key} />
                })}
              </div>  
            </div>
            <div className='Housing_details_owner'>
              <div className='Housing_details_owner_profile'>
                <p className='Housing_details_owner_profile_name'>{aptFound.host.name}</p>
                <img className='Housing_details_owner_profile_img' src={aptFound.host.picture} alt='propriétaire'></img>
              </div>
              <div className='Housing_details_owner_stars'>
                <StarFill rate={aptFound.rating} />
              </div>
            </div>
          </div>
          <div className='Housing_dropdown'>
            <div className='Housing_dropdown_col'>
              <Dropdown bar='Description' description={aptFound.description} />
            </div>
            <div className='Housing_dropdown_col'>
              <Dropdown bar='Equipements' description={aptFound.equipments} />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }