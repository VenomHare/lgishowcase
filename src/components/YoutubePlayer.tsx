import React, { useState } from 'react';
import ReactPlayer from 'react-player';
// Helper function to extract YouTube video ID from a URL
function extractVideoId(url: string): string | null {
    const regExp = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|embed)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

type YouTubePlayerProps = {
    url: string;
};

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url }) => {
    const videoId = extractVideoId(url);
    
    const [isPlaying, setIsPlaying] = useState(false);

    if (!videoId) {
        return <>
            <div className='w-full p-5'>
                <h2>Invalid YouTube URL</h2>
                <h3>Click on video to play</h3>
            </div>
        </>;
    }

    return (
            <ReactPlayer className="w-full h-50" controls playing={isPlaying} muted url={url} width="100%" height="100%" onReady={async ()=>{setTimeout(()=>setIsPlaying(true), 500)}}/>
    );
};

export default YouTubePlayer;