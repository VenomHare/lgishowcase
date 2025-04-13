import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from './../NavBar'
import Footer from './../Footer'
import "./../../styles//showcase.css"
import YouTubePlayer from './../YoutubePlayer';
import { fetchYouTubeRSS } from "./../utils.ts"
import Loader from '../Loader.tsx';
import Config, { Video } from '../../../config/config.ts'
import { Button, Card } from 'flowbite-react'



const Showcase = () => {
    const [loading, setLoading] = useState(true)
    const [videos, setVideos] = useState<Video[]>([])
    const [currentVideo, setCurrentVideo] = useState<string>("");

    useEffect(() => {
        fetchYouTubeRSS(Config.playlistId)
            .then((fetchedVideos) => {
                setVideos(fetchedVideos as Video[]);
                setCurrentVideo(fetchedVideos[0].link);
            })
            .finally(() => {
                setLoading(false);
            })
        return () => { }
    }, [])

    return (<>
        <Helmet>
            <title>Showcase | LGI Mods</title>
            <meta name="description" content="Watch showcase videos of our HCTP game mods and patches in action. See the latest features, roster updates, and gameplay modifications demonstrated live." />
            <meta name="keywords" content="HCTP mod showcase, wrestling game videos, mod demonstrations, LGI Mods showcase" />
            <meta property="og:title" content="Showcase | LGI Mods" />
            <meta property="og:description" content="Watch showcase videos of our HCTP game mods and patches in action. See the latest features, roster updates, and gameplay modifications demonstrated live." />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://lgimodz.vercel.app/showcase" />
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "VideoGallery",
                        "name": "LGI Mods Showcase",
                        "description": "Video demonstrations of HCTP game modifications",
                        "url": "https://lgimodz.vercel.app/showcase",
                        "video": ${JSON.stringify(videos.map(video => ({
                    "@type": "VideoObject",
                    "name": video.title,
                    "thumbnailUrl": video.thumbnail,
                    "url": video.link,
                    "embedUrl": video.link.replace("watch?v=", "embed/"),
                    "uploadDate": new Date().toISOString().split('T')[0]
                })))}
                    }
                `}
            </script>
        </Helmet>

        <NavBar active="showcase" />

        <main>
            {loading ? (
                <Loader />
            ) : (
                <article className='min-h-[95svh] flex flex-col items-center lg:items-start lg:gap-5 lg:flex-row'>
                    <div className='sticky top-[11svh] lg:mt-[10svh] xl:mt-[2svh] left-0 mt-4 shadow-md w-full aspect-video max-h-[50svh] lg:max-h-[100svh] lg:aspect-video lg:w-[60svw]'>
                        <YouTubePlayer url={currentVideo} />
                        <div className='hidden lg:flex lg:flex-col lg:justify-around h-[20svh]'>
                            <h2 className='font-Funnel text-2xl text-offwhite'>{videos.find(v=>v.link==currentVideo)?.title}</h2>
                            <Button color='red' size='lg' onClick={()=>window.open(videos.find(v=>v.link==currentVideo)?.link)}>Watch on Youtube</Button>
                        </div>
                    </div>
                    <div className='lg:w-[40svw]'>
                        <h3 className='text-2xl text-primary font-bold font-Funnel mt-3'>More Videos</h3>
                        <div className="w-[90svw] lg:w-[90%] min-h-[65svh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 justify-items-center gap-4 my-7">
                            {videos.map((video, i) =>
                                <div key={i} className={`
                                    w-full flex flex-col items-center shadow-md shadow-gray-400/40 rounded-xl overflow-clip 
                                    lg:flex-row cursor-pointer
                                `} onClick={()=>setCurrentVideo(video.link)}>
                                    <img src={video.thumbnail} alt={"Thumbnail "+i} className='object-contain max-h-[90%] lg:max-h-full lg:max-w-[50%]' />
                                    <p className='text-md px-6 py-3 font-semibold font-Jost text-offwhite'>{video.title}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            )}
        </main>

        <Footer />
    </>)
}

export default Showcase
