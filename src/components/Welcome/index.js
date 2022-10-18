import profile from '../../assets/Profile.jpg'

export function Welcome(){

    return (
        <div className='welcome_container'>
            <img src={profile} alt="profile_picture" className='welcome_profile'/>
            <div className="welcome_wrapper">
                <h1 className="Iam">Développeuse Front-End ReactJS</h1>
                <a href='https://github.com/July-github' className="welcome">Consultez mes projets sur GitHub</a>
            </div>
        </div>
    )
}