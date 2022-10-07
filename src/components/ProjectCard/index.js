import PropTypes from 'prop-types'
import { useState } from 'react'

export function ProjectCard({card_Img, setZoomImage}){
    const [toZoom, setToZoom] = useState(false)

    function transformToZoom(){
        setToZoom(true)
        setZoomImage()
    }

    return(
        <div className='projectCard_Wrapper'>
            <div className='projectCard_Opacity'>
                <img src={card_Img} alt={card_Img} onClick={transformToZoom}></img>
            </div>
        </div>)
}

ProjectCard.propTypes = {
    card_Img: PropTypes.string.isRequired,
    setZoom: PropTypes.func,
}