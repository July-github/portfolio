import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

export function About(){

    return (
        <div className="about">
            Développeuse Front-End, 
            <br/>je suis spécialisée React.
            <div className="about_icons">
                <div onClick={()=> window.location = 'mailto:july.heckler@gmail.com'}><AiFillMail className="icon_mail"/></div>
                <Link href='https://www.linkedin.com/in/julyheckler/'><AiFillLinkedin className="icon_linkedin"/></Link>
                <Link href='https://github.com/July-github'><AiFillGithub className="icon_github"/></Link>
            </div>
        </div>
    )
}