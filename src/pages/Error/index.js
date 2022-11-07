import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Error(){
    const[isLoading, setIsLoading]=useState(false)

    useEffect(()=> {
        setIsLoading(true)
        setTimeout(()=> setIsLoading(false), 1000)
    },[])

    return(
        isLoading ? <div className="loading">Loading...</div>
        : (
        <div className="error_wrapper">
            <div class="error_cube">
                <div class="cubespinner">
                    <div class="face1">4</div>
                    <div class="face2">0</div>
                    <div class="face3">4</div>
                    <div class="face4">4</div>
                    <div class="face5">0</div>
                    <div class="face6">4</div>
                </div>
            </div>
            <div className='error_text'><span>Ooops !</span><br/>Cette page n'existe pas.<br/>The page you're looking for doesn't exist.</div>
        </div>
        )
    )
}