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
    const [windowWidth, setWindowWidth] = useState(1600)
    const [scrollingDown, setScrollingDown] = useState(false)
    const [scrollingUp, setScrollingUp] = useState(false)

    useEffect(()=> {
        setWindowWidth(window.innerWidth)
        const timer = setTimeout(()=> setEntrance(true), 5000)
        return ()=> (clearTimeout(timer))
    }, [])

    window.addEventListener('resize', e => {setWindowWidth(window.innerWidth)})

    datas.map(el => !el.responsiveImg ? el.img : el.responsiveImg)

    const scrollableElement = document.body;

    scrollableElement.addEventListener('wheel', checkScrollDirection);

    function checkScrollDirection(event) {
        if (checkScrollDirectionIsUp(event)) {
            setScrollingDown(false)
        } else {
            setScrollingDown(true)
        }
    }

    function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        } else {
            return event.deltaY < 0;
        }
    }

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
                        <div className='project_infos'>{el.text}</div>
                    </div>
                    <div className="parallax_container">
                        {(windowWidth < 800)? 
                            `${el.responsiveImg}`? 
                                scrollingDown ? 
                                    <img className='background_image scrollingDown' src={el.responsiveImg} alt='project_image'/>
                                    : 
                                    <img className='background_image' src={el.responsiveImg} alt='project_image'/>
                            :
                                scrollingDown?
                                    <img className='background_image scrollingDown' src={el.img} alt='project_image'/>
                                    :
                                    <img className='background_image' src={el.img} alt='project_image'/>
                        :
                        <div className='background_image' style={{backgroundImage: `url(${el.img})`}}></div>
                        }
                    </div>  
                </div>
            )}
        </div>
    )
}