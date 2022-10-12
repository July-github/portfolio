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
            The page you're looking for doesn't exist
            <div className="error_backToProjects"><Link to="/">Retour vers PROJETS</Link></div>
            {/* <div><Link to="/">Retour vers 'À Propos'</Link></div> */}
        </div>
        )
    )
}