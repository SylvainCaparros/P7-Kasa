import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function StarFill({ rate }) {
    const [isFill, setIsFill] = useState(true)
    const range = [1, 2, 3, 4, 5]
    const Fill = rate < range[0] ? setIsFill(!isFill) : null

    return (
        <div className={'Housing_details_owner_stars_color' + ( isFill ? '_fill' : '' )}>
            <FontAwesomeIcon icon={ faStar } />
        </div>
    )
}