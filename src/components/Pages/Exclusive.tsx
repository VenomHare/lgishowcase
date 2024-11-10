import NavBar from './../NavBar'
import Footer from './../Footer'
import "./../../styles/exclusive.css"
import DisplayBlock from '../DisplayBlock'
const pack1 = [
    "https://media.discordapp.net/attachments/1304332618698985533/1305164180319371374/2.png?ex=6732085d&is=6730b6dd&hm=bc05d5b3ed2880f07fa47c06926e2cbcaa6bcc7458fd918af31e665faad84d85&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/1304332618698985533/1305164181695234098/1.png?ex=6732085d&is=6730b6dd&hm=304123be3d1edb167bb9aabce30a1c764ea7b4df48441bae9cfaf240e424805c&=&format=webp&quality=lossless"
]
const pack2 = [
    "https://media.discordapp.net/attachments/1304332618698985533/1305164180621365308/3.png?ex=6732085d&is=6730b6dd&hm=7af4fc25b80cd108ce2583edecbd6119a4b2f47876964588e5b2e32d71001b04&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/1304332618698985533/1305164180990726216/4.png?ex=6732085d&is=6730b6dd&hm=a5d2799826aa3daea1ad125dbd4661b7bd8dd73b5006f7bbd50886daa92cbd11&=&format=webp&quality=lossless"
]
const pack3 = [
    "https://media.discordapp.net/attachments/1304332618698985533/1305164181305167892/5.png?ex=6732085d&is=6730b6dd&hm=40c73dc30339db4ca220721e04a05b5468a6042b2139b87116f59459151ee1bf&=&format=webp&quality=lossless&width=546&height=468",
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
                        <DisplayBlock PicLast={2} imgURLs={pack1} ButtonText='Download'/>
                    </div>
                    <div className="showContainer">
                        <DisplayBlock PicLast={2} imgURLs={pack2} ButtonText='Download'/>
                    </div>
                    <div className="showContainer">
                        <DisplayBlock PicLast={1} imgURLs={pack3} ButtonText='Download'/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Exclusive