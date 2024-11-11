import NavBar from './../NavBar'
import Footer from './../Footer'
import "./../../styles//showcase.css"
import  YouTubePlayer from './../YoutubePlayer';
import { useEffect, useState } from 'react';
import { fetchYouTubeRSS} from "./../utils.ts"
const channelId = import.meta.env.VITE_CHANNEL_ID;

type Video = {
    title: string;
    link: string;
    thumbnail:string
}

const Showcase = () => {

    // const [error, setError] = useState<string|null>(null);
    const [videos, setVideos] = useState<Video[]>([])
    const [currentVideo, setCurrentVideo] = useState<string>("");


    useEffect(()=>{
        fetchYouTubeRSS(channelId)
            .then((fetchedVideos)=>{
                console.log("Feteched",fetchedVideos);
                setVideos(fetchedVideos);
                setCurrentVideo(fetchedVideos[0].link);
            })
            // .catch((err)=>{setError(err.message)});

        return () =>{}
    },[])

    return (<>
        <NavBar active="showcase" />
        <div className='ShowcaseParent'>
            <div className="videoParent">
                <div className="player">
                    <YouTubePlayer url={currentVideo} />
                </div>  
                <div className="videolist">

                    {videos.map((video, index) => (
                        <div key={index} onClick={()=>{setCurrentVideo(video.link)}} className='ShowcaseVidParent'>
                        <p className='yttitle'>{video.title}</p>
                        <img src={video.thumbnail} alt={video.title} className='ytthumb'/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
        <Footer />
    </>
    )
}

export default Showcase