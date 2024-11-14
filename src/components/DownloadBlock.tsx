import React from 'react'
import { HiOutlineFolderDownload } from "react-icons/hi";
import { DownloadData } from './config';

const DownloadBlock: React.FC<DownloadData> = ({ title, downloadLink, key, description }) => {
    return (
        <div className='downloadBlockParent' key={key}>
            <div className='downloadBlockTitle'>
                {title}
                {
                    description != null ? <div className="downloadDescription">{description}</div> : <></>
                }
            </div>
            <a className='downloadBlockButton' href={downloadLink} target='_blank'>
                <div className='downloadbuttontext'>
                    Download
                </div>
                <div className="downloadicon">
                    <HiOutlineFolderDownload />
                </div>
            </a>
        </div>
    )
}

export default DownloadBlock