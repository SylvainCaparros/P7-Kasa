import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import '../../sass/dropdown.scss'

export default function Dropdown({ bar, description }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className='bar' onClick={() => setIsOpen(!isOpen)}>
                <div className='bar_title'>{ bar }</div>
                <div className={'bar_arrow' + ( isOpen ? '' : ' bar_arrow_down' )}>
                    <FontAwesomeIcon icon={ faAngleUp } />
                </div>
            </div>
            { isOpen 
                ? <div className='description'>
                    { Array.isArray(description)
                        ? description.map((e, key) => <div key={key}>{e}</div>)
                        : description
                    }
                  </div>
                : null
            }
        </div>
    )
}