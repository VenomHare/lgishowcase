import './../../styles/free.css'
import DisplayBlock from '../DisplayBlock'
import NavBar from '../NavBar'
import Footer from '../Footer'
const imgs = [
    'https://media.discordapp.net/attachments/1304332618698985533/1304341260508856340/3.png?ex=672f09f5&is=672db875&hm=c209abd21696123aa60d7c16373f313fcd235ed044f325fc6505ed8881ffa956&=&format=webp&quality=lossless',
    'https://media.discordapp.net/attachments/1304332618698985533/1304341260802330677/4.png?ex=672f09f6&is=672db876&hm=8fea860f5db05187cf1de1fba40a0ebad42c6da7fc98a5f8572c2731f6ef0e5a&=&format=webp&quality=lossless',
    'https://media.discordapp.net/attachments/1304332618698985533/1304341261397917736/1.png?ex=672f09f6&is=672db876&hm=1d89b92b771bd97831cdb7a17a687c6ada0f28681b9bc8febd58342f675c1b88&=&format=webp&quality=lossless',
    'https://media.discordapp.net/attachments/1304332618698985533/1304341261775274044/2.png?ex=672f09f6&is=672db876&hm=a2c8684c4a17cf7ec67194c14ef90d6675b90760ffc79cdf0ef7ca141f09ff24&=&format=webp&quality=lossless'
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