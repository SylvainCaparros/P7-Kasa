import Dropdown from '../components/Dropdown/Dropdown'
import Apts from '../datas/apts.json'
import '../sass/Housing.scss'

let url = document.location.href
let idurl = new URL(url)
let id = idurl.pathname.replace('/housing/', '')
const aptFound = Apts.find(e => e.id === id)

export default function Housing() {
    return (
      <main className="Housing">
        <div className='Housing_col'>
          <Dropdown bar='Equipements' description={aptFound.equipments} />
        </div>
        <div className='Housing_col'>
          <Dropdown bar='Equipements' description={aptFound.equipments} />
        </div>
      </main>
    );
  }