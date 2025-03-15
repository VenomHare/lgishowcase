import React from 'react'
import { Helmet } from 'react-helmet-async'
import './../../styles/downloads.css'
import NavBar from '../NavBar'
import Footer from '../Footer'
import DownloadBlock from '../DownloadBlock'
import { DownloadPageData } from '../../../config/config' 

const Downloads = () => {
    return (<>
        <Helmet>
            <title>Community Downloads | LGI Mods</title>
            <meta name="description" content="Download community tools and patches. Access a collection of useful tools and patches shared by our gaming community." />
            <meta name="keywords" content="community downloads, gaming tools, patches, LGI Mods community" />
            <meta property="og:title" content="Community Downloads | LGI Mods" />
            <meta property="og:description" content="Download community tools and patches. Access a collection of useful tools and patches shared by our gaming community." />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://lgimodz.vercel.app/community" />
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Community Downloads",
                        "description": "Collection of community tools and patches for HCTP game",
                        "url": "https://lgimodz.vercel.app/community",
                        "hasPart": ${JSON.stringify(DownloadPageData.map(item => ({
                            "@type": "SoftwareApplication",
                            "name": item.title,
                            "description": item.description,
                            "applicationCategory": "Game Tool",
                            "downloadUrl": item.downloadLink
                        })))}
                    }
                `}
            </script>
        </Helmet>
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