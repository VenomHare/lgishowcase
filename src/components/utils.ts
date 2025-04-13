export async function fetchYouTubeRSS(playlistId: string) {
    try {
        const response = await fetch(`/api/rss/${playlistId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch RSS feed');
        }

        const text = await response.text();
        console.log(text);
        // Parse the XML response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");

        const items = Array.from(xmlDoc.getElementsByTagName("item")).map(entry => ({
            title: entry.getElementsByTagName('title')[0]?.innerHTML ?? "",
            link: entry.getElementsByTagName('link')[0]?.innerHTML ?? "",
            thumbnail: entry.getElementsByTagName('enclosure')[0]?.getAttribute('url')
        }))
        return items;
    } catch (error) {
        console.error('Error fetching or parsing RSS feed:', error);
        return [];
    }
}
