export async function fetchYouTubeRSS(channelId: string) {
    try {
        const response = await fetch(`/api/rss?channel_id=${channelId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch RSS feed');
        }

        const text = await response.text();
        console.log("api: ", text);
        // Parse the XML response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'application/xml');
        const items = Array.from(xmlDoc.getElementsByTagName('entry'));

        // Map XML entries to a simpler data structure
        return items.map(item => ({
            title: item.getElementsByTagName('title')[0]?.textContent || '',
            link: item.getElementsByTagName('link')[0]?.getAttribute('href') || '',
            thumbnail: item.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'thumbnail')[0]?.getAttribute('url') || '',
        }));
    } catch (error) {
        console.error('Error fetching or parsing RSS feed:', error);
        return [];
    }
}
