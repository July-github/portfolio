import { MdMobileFriendly } from 'react-icons/md'
import PropTypes from 'prop-types'

export function Logos({mobile, setZoomImageResponsive}){

    return(
        <div className='logos_wrapper'>
            {mobile && <div className='mobile_logo' onClick={setZoomImageResponsive}><MdMobileFriendly /></div>}
        </div>
    )
}

Logos.propTypes = {
    mobile: PropTypes.bool,
    setZoomImageResponsive: PropTypes.func,
}