// globalStyles.js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{ box-sizing: border-box; }
    a{ text-decoration: none; }
    html, body{
        padding: 0;
        margin: 0;
        font-family: 'Roboto';
    }
`

export { GlobalStyle }
