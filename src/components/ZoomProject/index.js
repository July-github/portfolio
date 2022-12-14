import PropTypes from 'prop-types'
import reactLogo from '../../assets/reactLogo.webp'
import reduxLogo from '../../assets/reduxLogo.webp'
import jestLogo from '../../assets/jestLogo.webp'
import GitLogo from '../../assets/GitHubLogo.jpg'

export function ZoomProject({zoomImage, zoomImg_name, react, jest, redux, link_Github, text}){

    return(
        <div className={`zoomProject_container ${zoomImg_name}`}>
            <div className={`zoomProject_Wrapper ${zoomImg_name}`}>
                <div className='zoomProject_box'></div>
                <img src={zoomImage} alt={zoomImage} className='image_notShowTech'></img>
            </div>
            <div className={`zoomProject_Wrapper_tech ${zoomImg_name}`}>
                <div className='logos_showTech'>
                <a href={link_Github} target="_blank" rel="noreferrer"><img src={GitLogo} alt='logo GitHub' title='Découvrir le projet sur GitHub'/></a>
                    {react && <img src={reactLogo} alt='logo React'/>}
                    {redux && <img src={reduxLogo} alt='logo Redux'/>}
                    {jest && <img src={jestLogo} alt='logo Jest'/>}
                </div>
                <div className='text_showTech'>{text}</div>
            </div>
        </div>
    )
}

ZoomProject.propTypes = {
    zoomImage: PropTypes.string,
    zoomImg_name: PropTypes.string,
    react: PropTypes.bool,
    redux: PropTypes.bool,
    jest: PropTypes.bool,
    link_Github: PropTypes.string.isRequired,
    text: PropTypes.string
}

ZoomProject.defaultProps = {
    zoomImage: '',
}