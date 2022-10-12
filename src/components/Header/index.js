import { Link } from 'react-router-dom'

export function Header(){

    return(
        <div className="header_Wrapper">
            <Link to="/*" className="header_projet">PROJETS</Link> / <Link to="/" className="header_apropos">À PROPOS</Link>
        </div>
    )
}