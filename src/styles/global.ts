import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media(max-width: 720){
        html {
            font-size: 87.5%;
        }
    }

    @media(max-width: 1080px){
        html {
            font-size: 93.75%;
        }
    }

    body {
        background-color: var(--background);
        color: var(--text);
    }

    body, input, textarea, button {
        font: 400 1rem "inter", sans-serif;
    }

    button{
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

