import { useState } from 'react';
import './../styles/slides.css'
import DisplayBlock from './DisplayBlock';
import { BasicSliderImages, BasicSliderThumbnail, DeluxeSliderImages, DeluxeSliderThumbnail, LimitedSliderImages, LimitedSliderThumbnail } from './config';


const DisplayProducts = () => {
    const [curPack, setCurPack] = useState("basic")

    const handleChange = (e:React.FormEvent<HTMLSelectElement>)=>{
        const target = e.target as HTMLSelectElement; 
        setCurPack(target.value);
    }

    const switcher = () => {
        if (curPack == "basic"){
            return <DisplayBlock PicLast={BasicSliderImages.length} imgURLs={BasicSliderImages} thumbnail={BasicSliderThumbnail} />
        }
        else if (curPack == "deluxe"){
            return <DisplayBlock PicLast={DeluxeSliderImages.length} imgURLs={DeluxeSliderImages} thumbnail={DeluxeSliderThumbnail} />
        }
        else if (curPack == "limited"){
            return <DisplayBlock PicLast={LimitedSliderImages.length} imgURLs={LimitedSliderImages} thumbnail={LimitedSliderThumbnail} />
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