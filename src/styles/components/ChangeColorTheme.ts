import styled from 'styled-components'

export const ContainerDarkMode = styled.div`
    position: absolute;
    right: 15px;
    bottom: 10px;

    @media (max-width: 780px) {
        & {
            position: relative;

            margin-top:2.5rem;
        }
    }
`
    
