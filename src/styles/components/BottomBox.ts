import styled from 'styled-components'

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 13px 0;

     a {
         color: ${props => {return props.theme.colors.black}};
     }
`