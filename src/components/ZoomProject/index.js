import PropTypes from 'prop-types'

export function ZoomProject({zoomImage}){

    return(
        <div className='zoomProject_Wrapper'>
            <img src={zoomImage} alt='fish'></img>
        </div>
    )
}

ZoomProject.propTypes = {
    zoomImage: PropTypes.string.isRequired,
}