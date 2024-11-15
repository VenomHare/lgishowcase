import './../../styles/free.css'
import DisplayBlock from '../DisplayBlock'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { FreeSliderimgs } from '../config'
import JoinDiscordLarge from '../JoinDiscordLarge'




const Free = () => {
    return (
        <>
            <NavBar active='free' />
            <div className="exclusiveTitle">
                    <h1>FREE MOD</h1>
                    <h3>For further queries and updates, please open a ticket in our Discord server.</h3>
                </div>
            <div className='free-container'>
                <DisplayBlock PicLast={FreeSliderimgs.length} imgURLs={FreeSliderimgs} ButtonText='Download'  onClick={()=>{}}/>
            </div>
            <JoinDiscordLarge/>
            <Footer/>
        </>
    )
}

export default Free