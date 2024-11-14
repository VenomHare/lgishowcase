import './../../styles/free.css'
import DisplayBlock from '../DisplayBlock'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { FreeSliderimgs } from '../config'




const Free = () => {
    return (
        <>
            <NavBar active='free' />
            <div className="exclusiveTitle">
                    <h1>FREE MOD</h1>
                    <h3>DM for Further Queries and Updates</h3>
                </div>
            <div className='free-container'>
                <DisplayBlock PicLast={FreeSliderimgs.length} imgURLs={FreeSliderimgs} ButtonText='Download'/>

            </div>
            <Footer/>
        </>
    )
}

export default Free