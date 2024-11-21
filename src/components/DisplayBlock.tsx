import React, {  useState } from 'react'
import ImageView from './ImageView'
import { MdOutlineRemoveRedEye } from "react-icons/md";
type Props = {
    ButtonText?:string;
    onClick: ()=>void;
    setRosterView?: React.Dispatch<React.SetStateAction<boolean>>;
    imgURLs: string[];
    Thumbnail?: string;
    patchnotes?: string;
}

const DisplayBlock : React.FC<Props> = ({ ButtonText, onClick, setRosterView, imgURLs, Thumbnail,patchnotes}) => {

    const showThumbnail : boolean = !(Thumbnail == null || Thumbnail == "") 
    const [picture, setPicture] = useState(1);
    return (
        <div className="item">
            <div className="thumbnailSection">
                {
                    showThumbnail ?<>
                        <img src={Thumbnail} alt="Basic" className='thumbnail' />
                        { setRosterView !== undefined ? <button className="slideRosterButton" onClick={()=>{setRosterView(true);}}>View Roster</button> : <></>}
                    </>:<></>
                }

            </div>
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
                <div className="patchnotes">{patchnotes}</div>
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