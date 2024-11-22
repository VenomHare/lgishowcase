import React from 'react'

type Props = {
    title: string;
    downloadLink: string;
    ytVideoLink: string;
    thumbnail: string;
    Tags: string[];
}

const PatchBlock : React.FC<Props> = ({title,Tags, downloadLink, ytVideoLink, thumbnail}) => {
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
                    <div className="patchBlockButton" onClick={()=>{window.open(downloadLink)}}>Download</div>
                    <div className="patchBlockButton" onClick={()=>{window.open(ytVideoLink)}}>Showcase</div>
                </div>
            </div>
        </>
    )
}

export default PatchBlock