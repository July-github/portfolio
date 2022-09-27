import PropTypes from 'prop-types'
import FishEye from '../../assets/CardImg/FishEye.png'

export function ZoomProject(){

    return(
        <div className='ZoomProject_Wrapper'>
            <img src={FishEye} alt='fish'></img>
        </div>
    )
}

ZoomProject.propTypes = {
    zoom_Img: PropTypes.string.isRequired,
}