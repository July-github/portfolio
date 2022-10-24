import { ProjectCard } from '../../components/ProjectCard'
import { ZoomProject } from '../../components/ZoomProject'
import { Carrousel } from '../../components/Carrousel'
import { useEffect, useState } from 'react'
import { datas } from '../../datas/data'
import { Welcome } from '../../components/Welcome/index'
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Logos } from '../../components/Logos'

export function Home(){
    const [zoomImg, setZoomImg] = useState('')
    const [zoomLogoReact, setZoomLogoReact] = useState(false)
    const [zoomLogoRedux, setZoomLogoRedux] = useState(false)
    const [zoomLogoJest, setZoomLogoJest] = useState(false)
    const [responsive, setResponsive] = useState(false)
    const [linkGithub, setLinkGithub] = useState('')
    const [carrouselVisible, setcarrouselVisible] = useState(false)
    const [entrance, setEntrance] = useState(false)
    const [toggleZoomImgResponsive, setToggleZoomImgResponsive] = useState(false)
    const [responsiveImg, setResponsiveImg] =useState('')

    useEffect(()=> {
        const timer = setTimeout(()=> setEntrance(true), 4000)
        return ()=> (clearTimeout(timer))
    }, [])

    function showCarrousel(){
        carrouselVisible ? (setcarrouselVisible(false)) : setcarrouselVisible(true)
    }

    function setZoomImageResponsive(){
        toggleZoomImgResponsive? setToggleZoomImgResponsive(false) : setToggleZoomImgResponsive(true)
    }

    return(
        //Entrance : Welcome animation or Home page
        !entrance? 
        <div className='cards_wrap'>
            {datas.map(el => 
            <div className='cards_container'>
                <ProjectCard
                    key={el.id}
                    card_Img={el.img}
                />
            </div>
            )}
        </div>
        :
        <div className='home_wrapper'>
            {//zoomImg : Who am I text or zoom on the project picture
            zoomImg? (
                <div className='zoom_wrapper'>
                    <Logos                                 
                        react={zoomLogoReact}
                        redux={zoomLogoRedux}
                        jest={zoomLogoJest}
                        mobile={responsive}
                        setZoomImageResponsive={setZoomImageResponsive}
                        link_Github={linkGithub}
                    />
                    {toggleZoomImgResponsive?
                        <ZoomProject 
                            zoomImage={responsiveImg}
                        />
                        :
                        <ZoomProject 
                            zoomImage={zoomImg}
                        />}
                </div>
            )
            : <Welcome />}
            { //carrouselVisible : deploy carrousel with projects
            carrouselVisible ? (
                <div className='carrousel_band carrousel_visible'>
                    <AiOutlineDoubleLeft className='carrousel_arrow' onClick={showCarrousel}/>
                    <Carrousel
                        show={carrouselVisible}
                    >
                        {datas.map(el => 
                            <ProjectCard
                                key={el.id}
                                card_Img={el.img}
                                setZoomImage={()=>(
                                    setZoomImg(el.img), setResponsive(el.responsive), setResponsiveImg(el.responsiveImg), showCarrousel(), setZoomLogoReact(el.react), setZoomLogoRedux(el.redux), setZoomLogoJest(el.jest), setLinkGithub(el.linkGithub)
                                )}
                            />
                        )}
                    </Carrousel>
                </div>
            )
            : (  
                <div className='carrousel_band'>
                    <AiOutlineDoubleLeft className='carrousel_arrow' onClick={showCarrousel}/>
                    <Carrousel
                        show={carrouselVisible}
                    >
                        {datas.map(el => 
                            <ProjectCard 
                                key={el.id}
                                card_Img={el.img}
                                setZoomImage={()=>(setZoomImg(el.img), showCarrousel())}
                            />
                        )}
                    </Carrousel>
                </div> 
            )}
        </div>
    )
}