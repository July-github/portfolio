import './themeButton.scss';
import { useContext } from 'react'
import { ThemeContext } from '../../context/index'
import { RiMoonFill } from 'react-icons/ri';
import { BiSun } from 'react-icons/bi';

export function ThemeButton(){
    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <div className="icon__home"  onClick={() => toggleTheme()}>
            {(theme === 'dark') ? <RiMoonFill/> : <BiSun/>}
        </div>
    )
}
