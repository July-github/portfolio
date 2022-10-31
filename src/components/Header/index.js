import { Link } from 'react-router-dom'
import { ThemeButton } from '../ThemeButton'

export function Header(){
    
    return(
        <div className="header_Wrapper">
            <Link to="/" className="header_projet">PROJETS</Link>
             / 
            <Link to="/About" className="header_apropos">À PROPOS</Link>
            <div className='themeButton_container'>
                <ThemeButton/>
            </div>
        </div>
    )
}