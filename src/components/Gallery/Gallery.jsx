import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import '../../sass/gallery.scss'

export default function Gallery(props) {
    const [index, setIndex] = useState(0)
    const length = props.pictures.length

    const handlePrevious = () => {
        const newIndex = index - 1
        setIndex(newIndex < 0 ? length - 1 : newIndex)
    }
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    }

    return (
        <div className='Gallery'>
            <div className='Gallery_arrow'>
                <img className='Gallery_arrow_img' src={props.pictures[index]} alt='appartement'/>
                { length > 1 && (
                        <>
                            <div className='Gallery_arrow_left' onClick={handlePrevious}>
                                <FontAwesomeIcon icon={ faAngleUp } className='Gallery_arrow_form' />
                            </div>
                            <div className='Gallery_arrow_right' onClick={handleNext}>
                                <FontAwesomeIcon icon={ faAngleUp } className='Gallery_arrow_form' />
                            </div>
                            <div className='Gallery_arrow_index'>{index+1}/{length}</div>
                        </> 
                    )   
                }
            </div>
        </div>
    )
}