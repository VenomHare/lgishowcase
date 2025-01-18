import React, { useState } from 'react'

type Props = {
    id: string;
    title: string;
    downloadLink: string;
    ytVideoLink: string;
    thumbnail: string;
    Tags: string[];
    credits: string[];
}

const PatchBlock : React.FC<Props> = ({id, title,Tags, downloadLink, ytVideoLink, thumbnail, credits}) => {
    const [Credits, setCredits] = useState(false);
    return (
        <>
            <div className="patchBlockParent">
                <div className="patchesTitle">{title}</div>
                <img src={thumbnail} alt="thumbnail" className="patchBlockThumbnail" />
                <div className="patchesTags">
                    Tags: 
                    {
                        Tags.map(tag => <div className='patchtag'>{tag}</div>)
                    }
                </div>
                <div className="patchBlockButtons">
                    <div className="patchBlockButton" onClick={()=>{window.open("/patches/"+id)}}>View Patch</div>
                    {/* <div className="patchBlockButton" onClick={()=>{window.open(ytVideoLink)}}>Showcase</div> */}
                    {/* {credits.length !== 0 ? */}
                        {/* <div className="patchBlockButton" id='creditBtn' onClick={()=>{setCredits(true)}}>Credits</div> */}
                    {/* :<></>} */}
                </div>
                {
                    Credits ? <>
                        <div className="patchCredits">
                            <div className="patchCredTitle"> {title}'s Credits</div>
                            <ul className="patchCredNames">
                            {
                                credits.length !== 0 ? <>
                                    {credits.map(name => <><li className="patchCredName">{name}</li></>)}
                                </>:<></>
                            }
                            </ul>
                            <div className="patchCredClose" onClick={()=>{setCredits(false)}}> Close </div>
                        </div>
                    </>:<></>
                }
            </div>
        </>
    )
}

export default PatchBlock