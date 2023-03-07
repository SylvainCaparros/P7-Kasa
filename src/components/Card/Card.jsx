import { Link } from 'react-router-dom';
import '../../sass/card.scss'

export default function Card({ title, id, cover }) {
    return (
        <Link to={'housing/' + id} className='card'>
            <img src={ cover } alt="Appartement" className="card_img"></img>
            <div className='card_title'>{ title }</div>
        </Link>
    )
}