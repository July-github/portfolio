import reactLogo from '../../assets/reactLogo.webp'
import reduxLogo from '../../assets/reduxLogo.webp'
import jestLogo from '../../assets/jestLogo.webp'
import PropTypes from 'prop-types'

export function Logos({react, jest, redux}){
    if(react && jest && redux) {
        return(
            <div className='logos_wrapper'>
                <img src={reactLogo} alt='logo React'/>
                <img src={reduxLogo} alt='logo Redux'/>
                <img src={jestLogo} alt='logo Jest'/>
            </div>
        )
    }
    if(react && jest) {
        return(
        <div className='logos_wrapper'>
            <img src={reactLogo} alt='logo React'/>
            <img src={jestLogo} alt='logo Jest'/>
        </div>
        )
    }
    if(react && redux) {
        return(
        <div className='logos_wrapper'>
            <img src={reactLogo} alt='logo React'/>
            <img src={reduxLogo} alt='logo Redux'/>
        </div>
        )
    }
    if(jest && redux) { 
        return (
        <div className='logos_wrapper'>
            <img src={reduxLogo} alt='logo Redux'/>
            <img src={jestLogo} alt='logo Jest'/>
        </div>
        )
    }
    if(jest) { 
        return (
        <div className='logos_wrapper'>
            <img src={jestLogo} alt='logo Jest'/>
        </div>
        )
    }
    if(redux) { 
        return (
        <div className='logos_wrapper'>
            <img src={reduxLogo} alt='logo Redux'/>
        </div>
        )
    }
    if(react) { 
        return (
        <div className='logos_wrapper'>
            <img src={reactLogo} alt='logo React'/>
        </div>
        )
    }
}

Logos.propTypes = {
    react: PropTypes.bool,
    redux: PropTypes.bool,
    jest: PropTypes.bool,
}