import styled from 'styled-components'

export const LoginBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    margin: auto;
    max-width: 400px;
    height: 400px;
    background-color: ${props => {return props.theme.colors.white}};
    border: 1px solid ${props => {return props.theme.colors.black}};
    border-radius: 6px;
    box-shadow: 8px 20px 28px -18px rgba(0,0,0,0.55);

    h4 {
        width: 100%;
        text-align: center;
    }

`

export const GithubButton = styled.button`
    background-color: #000;
    color: ${props => {return props.theme.colors.btnText}};
    padding: 7px;
    border-radius: 5px;

    display: flex;
    align-items: center;

    img {
        max-width: 2rem;
    }
`

export const InputUsername = styled.div`
    display: flex;
    align-items: center;
    height: 35px;

    input {
        max-width: 200px;
        height: 100%;
        padding: 5px;
        border-radius: 7px 0px 0px 7px;
        border: 1px solid black;
    }

    button {
        display: flex;
        align-items: center;
        font-size: 1.85rem;
        height: 100%;
        padding: 3px 8px;
        background-color: ${props => {return props.theme.colors.blue}};
        border:1px solid ${props => {return props.theme.colors.blue}};
        color: ${props => {return props.theme.colors.btnText}};
        border-radius: 0px 7px 7px 0px;
    }
`
