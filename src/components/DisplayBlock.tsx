import React, { useState } from 'react'
import ImageView from './ImageView'
import { MdOutlineRemoveRedEye } from "react-icons/md";

type Props = {
    ButtonText?: string;
    onClick: () => void;
    setRosterView?: React.Dispatch<React.SetStateAction<boolean>>;
    imgURLs: string[];
    Thumbnail?: string;
    patchnotes?: string;
    title? : string;
    tags? : string[];
}

const DisplayBlock: React.FC<Props> = ({ ButtonText, onClick, setRosterView, imgURLs, Thumbnail, patchnotes, title, tags }) => {

    const showThumbnail: boolean = !(Thumbnail == null || Thumbnail == "")
    const [picture, setPicture] = useState(1);
    return (
        <div className="item">
            {
                showThumbnail ? <>
                    <div className="thumbnailSection">
                        <img src={Thumbnail} alt="Basic" className='thumbnail' />
                        {setRosterView !== undefined ? <button className="slideRosterButton" onClick={() => { setRosterView(true); }}>View Roster</button> : <></>}
                    </div>
                </> : <></>
            }

            <div className="showcase">
                <div className="slideshow">
                    {
                        title !== undefined ?
                            <h3 className='showTitle' data-thumbnail={showThumbnail}>{title}</h3>
                        :<></>
                    }
                    <div className="img-container" data-thumbnail={showThumbnail}>
                        {
                            imgURLs.map((str, index) => (
                                <ImageView imageURL={str} key={`Image${index}`} alt={`image ${index}`} classname={`slideitem ${picture == index + 1 ? "show" : "hide"}`} />
                            ))
                        }
                        <div className="image-scroller">
                            {
                                imgURLs.map((img, index) => <>
                                    <div className={"scrollerItem"} data-active={(picture == index + 1)} onClick={() => setPicture(index + 1)} style={{ background: `url("${img}")` }}>{picture == index + 1 ? <><MdOutlineRemoveRedEye /></> : <></>}</div>
                                </>)
                            }
                        </div>
                    </div>
                </div>
                <div className="patchnotes">{patchnotes}</div>
                {
                    tags !== undefined ?
                        <div className="patchesTags"><span>Tags:</span> {tags?.map(tag=><div className='patchtag'>{tag}</div>)}</div>
                    :<></>
                }
                <div className='buy-btn' onClick={onClick}>
                    <span>
                        {(ButtonText == null || ButtonText == "") ? <>Buy Now</> : ButtonText}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default DisplayBlock