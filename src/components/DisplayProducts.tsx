import { useState } from 'react';
import './../styles/slides.css'
import DisplayBlock from './DisplayBlock';

const imgs = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/2_tpwk4c.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/1_gyfgdh.png "
]
const thumbnail = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317640/1_jk6u4z.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317639/2_orgr2g.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317640/3_skbost.png"

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
            return <DisplayBlock PicLast={2} imgURLs={imgs} thumbnail={thumbnail[1]} />
        }
        else if (curPack == "limited"){
            return <DisplayBlock PicLast={2} imgURLs={imgs} thumbnail={thumbnail[2]} />
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