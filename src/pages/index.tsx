import { CompletedChallenges } from "../ components/CompletedChallenges";
import { Countdown } from "../ components/Countdown";
import { ExperienceBar } from "../ components/ExperienceBar";
import { Profile } from "../ components/Profile";
import { ChallengeBox } from "../ components/ChallengeBox";
import { ChangeColorTheme } from "../ components/ChangeColorTheme";

import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Container } from '../styles/pages/Home'

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";


interface HomeProps {
  level:number;
  currentExperience:number;
  challengesCompleted:number;
  toggleTheme: () => {};
}

export default function Home(props: HomeProps) {

  return (
      
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
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>

                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>

            <ChangeColorTheme toggleTheme={props.toggleTheme}/>

          </Container>
        </ChallengesProvider>
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
