import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

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

    if (!videoId) {
        return <>
            <div className='youtubePlayer'>
                <h2>Invalid YouTube URL</h2>
                <h3>Click on video to play</h3>
            </div>
        </>;
    }

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.playVideo();
    };

    return (
        <div className='youtubePlayer'>
            <YouTube videoId={videoId}onReady={onPlayerReady}  />
        </div>
    );
};

export default YouTubePlayer;