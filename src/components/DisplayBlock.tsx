import React, {  useState } from 'react'
import ImageView from './ImageView'

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
    PicLast : number;
    imgURLs: string[];
    thumbnail?: string;
    ButtonText?:string;
    onClick: ()=>void;
}

const DisplayBlock : React.FC<Props> = ({ PicLast, imgURLs, thumbnail,ButtonText, onClick}) => {

    const showThumbnail : boolean = !(thumbnail == null || thumbnail == "") 
    const [picture, setPicture] = useState(1);

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
                        {/* <img src="./../src/assets/slideDeluxe/1.png" alt="1" className={`slideitem ${picture == 1 ? "show" : "hide"}`} />
                        <img src="./../src/assets/slideDeluxe/2.png" alt="2" className={`slideitem ${picture == 2 ? "show" : "hide"}`} /> */}
                        {/* <img src="./../src/assets/slideDeluxe/2.png" alt="2" className={cur == 2 ? "show" : "hide"}/> */}
                    </div>
                    <div className="slide-controls">
                        <button onClick={() => { setPicture(getPrev(picture, PicLast)); }}>prev</button>
                        <button onClick={() => { setPicture(getNext(picture, PicLast)); }}>next</button>
                    </div>
                </div>
                <div className='buy-btn' onClick={onClick}>{(ButtonText == null || ButtonText == "")?<>Buy Now</>:ButtonText}</div>
            </div>
        </div>
    )
}

export default DisplayBlock