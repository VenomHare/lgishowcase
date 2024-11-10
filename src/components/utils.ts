export async function fetchRecentVideos(apiKey: string, channelId: string) {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&type=video&maxResults=10`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching videos: ${response.statusText}`);
    }

    const data = await response.json();
    return data.items.map((item: any) => ({
        title: item.snippet.title,
        link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        thumbnail: item.snippet.thumbnails.medium.url,
    }));
}   // src/utils/fetchYouTubeRSS.ts
export async function fetchYouTubeRSS(channelId: string) {
    const response = await fetch(`/api/rss?channel_id=${channelId}`);
    const text = await response.text();

    // Parse the XML response
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'application/xml');
    const items = Array.from(xmlDoc.getElementsByTagName('entry'));
    // Map XML entries to a simpler data structure
    return items.map(item => ({
        title: item.getElementsByTagName('title')[0]?.textContent || '',
        link: item.getElementsByTagName('link')[0]?.getAttribute('href') || '',
        thumbnail: item.getElementsByTagName('media:thumbnail')[0]?.getAttribute('url') || '',
    }));
}