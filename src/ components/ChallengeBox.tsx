import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

import { ChallengeBoxContainer, ChallengeNotActive, ChallengeActive } from '../styles/components/ChallengeBox'

export function ChallengeBox(){
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <ChallengeBoxContainer>
            { activeChallenge ? (
                <ChallengeActive>
                    <header>Earn {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            onClick={handleChallengeFailed}
                            className="challengeFailedButton"
                        >
                            Failed
                        </button>
                        <button
                            type="button"
                            onClick = {handleChallengeSucceded}
                            className="challengeSuccededButton"
                        >
                            Completed
                        </button>
                    </footer>
                </ChallengeActive>
            ) : (
                <ChallengeNotActive>
                    <strong>End a cycle to receive a challenge</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Advance from level by completing the challenge.
                    </p>
                </ChallengeNotActive>
            )}
        </ChallengeBoxContainer>
    )
}