import './projets.scss';
import { datas } from '../../datas/data';
import reactLogo from '../../assets/reactLogo.webp'
import reduxLogo from '../../assets/reduxLogo.webp'
import jestLogo from '../../assets/jestLogo.webp'
import GitLogo from '../../assets/GitHubLogo.jpg'
import { useEffect, useState } from 'react'
import { ProjectCard } from '../../components/ProjectCard'

export function Projets(){
    const [entrance, setEntrance] = useState(false)

    useEffect(()=> {
        const timer = setTimeout(()=> setEntrance(true), 5000)
        return ()=> (clearTimeout(timer))
    }, [])

    return (
        !entrance? 
        <div className='home_wrapper'>
            <div className='cards_wrap'>
                {datas.map(el => 
                <div className='cards_container' key={el.id}>
                    <ProjectCard
                        card_Img={el.img}
                    />
                </div>
                )}
            </div>
        </div>
        :
        <div className='projects'>
            {datas.map(el => 
                <div className='project' key={el.id}>
                    <div className='projects_text'>
                        <div className='projects_logos'>
                            <a href={el.linkGithub} target="_blank" rel="noreferrer"><img src={GitLogo} alt='logo GitHub' title='Découvrir le projet sur GitHub'/></a>
                            {el.react && <img src={reactLogo} alt='logo React'/>}
                            {el.redux && <img src={reduxLogo} alt='logo Redux'/>}
                            {el.jest && <img src={jestLogo} alt='logo Jest'/>}
                        </div>
                        {el.text}
                    </div>
                    <div className="parallax_container">
                        <div className='layer_1'></div>
                        {/* <img className='background_image' src={el.img} alt='image_project' /> */}
                        <div className='background_image' style={{backgroundImage: `url(${el.img})`}}></div>
                    </div>  
                </div>
            )}
        </div>
    )
}