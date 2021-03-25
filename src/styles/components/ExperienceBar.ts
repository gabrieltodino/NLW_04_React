import styled from 'styled-components'

export const ExperienceBarContainer = styled.header`
    display: flex;
    align-items: center;

    span{
        font-size: 1rem;
    }

    & > div{
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background-color: ${props => {return props.theme.colors.grayLine}};
        margin: 0 1.5rem;
        position: relative;
    }

    & > div > div{
        height: 4px;
        border-radius: 4px;
        background-color: ${props => {return props.theme.colors.green}};
    }
`

export const CurrentExperienceText = styled.span`
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
`