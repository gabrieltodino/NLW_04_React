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
        background-color: var(--gray_line);
        margin: 0 1.5rem;
        position: relative;
    }

    & > div > div{
        height: 4px;
        border-radius: 4px;
        background-color: var(--green);
    }
`

export const CurrentExperienceText = styled.span`
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
`