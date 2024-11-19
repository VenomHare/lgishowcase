import React, {  useState } from 'react'
import ImageView from './ImageView'

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ModPack } from '../../config/config';
type Props = {
    Mod: ModPack;
    ButtonText?:string;
    onClick: ()=>void;
    setRosterView: React.Dispatch<React.SetStateAction<boolean>>;
}

const DisplayBlock : React.FC<Props> = ({ Mod,ButtonText, onClick, setRosterView}) => {

    const showThumbnail : boolean = !(Mod.thumbnail == null || Mod.thumbnail == "") 
    const [picture, setPicture] = useState(1);
    return (
        <div className="item">
            <div className="thumbnailSection">
                {
                    showThumbnail ?<>
                        <img src={Mod.thumbnail} alt="Basic" className='thumbnail' />
                        <button className="slideRosterButton" onClick={()=>{setRosterView(true)}}>View Roster</button>
                    </>:<></>
                }

            </div>
            <div className="showcase">
                <div className="slideshow">
                    <h3 className='showTitle'>SHOWCASE IMAGES</h3>
                    <div className="img-container">
                        {
                            Mod.showcaseImgs.map((str,index)=>(
                                <ImageView imageURL={str} key={`Image${index}`} alt={`image ${index}`} classname={`slideitem ${picture == index+1 ? "show" : "hide"}`} />
                            ))
                        }
                    <div className="image-scroller">
                        {
                            Mod.showcaseImgs.map((img,index)=><>
                                <div className={"scrollerItem"} data-active={(picture == index+1)} onClick={()=>setPicture(index+1)} style={{background:`url("${img}")`}}>{picture == index+1?<><MdOutlineRemoveRedEye /></>:<></>}</div>
                            </>)
                        }
                    </div>
                    </div>
                </div>
                <div className="patchnotes">{Mod.description}</div>
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