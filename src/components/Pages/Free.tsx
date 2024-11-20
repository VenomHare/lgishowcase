import './../../styles/free.css'
import DisplayBlock from '../DisplayBlock'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { FreeSliderimgs } from '../../../config/config'


const Free = () => {
    return (
        <>
            <NavBar active='free' />
            <div className="freeTitle">
                    <h1>FREE MOD</h1>
                    <h3>For further queries and updates, please open a ticket in our Discord server.</h3>
                </div>
            <div className='free-container'>
                <DisplayBlock  imgURLs={FreeSliderimgs} ButtonText='Download'  onClick={()=>{}}/>
            </div>
            <Footer/>
        </>
    )
}

export default Free