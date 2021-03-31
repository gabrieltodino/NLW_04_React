import { CompletedChallenges } from "../ components/CompletedChallenges";
import { Countdown } from "../ components/Countdown";
import { ExperienceBar } from "../ components/ExperienceBar";
import { Profile } from "../ components/Profile";
import { ChallengeBox } from "../ components/ChallengeBox";
import { LogInPage } from "../ components/LogInPage";
import { Bottom } from "../ components/Bottom";

import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useContext } from 'react';

import { useSession} from 'next-auth/client'

import { Container } from '../styles/pages/Home'

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { LogInContext } from "../contexts/LogInContext";

interface HomeProps {
  level:number;
  currentExperience:number;
  challengesCompleted:number;
  toggleTheme: () => {};
  loginState: boolean;
  
}

export default function Home(props: HomeProps) {
  const [session, loading] = useSession();
  const { loginState } = useContext(LogInContext)

  let logInPage = session || loginState.state === true

  let userData = session || loginState
    

  return (
    <>
      {!logInPage &&
        <Container>
            <LogInPage />
        </Container>
      }
      {logInPage && 
          <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
          >
            <Container>
              <Head>
                <title>Inicio | move.it</title>
              </Head>

              <ExperienceBar />

              <CountdownProvider>
                <section>
                  <div>
                    <Profile userData={userData}/>
                    <CompletedChallenges />
                    <Countdown />
                  </div>

                  <div>
                    <ChallengeBox />
                  </div>
                </section>
              </CountdownProvider>
              

              <Bottom toggleTheme={props.toggleTheme}/>

            </Container>
          </ChallengesProvider>
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies


  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
