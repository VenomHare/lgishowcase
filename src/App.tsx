import NavBar from './components/NavBar'
import DisplayProducts from './components/DisplayProducts'
import Brief from './components/Brief'
import Basics from './components/Basics'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet-async'
import './App.css'
import './styles/main.css'
import './../config/config.css'
import './styles/roster.css'
import { useState } from 'react'
import PurchaseSection from './components/PurchaseSection'
import { ModList, ModPack } from '../config/config'
import RosterBlock from './components/RosterBlock'
import RosterLists from './components/RosterLists'
import { RxCross1 } from "react-icons/rx"
import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: var(--home-main-heading-bg);
  overflow-x: hidden;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  animation: ${fadeInUp} 0.6s ease-out;
`

const MainTitle = styled.h1`
  margin-top: 5vh;
  color: var(--home-main-heading-color);
  font-size: 10rem;
  font-family: var(--font-Neon-Rave);
  font-style: italic;
  animation: ${scaleIn} 0.6s ease-out;
  
  @media screen and (max-width: 600px) {
    font-size: 4.8rem;
  }
`

const SubTitle = styled.h3`
  color: var(--home-main-heading-color);
  font-size: 3rem;
  font-family: "Cedarville Cursive", cursive;
  animation: ${fadeInUp} 0.6s ease-out 0.2s backwards;
  
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`

const PageDetails = styled.div`
  color: var(--home-main-heading-color);
  margin: 3vh;
  font-size: 1.4rem;
  font-family: var(--font-poppin);
  width: 75%;
  animation: ${fadeInUp} 0.6s ease-out 0.4s backwards;
  line-height: 1.6;
  
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    width: 85%;
  }
`

const RosterOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${scaleIn} 0.3s ease-out;
`

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--home-main-heading-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`

function App() {
  const [PurchaseBlock, setPurchaseBlock] = useState(false);
  const [ModData, setModData] = useState<ModPack>(ModList.find(m => m.id == "limited") || ModList[0]);
  const [rosterView, setRosterView] = useState(false);

  return (
    <AppContainer>
      <Helmet>
        <title>LGI MOD'z | Premium HCTP Mods & Patches</title>
        <meta name="description" content="LGI MOD'z offers premium HCTP game modifications and patches. Discover enhanced gaming experiences with improved graphics, sound, gameplay, and presentation." />
        <meta name="keywords" content="HCTP mods, wrestling game mods, premium mods, LGI Mods, game patches, wrestling roster" />
        <meta property="og:title" content="LGI MOD'z | Premium HCTP Mods & Patches" />
        <meta property="og:description" content="LGI MOD'z offers premium HCTP game modifications and patches. Discover enhanced gaming experiences with improved graphics, sound, gameplay, and presentation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lgimodz.vercel.app/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "LGI MOD'z",
              "description": "Premium HCTP game modifications and patches",
              "url": "https://lgimodz.vercel.app/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://lgimodz.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>

      <PurchaseSection setActiveVar={setPurchaseBlock} ActiveVar={PurchaseBlock} Mod={ModData} />
      
      {rosterView && (
        <RosterOverlay>
          <CloseButton onClick={() => setRosterView(false)}>
            <RxCross1 />
          </CloseButton>
          <RosterBlock thumbnail={ModData.thumbnail} title={ModData.name}>
            {ModData.rosterListPath !== undefined ? (
              <RosterLists filepath={ModData.rosterListPath} />
            ) : (
              <div>Roster Not Found</div>
            )}
          </RosterBlock>
        </RosterOverlay>
      )}

      <NavBar active='home' />
      
      <HeadingContainer>
        <MainTitle>LGI MOD'z</MainTitle>
        <SubTitle>A Mod that you always want</SubTitle>
        <PageDetails>
          HCTP is considered a favourite by many (whether it is for improved graphics/sound/gameplay/presentation). 
          Secondly, this game is the second game in the series not to include commentary. Thirdly, it is the only 
          game in the series to have won a Player's Choice Award. Fourth, HCTP boasts one of the largest wrestler 
          roster of any Smackdown game released to date, featuring 65 Superstars and Divas from around the 2001-2024 
          season (if one includes the 11 WWE/F Legends that debuted in the game), with an additional 32 Create A 
          Wrestler slots that would boost the available roster of characters to about 97 total wrestlers for players 
          to utilize. Moreover, the game included 21 different match setups.
          
          Another bonus is that all of the Create A Wrestler parts were available from the word "go" (in Smackdown! 
          Shut Your Mouth, players progressed through Season Mode to unlock CAW parts). Furthermore, as mentioned above, 
          HCTP included (for the first time in the series) eleven Legends from the 1970s, 80s and 90s.
        </PageDetails>
      </HeadingContainer>

      <DisplayProducts 
        setPurchaseVar={setPurchaseBlock} 
        setModData={setModData} 
        ModData={ModData} 
        setRosterView={setRosterView}
      />
      <Brief />
      <Basics />
      <Footer />
    </AppContainer>
  )
}

export default App
