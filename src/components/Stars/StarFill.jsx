import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function StarFill({ rate }) {
    const range = [1, 2, 3, 4, 5]

    return (
        <>
            {range.map((rangeElem, key) =>
                rate >= rangeElem 
                    ? <div className={'Housing_details_owner_stars_color_fill'} key={key}>
                        <FontAwesomeIcon icon={ faStar } />
                    </div>
                    : <div className={'Housing_details_owner_stars_color'} key={key}>
                        <FontAwesomeIcon icon={ faStar } />
                    </div>
            )}
        </>
    )
}