import React from 'react'
import { HiOutlineFolderDownload } from "react-icons/hi";
import { DownloadData } from '../../config/config';

const DownloadBlock: React.FC<DownloadData> = ({ title, downloadLink, key, description }) => {
    return (
        <div className='downloadBlockParent' key={key}>
            <div className='downloadBlockTitle'>
                {title}
                {
                    description != null ? <div className="downloadDescription">{description}</div> : <></>
                }
            </div>
            <div className='downloadBlockButton' onClick={()=>{window.open(downloadLink)}}>
                <div className='downloadbuttontext'>
                    Download
                </div>
                <div className="downloadicon">
                    <HiOutlineFolderDownload />
                </div>
            </div>
        </div>
    )
}

export default DownloadBlock