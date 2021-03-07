import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import { ExperienceBarContainer, CurrentExperienceText} from '../styles/components/ExperienceBar';

export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return(
        <ExperienceBarContainer>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}/>

                <CurrentExperienceText 
                    style={{left: `${percentToNextLevel}%`}}
                >
                    {currentExperience} xp
                </CurrentExperienceText>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </ExperienceBarContainer>
    )
}