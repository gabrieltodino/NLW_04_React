import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import {ProfileContainer} from '../styles/components/Profile'

export function Profile(props ) {
    const { level } = useContext(ChallengesContext)

    const data = props.userData.user
    
    return (
        <ProfileContainer>
            <img src={data.image || "User_icon.png"} alt="Gabriel Todino"/>
            <div>
                <strong>{data.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </ProfileContainer>
    )
}