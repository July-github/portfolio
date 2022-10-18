import reactLogo from '../../assets/reactLogo.webp'
import reduxLogo from '../../assets/reduxLogo.webp'
import jestLogo from '../../assets/jestLogo.webp'

import PropTypes from 'prop-types'

export function Logos({react, jest, redux, link_Github}){
    return(
        <div className='logos_wrapper'>
            <div className='logos'>
                {react && <img src={reactLogo} alt='logo React'/>}
                {redux && <img src={reduxLogo} alt='logo Redux'/>}
                {jest && <img src={jestLogo} alt='logo Jest'/>}
            </div>
            <a href={link_Github} target="_blank" rel="noreferrer">Github</a>
        </div>
    )
}

Logos.propTypes = {
    react: PropTypes.bool,
    redux: PropTypes.bool,
    jest: PropTypes.bool,
    vanillaJS: PropTypes.bool,
    link_Github: PropTypes.string.isRequired
}