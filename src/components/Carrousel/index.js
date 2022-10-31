import { useEffect, useState } from 'react';
import './carrousel.scss';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import PropTypes from 'prop-types'

export function Carrousel({children}){
    const [length, setLength] = useState(children.length)
    const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(()=> {
        setTimeout(()=>3000)
        setLength(children.length)
    }, [children])

    function down(){
        if(currentIndex < (length - 1)) {
            setCurrentIndex(prev => prev + 1)
        }
        console.log(currentIndex)
    }

    function up(){
        if(currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
        console.log(currentIndex)
    }

    return (
        <div className="carrousel_container">
            <div className="carrousel_wrapper">
                <IoIosArrowUp className='arrowUp' onClick={up}/>
                <div className="carrousel_content_wrapper">
                    <div className="carrousel_content"
                        style={{transform: `translateY(-${currentIndex * 10}%)`}} >
                        {children}
                    </div>
                </div>
                <IoIosArrowDown className='arrowDown' onClick={down}/>
            </div>
        </div>
    )
}

Carrousel.propTypes = {
    children: PropTypes.any,
}