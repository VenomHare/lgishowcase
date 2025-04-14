import NavBar from './components/NavBar'
import Basics from './components/home/Basics'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet-async'
import Config from './config/config'
import CommingSoon from './components/home/CommingSoon'
import DisplayProducts from './components/home/DisplayProducts'




function App() {

  return (
    <div className='min-h-screen overflow-x-hidden bg-nav-background'>
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

      <NavBar active='' />
      
      <div className='flex flex-col justify-center items-center w-full animate-fadeInOut'>
        <h1 className='mt-[5vh] text-offwhite text-6xl md:text-8xl lg:text-10xl  font-NeonRave italic font-extrabold'><span className='text-red-700'>LGI</span> MOD'z</h1>
        <h3 className='text-offwhite text-3xl md:text-6xl font-Cursive animate-fadeInOutBack'>A Mod that you always want</h3>
        <div className='text-gray-400 m-[3vh] text-xl font-Poppins w-[75%] animate-fadeInOutBack'>
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
        </div>
      </div>

      <DisplayProducts mod={Config.ModList.find(m=>m.id=="limited")!}/>
      <DisplayProducts mod={Config.ModList.find(m=>m.id=="deluxe")!}/>
      {/* <Brief /> */}
      <CommingSoon mod={Config.ModList.find(m=>m.id=="dynasty")!}/>
      <Basics />
      <Footer />
    </div>
  )
}

export default App
