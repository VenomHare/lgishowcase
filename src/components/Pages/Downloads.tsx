import { Helmet } from 'react-helmet-async'
import NavBar from '../NavBar'
import Footer from '../Footer'
import DownloadBlock from '../community/DownloadBlock'
import Config from '../../config/config'

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
                        "hasPart": ${JSON.stringify(Config.DownloadPageData.map(item => ({
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
        <div className='min-h-[70svh]'>
            <div className="relative w-[90svw] lg:w-[70svw] mx-auto my-[10svh] px-[2svw] py-[5svh] bg-black-background border-3 border-primary rounded-lg">
                <div className='absolute top-[-5svh] left-[2svw] bg-primary font-Funnel p-[1svw] rounded-2xl'>
                    <div className="text-2xl lg:text-4xl font-extrabold">Community Downloads</div>
                    <div className="text-lg lg:text-xl">Here you will find downloads for tools and patches</div>
                </div>
                <div className="overflow-y-hidden overflow-x-visible mt-[4svh] animate-delay h-fit">
                    {
                        Config.DownloadPageData.map((data, index)=><>
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