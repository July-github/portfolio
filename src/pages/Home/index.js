import { ProjectCard } from '../../components/ProjectCard'
import { ZoomProject } from '../../components/ZoomProject'
import ArgentBankHome from '../../assets/CardImg/ArgentBankHome.png'
import BilledDash from '../../assets/CardImg/BilledDash.png'
import FishEye from '../../assets/CardImg/FishEye.png'
import HRNetHome from '../../assets/CardImg/HRNetHome.png'
import Kasa from '../../assets/CardImg/KasaHome.png'
import PetitsPlats from '../../assets/CardImg/PetitsPlats.png'
import SportSee from '../../assets/CardImg/SportSeeDash.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { transformToZoom } from '../../redux/actions'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

export function Home(){
    const [zoomImg, setZoomImg] = useState(FishEye)
    const dispatch = useDispatch()
    const zoomState = dispatch(transformToZoom())
console.log(zoomState)

    return(
        <div className='home_wrapper'>
            <ZoomProject 
                zoomImage={zoomImg}
            />
            <div className='bandGallery_Wrapper'>
                <div className='arrowWrapper arrowWrapperTop'>
                    <IoIosArrowUp className='arrowUp'/>
                </div>  
                <div className='cards_Wrapper'>
                    <ProjectCard 
                        card_Img={ArgentBankHome}
                        setZoomImage={()=>setZoomImg(ArgentBankHome)}
                    />
                    <ProjectCard 
                        card_Img={BilledDash}
                        setZoomImage={()=>setZoomImg(BilledDash)}
                    />
                    <ProjectCard 
                        card_Img={FishEye}
                        setZoomImage={()=>setZoomImg(FishEye)}
                    />
                    <ProjectCard 
                        card_Img={HRNetHome}
                        setZoomImage={()=>setZoomImg(HRNetHome)}
                    />
                    <ProjectCard 
                        card_Img={Kasa}
                        setZoomImage={()=>setZoomImg(Kasa)}
                    />
                    <ProjectCard 
                        card_Img={PetitsPlats}
                        setZoomImage={()=>setZoomImg(PetitsPlats)}
                    />
                    <ProjectCard 
                        card_Img={SportSee}
                        setZoomImage={()=>setZoomImg(SportSee)}
                    />
                </div>
                <div className='arrowWrapper arrowWrapperBottom'>
                    <IoIosArrowDown className='arrowDown'/>
                </div>
            </div>
        </div>
    )
}