import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from './../NavBar'
import Footer from './../Footer'
import "./../../styles//showcase.css"
import YouTubePlayer from './../YoutubePlayer';
import { fetchYouTubeRSS } from "./../utils.ts"
import Loader from '../Loader.tsx';

const channelId = import.meta.env.VITE_CHANNEL_ID;

type Video = {
    title: string;
    link: string;
    thumbnail: string
}

const Showcase = () => {
    const [loading, setLoading] = useState(true)
    const [videos, setVideos] = useState<Video[]>([])
    const [currentVideo, setCurrentVideo] = useState<string>("");

    useEffect(() => {
        fetchYouTubeRSS(channelId)
            .then((fetchedVideos) => {
                setVideos(fetchedVideos);
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
                <article className='ShowcaseParent'>
                    <section className="videoParent">
                        <div className="player">
                            <YouTubePlayer url={currentVideo} />
                        </div>
                        <nav className="videolist">
                            {videos.map((video, index) => (
                                <button
                                    key={index}
                                    onClick={() => { setCurrentVideo(video.link) }}
                                    className='ShowcaseVidParent'
                                >
                                    <h2 className='yttitle'>{video.title}</h2>
                                    <img src={video.thumbnail} alt={video.title} className='ytthumb' />
                                </button>
                            ))}
                        </nav>
                    </section>
                </article>
            )}
        </main>

        <Footer />
    </>)
}

export default Showcase