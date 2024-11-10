import { useState } from 'react';
import './../src/styles/slides.css'
import DisplayBlock from './DisplayBlock';
import { RiArrowDropDownLine } from "react-icons/ri";
// const ExlucisveLast = 2;
// const LimitedLast=1;
// const BasicLast=1;

// const getNext = ( cur: number, Last:number) => {
//     if (cur == Last) {
//         cur = 1;
//         return 1;
//     }
//     cur = cur + 1;
//     return cur + 1;
// }

// const getPrev = (cur: number, Last:number) => {
//     if (cur == 1) {
//         cur = Last;
//         return Last;
//     }
//     cur = cur - 1;
//     return cur;
// }

const imgs = [
    "https://cdn.discordapp.com/attachments/1304332618698985533/1304332727230926911/1.png?ex=672f0203&is=672db083&hm=33869e5d34867b92c68e8db58e4e754a0daa53af37b294ecf738e2e495d46323&",
    "https://cdn.discordap~!p.com/attachments/1304332618698985533/1304332727834902618/2.png?ex=672f0203&is=672db083&hm=02ba981c383a45eb0b24eb4106d7ef5201954230654681ba4afc4bda07140cb3&"
]
const thumbnail = [
    "https://media.discordapp.net/attachments/1304332618698985533/1304334897644572672/2.png?ex=672f0408&is=672db288&hm=89dd9a35c441ac7c8e5021ca58a8aeb5239632892e530817afc739db05889968&=&format=webp&quality=lossless&width=330&height=468"
]

const DisplayProducts = () => {
    const [curPack, setCurPack] = useState("basic")

    const handleChange = (e:React.FormEvent<HTMLSelectElement>)=>{
        const target = e.target as HTMLSelectElement; 
        setCurPack(target.value);
    }

    const switcher = () => {
        if (curPack == "basic"){
            return <DisplayBlock PicLast={2} imgURLs={imgs} thumbnail={thumbnail[0]} />
        }
        else if (curPack == "deluxe"){
            return <DisplayBlock PicLast={2} imgURLs={imgs} thumbnail={thumbnail[0]} />
        }
        else if (curPack == "limited"){
            return <DisplayBlock PicLast={2} imgURLs={imgs} thumbnail={thumbnail[0]} />
        }
        else{
            return {};
        }
    }

    return (<>
        <div className="displaybox">
            <div className="switches">
                <div className="dropswitches">
                    <select onChange={handleChange} defaultValue={"basic"}>
                        <option value="basic">Basic</option>
                        <option value="deluxe">Deluxe</option>
                        <option value="limited">Limited Edition</option>
                    </select>
                </div>
                <div className="switch" data-active={curPack == "basic"} onClick={()=>{setCurPack("basic")}}> Basic </div>
                <div className="switch" data-active={curPack == "deluxe"} onClick={()=>{setCurPack("deluxe")}}> Deluxe </div>
                <div className="switch" data-active={curPack == "limited"} onClick={()=>{setCurPack("limited")}}> Limited Edition </div>
            </div>
            <>
                {switcher()}
            </>
        </div>
    </>
    )
}

export default DisplayProducts