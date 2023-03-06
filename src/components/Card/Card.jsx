import '../../sass/card.scss'

export default function Card({ title }) {
    return (
        <div className='card'>
            <p className='card_title'>{ title }</p>
        </div>
    )
}