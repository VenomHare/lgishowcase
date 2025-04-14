import React from 'react'
import { HiOutlineFolderDownload } from "react-icons/hi";
import { DownloadData } from '../../types';

const DownloadBlock: React.FC<DownloadData> = ({ title, downloadLink, key, description }) => {
    return (
        <div className='overflow-hiddem h-[10svh] w-[95%] md:h-[10svh] bg-gray-500/6 rounded-2xl border-0 shadow-sm shadow-gray-400 my-[10px] mx-auto flex justify-around items-center font-Jost' key={key}>
            <div className=' text-md md:text-2xl w-[55%]'>
                { title }
                {
                    description != null ? <div className="downloadDescription">{description}</div> : <></>
                }
            </div>
            <div className='flex items-center justify-around w-[15svw] xl:w-[10svw] h-[5svh] rounded-lg md:text-2xl font-semibold font-Funnel text-offwhite p-[10px] bg-primary cursor-pointer hover:transform-[scale(1.05)] active:transform-[scale(0.95)]' onClick={()=>{window.open(downloadLink)}}>
                <div className='hidden md:block text-md md:text-xl'>
                    Download
                </div>
                <div className="text-3xl md:hidden grid">
                    <HiOutlineFolderDownload />
                </div>
            </div>
        </div>
    )
}

export default DownloadBlock