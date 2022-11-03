import PropTypes from 'prop-types'

export function ProjectCard({card_Img, setZoomImage}){

    return(
        <div className='projectCard_Wrapper'>
            <div className='projectCard_Opacity'>
                <img src={card_Img} alt={card_Img} onClick={setZoomImage}></img>
            </div>
        </div>)
}

ProjectCard.propTypes = {
    card_Img: PropTypes.string.isRequired,
    setZoom: PropTypes.func,
}