import { ProjectCard } from '../../components/ProjectCard'
import { ZoomProject } from '../../components/ZoomProject'
import ArgentBankHome from '../../assets/CardImg/ArgentBankHome.png'
import BilledDash from '../../assets/CardImg/BilledDash.png'
import FishEye from '../../assets/CardImg/FishEye.png'
import HRNetHome from '../../assets/CardImg/HRNetHome.png'
import Kasa from '../../assets/CardImg/KasaHome.png'
import PetitsPlats from '../../assets/CardImg/PetitsPlats.png'
import SportSee from '../../assets/CardImg/SportSeeDash.png'
import { useEffect, useState } from 'react'

export function Home(){

    return(
        <div className='home_wrapper'>
            <ZoomProject 
            />
            <div className='bandGallery_Wrapper'>
                <ProjectCard 
                    card_Img={ArgentBankHome}
                />
                <ProjectCard 
                    card_Img={BilledDash}
                />
                <ProjectCard 
                    card_Img={FishEye}
                />
                <ProjectCard 
                    card_Img={HRNetHome}
                    // setZoom={setZoomImg(HRNetHome)}
                />
                <ProjectCard 
                    card_Img={Kasa}
                />
                <ProjectCard 
                    card_Img={PetitsPlats}
                />
                <ProjectCard 
                    card_Img={SportSee}
                />

            </div>
        </div>
    )
}