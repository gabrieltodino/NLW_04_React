import styled from 'styled-components'

export const BottomContainer = styled.div`
     &{
         display: flex;
         justify-content: space-between;
     }

     a {
         color: ${props => {return props.theme.colors.black}};
     }
`