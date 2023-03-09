import Dropdown from '../components/Dropdown/Dropdown'
import Tag from '../components/Tag/Tag'
import Apts from '../datas/apts.json'
import Gallery from '../components/Gallery/Gallery'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../sass/Housing.scss'



export default function Housing() {
    let url = document.location.href
    let idurl = new URL(url)
    let id = idurl.pathname.replace('/housing/', '')
    const aptFound = Apts.find(e => e.id === id)

    const tag1 = aptFound.tags[0];
    const tag2 = aptFound.tags[1];
    const tag3 = aptFound.tags[2];
    const tag4 = aptFound.tags[3];
    const tag5 = aptFound.tags[4];

    const [isFill, setIsFill] = useState(false)

    return (
      <main className="Housing">
        <Gallery pictures={aptFound.pictures} />
        <div className='Housing_details'>
          <div className='Housing_details_location'>
            <h1 className='Housing_details_location_title'>{aptFound.title}</h1>
            <h2 className='Housing_details_location_town'>{aptFound.location}</h2>
            <div className='Housing_details_location_tags'>
              {tag1
                ? <Tag content={aptFound.tags[0]}/>
                : null
              }
              {tag2
                ? <Tag content={aptFound.tags[1]}/>
                : null
              }
              {tag3
                ? <Tag content={aptFound.tags[2]}/>
                : null
              }
              {tag4
                ? <Tag content={aptFound.tags[3]}/>
                : null
              }
              {tag5
                ? <Tag content={aptFound.tags[4]}/>
                : null
              }
            </div>  
          </div>
          <div className='Housing_details_owner'>
            <div className='Housing_details_owner_profile'>
              <p className='Housing_details_owner_profile_name'>{aptFound.host.name}</p>
              <img className='Housing_details_owner_profile_img' src={aptFound.host.picture} alt='propriétaire'></img>
            </div>
            <div className='Housing_details_owner_stars'>
              <div className={'Housing_details_owner_stars_color' + ( isFill ? '_fill' : '' )}>
                <FontAwesomeIcon icon={ faStar } />
              </div>
              <div>
                <FontAwesomeIcon icon={ faStar } />
              </div>
              <div>
                <FontAwesomeIcon icon={ faStar } />
              </div>
              <div>
                <FontAwesomeIcon icon={ faStar } />
              </div>
              <div>
                <FontAwesomeIcon icon={ faStar } />
              </div>
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
    );
  }