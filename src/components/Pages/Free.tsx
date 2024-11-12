import './../../styles/free.css'
import DisplayBlock from '../DisplayBlock'
import NavBar from '../NavBar'
import Footer from '../Footer'


const imgs = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318452/1_smscsd.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318452/4_kfs2yu.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318451/3_ryq52v.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318453/2_fcvptp.png"
]

const Free = () => {
    return (
        <>
            <NavBar active='free' />
            <div className="exclusiveTitle">
                    <h1>FREE MOD</h1>
                    <h3>DM for Further Queries and Updates</h3>
                </div>
            <div className='free-container'>
                <DisplayBlock PicLast={4} imgURLs={imgs} ButtonText='Download'/>

            </div>
            <Footer/>
        </>
    )
}

export default Free