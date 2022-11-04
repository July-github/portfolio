import { useContext } from 'react'
import { ThemeContext } from '../../context/index'
import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    a, h1, div {
        color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
    }
    body {
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? '#2d2d2d' : '#f9f9f9'};
    }
    .cards_wrap > .cards_container {
        border: ${({ isDarkMode }) =>
          isDarkMode ? '#2d2d2d' : '#f9f9f9'} solid 25px;
    }
    .projects_logos > a, .projects_logos > img {
        box-shadow: 2px 2px 10px #f9f9f970, inset -10px -10px 30px #64646461;
    }
    .header_Wrapper {
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? '#2d2d2d99' : '#ffffffab'};
        box-shadow: ${({ isDarkMode }) =>
          isDarkMode ? '5px 5px 30px #b1b1b130' : '5px 5px 30px #c2c2c230'}
    }
    .cubespinner > div {
        color: ${({ isDarkMode }) =>
            isDarkMode ? '#2d2d2dcc' : '#2d2d2dcc'};
    }
`

export function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
  
}