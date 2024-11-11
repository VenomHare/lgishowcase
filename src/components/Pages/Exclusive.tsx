import NavBar from './../NavBar'
import Footer from './../Footer'
import "./../../styles/exclusive.css"
import DisplayBlock from '../DisplayBlock'
const pack1 = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/3_x0ggaz.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/4_cck1wa.png"
]
const pack2 = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/1_cgknma.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/2_hik9oi.png"
]
const pack3 = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/5_xnxr9y.png"
]
const Exclusive = () => {
    return (
        <>
            <NavBar active="exclusive" />
            <div className='ExclusiveParent'>
                <div className="exclusiveTitle">
                    <h1>HCTP EXCLUSIVE MOD</h1>
                    <h3>DM for Further Queries and Updates</h3>
                </div>
                <div className="showcaseContainer">
                    <div className="showContainer">
                        <DisplayBlock PicLast={pack1.length} imgURLs={pack1} ButtonText='Download'/>
                    </div>
                    <div className="showContainer">
                        <DisplayBlock PicLast={pack2.length} imgURLs={pack2} ButtonText='Download'/>
                    </div>
                    <div className="showContainer">
                        <DisplayBlock PicLast={pack3.length} imgURLs={pack3} ButtonText='Download'/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Exclusive