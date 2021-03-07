import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

import {CountdownContainer, CountdownButton, CountdownButtonActive} from '../styles/components/Countdown'


export function Countdown() {
    const {
        minutes, 
        seconds, 
        hasFinished, 
        active, 
        resetCountdown, 
        startCountdown
    } = useContext(CountdownContext)

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <CountdownContainer>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </CountdownContainer>

            { hasFinished ? (
                <CountdownButton
                    disabled
                >
                    Ciclo encerrado
                </CountdownButton>
            ) : (
                <>
                    {active ? (
                        <CountdownButtonActive
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </CountdownButtonActive>
                    ) : (
                        <CountdownButton
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </CountdownButton>
                    )}
                </>
            )}
        </div>
    )
}