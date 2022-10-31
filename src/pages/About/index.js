import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { IoLeaf } from "react-icons/io5";
import { RiLeafFill } from "react-icons/ri";

export function About(){

    return (
        <div className="about">
            Développeuse Front-End, 
            <br/>je suis spécialisée React.
            {/* <div className="back_image_wrapper">
                <div className="back_image_box"></div>
                <div className="back_image"></div>
            </div> */}
            {/* <div className="tree_wrapper">
                <div className="tree_trunk"></div>
                <div className="leaves_wrap_1">
                    <FaLeaf/><ImLeaf/><IoLeaf/><RiLeafFill/>
                    <RiLeafFill/><FaLeaf/><IoLeaf/><ImLeaf/>
                    <FaLeaf/><ImLeaf/><IoLeaf/><RiLeafFill/>
                    <ImLeaf/><FaLeaf/><RiLeafFill/><IoLeaf/>
                </div>
                <div className="leaves_wrap_2">
                    <FaLeaf/><ImLeaf/><IoLeaf/><RiLeafFill/>
                    <IoLeaf/><ImLeaf/><FaLeaf/><RiLeafFill/>
                    <FaLeaf/><ImLeaf/><IoLeaf/><RiLeafFill/>
                    <IoLeaf/><RiLeafFill/><ImLeaf/><FaLeaf/>

                </div>
                <div className="leaves_wrap_3">
                    <FaLeaf/><ImLeaf/><IoLeaf/><RiLeafFill/>
                    <IoLeaf/><RiLeafFill/><ImLeaf/><FaLeaf/>
                    <FaLeaf/><ImLeaf/><IoLeaf/><RiLeafFill/>
                    <IoLeaf/><ImLeaf/><FaLeaf/><RiLeafFill/>
                </div>
                <div className="leaves_wrap_4">
                    <FaLeaf/><ImLeaf/><IoLeaf/><RiLeafFill/>
                    <ImLeaf/><FaLeaf/><RiLeafFill/><IoLeaf/>
                    <FaLeaf/><ImLeaf/><IoLeaf/><RiLeafFill/>
                    <RiLeafFill/><FaLeaf/><IoLeaf/><ImLeaf/>
                </div>
            </div> */}
            <div className="about_icons">
                <div onClick={()=> window.location = 'mailto:july.heckler@gmail.com'}><AiFillMail className="icon_mail"/></div>
                <Link href='https://www.linkedin.com/in/julyheckler/'><AiFillLinkedin className="icon_linkedin"/></Link>
                <Link href='https://github.com/July-github'><AiFillGithub className="icon_github"/></Link>
            </div>
        </div>
    )
}