import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import {ProfileContainer} from '../styles/components/Profile'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    
    return (
        <ProfileContainer>
            <img src="https://github.com/gabrieltodino.png" alt="Gabriel Todino"/>
            <div>
                <strong>Gabriel Todino</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </ProfileContainer>
    )
}