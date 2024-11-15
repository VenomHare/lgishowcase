import NavBar from './../NavBar'
import Footer from './../Footer'
import "./../../styles/exclusive.css"
import DisplayBlock from '../DisplayBlock'
import { exclusivePackImage1, exclusivePackImage2, exclusivePackImage3 } from '../config'

const Exclusive = () => {
    return (
        <>
            <NavBar active="exclusive" />
            <div className='ExclusiveParent'>
                <div className="exclusiveTitle">
                    <h1>HCTP EXCLUSIVE MOD</h1>
                    <h3>For further queries and updates, please open a ticket in our Discord server.</h3>
                </div>
                <div className="showcaseContainer">
                    <div className="showContainer">
                        <DisplayBlock PicLast={exclusivePackImage1.length} imgURLs={exclusivePackImage1} ButtonText='Download'  onClick={()=>{}}/>
                    </div>
                    <div className="showContainer">
                        <DisplayBlock PicLast={exclusivePackImage2.length} imgURLs={exclusivePackImage2} ButtonText='Download'  onClick={()=>{}}/>
                    </div>
                    <div className="showContainer">
                        <DisplayBlock PicLast={exclusivePackImage3.length} imgURLs={exclusivePackImage3} ButtonText='Download'  onClick={()=>{}}/>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Exclusive