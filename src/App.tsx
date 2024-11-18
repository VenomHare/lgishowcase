import NavBar from './components/NavBar'
import DisplayProducts from './components/DisplayProducts'
import Brief from './components/Brief'
import Basics from './components/Basics'
import Footer from './components/Footer'
import './App.css'
import './styles/main.css'
import './../config/config.css'
import JoinDiscordLarge from './components/JoinDiscordLarge'
import { useState } from 'react'
import PurchaseSection from './components/PurchaseSection'
import { ModList, ModPack } from '../config/config'

function App() {

  const [PurchaseBlock, setPurchaseBlock] = useState(false);
  const [ModData, setModData] = useState<ModPack>(ModList[0]);

  return (
    <>
      <PurchaseSection setActiveVar={setPurchaseBlock} ActiveVar={PurchaseBlock} Mod={ModData}/>
      <NavBar active='home'/>
      <div className="heading">
        <h1 className='maintitle'>
          LGI MOD'z
        </h1>
        <h3 className='subtitle'>A Mod that you always want</h3>
        <div className="page-details"> 
          HCTP is considered a favourite by many (whether it is for improved graphics/sound/gameplay/presentation). Secondly, this game is the second game in the series not to include commentary. Thirdly, it is the only game in the series to have won a Player's Choice Award. Fourth, HCTP boasts one of the largest wrestler roster of any Smackdown game released to date, featuring 65 Superstars and Divas from around the 2001-2024 season (if one includes the 11 WWE/F Legends that debuted in the game), with an additional 32 Create A Wrestler slots that would boost the available roster of characters to about 97 total wrestlers for players to utilize. Moreover, the game included 21 different match setups.
          Another bonus is that all of the Create A Wrestler parts were available from the word "go" (in Smackdown! Shut Your Mouth, players progressed through Season Mode to unlock CAW parts). Furthermore, as mentioned above, HCTP included (for the first time in the series) eleven Legends from the 1970s, 80s and 90s.
        </div>
      </div>
      <DisplayProducts setPurchaseVar={setPurchaseBlock} setModData={setModData} ModData={ModData} />
      <JoinDiscordLarge/>
      <Brief/>
      <Basics/>
      <Footer/>
      <></>
    </>
  )
}

export default App
