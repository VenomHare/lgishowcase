export async function fetchYouTubeRSS(channelId: string) {
    try {
        const response = await fetch(`/api/rss?channel_id=${channelId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch RSS feed');
        }

        const text = await response.text();
        // Parse the XML response
        const items = JSON.parse(text);
        return items;
    } catch (error) {
        console.error('Error fetching or parsing RSS feed:', error);
        return [];
    }
}
