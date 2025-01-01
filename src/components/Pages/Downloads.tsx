import React from 'react'
import './../../styles/downloads.css'
import NavBar from '../NavBar'
import Footer from '../Footer'
import DownloadBlock from '../DownloadBlock'
import { DownloadPageData } from '../../../config/config' 

const Downloads = () => {
    return (<>
        <NavBar active='community' />
        <div className='downloadssParent'>
            <div className="downloadContent">
                <div className='DownloadsTitle'>
                    <div className="dTitle">Community Downloads</div>
                    <div className="dDesc">Here you will find downloads for tools and patches</div>
                </div>
                <div className="downloadData">
                    {
                        DownloadPageData.map((data, index)=><>
                            <DownloadBlock key={`Block ${index}`} title={data.title} downloadLink={data.downloadLink} description={data.description}/>
                        </>)
                    }
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Downloads    