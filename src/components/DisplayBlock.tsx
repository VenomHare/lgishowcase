import React, {  useState } from 'react'
import ImageView from './ImageView'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

import { MdOutlineRemoveRedEye } from "react-icons/md";
const getNext = ( cur: number, Last:number) => {
    if (cur >= Last) {
        cur = 1;
        return 1;
    }
    cur = cur + 1;
    return cur;
}

const getPrev = (cur: number, Last:number) => {
    if (cur <= 1) {
        cur = Last;
        return Last;
    }
    cur = cur - 1;
    return cur;
}

type Props = {
    imgURLs: string[];
    thumbnail?: string;
    ButtonText?:string;
    onClick: ()=>void;
}

const DisplayBlock : React.FC<Props> = ({ imgURLs, thumbnail,ButtonText, onClick}) => {

    const showThumbnail : boolean = !(thumbnail == null || thumbnail == "") 
    const [picture, setPicture] = useState(1);
    const PicLast = imgURLs.length;
    return (
        <div className="item">
            {
                showThumbnail ?
                    <img src={thumbnail} alt="Basic" className='thumbnail' />
                :<></>
            }
            <div className="showcase">
                <div className="slideshow">
                    <h3 className='showTitle'>SHOWCASE IMAGES</h3>
                    <div className="img-container">
                        {
                            imgURLs.map((str,index)=>(
                                <ImageView imageURL={str} key={`Image${index}`} alt={`image ${index}`} classname={`slideitem ${picture == index+1 ? "show" : "hide"}`} />
                            ))
                        }
                    <div className="image-scroller">
                        {
                            imgURLs.map((img,index)=><>
                                <div className={"scrollerItem"} data-active={(picture == index+1)} onClick={()=>setPicture(index+1)} style={{background:`url("${img}")`}}>{picture == index+1?<><MdOutlineRemoveRedEye /></>:<></>}</div>
                            </>)
                        }
                    </div>
                    </div>
                </div>
                <div className='buy-btn' onClick={onClick}>
                    <span>
                        {(ButtonText == null || ButtonText == "")?<>Buy Now</>:ButtonText}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DisplayBlock