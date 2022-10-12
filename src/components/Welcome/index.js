import profile from '../../assets/Profile.jpg'

export function Welcome(){

    return (
        <div className='welcome_container'>
            <img src={profile} alt="profile_picture" className='welcome_profile'/>
            <div className="welcome_wrapper">
                <div className="Iam">Développeuse Front-End ReactJS</div>
                <a href='https://github.com/July-github' className="welcome">Consultez mes projet sur GitHub</a>
            </div>
        </div>
    )
}