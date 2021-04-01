import Link from 'next/link'
import { signIn } from 'next-auth/client'
import { GithubButton, InputUsername, LoginBox } from '../styles/components/LogInPage'

import { useState, useContext, useEffect } from 'react'
import { LogInContext } from '../contexts/LogInContext'

export function LogInPage() {
    const { changeLogin } = useContext(LogInContext)

    const [inputText, setInputText] = useState('')
    const [clicked, setClicked] = useState(false)

    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }

    const handleClick = () => {
        setClicked(true)
    }
    

    useEffect(() => {
        changeLogin(inputText)
    }, [clicked])

    return (
        <LoginBox>
            <img src="logo-full.svg" alt="move it"></img>

            <Link href='/'>
                <GithubButton
                    href="#"
                    onClick={handleSignin}
                >
                    <img src="github_logo.png" alt="github logo"></img>
                    Login with Github
                </GithubButton>
            </Link>
            
            <h4>OR</h4>

            <Link href='/'>
                <InputUsername>
                    <input type="text" placeholder="insert your username" onChange={event => setInputText(event.target.value)}/>
                    <button onClick={handleClick}>&#5171;</button>
                </InputUsername>
            </Link>            
        </LoginBox>
    )
}