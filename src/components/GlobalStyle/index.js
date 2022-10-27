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
          isDarkMode ? 'black' : 'white'};
    }
    .cards_wrap > .cards_container {
        border: ${({ isDarkMode }) =>
          isDarkMode ? 'black' : 'white'} solid 25px;
    }
`

export function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
  
}