import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { channel_id: channelId } = req.query;

    if (!channelId) {
        return res.status(400).json({ message: 'Missing channel_id parameter' });
    }

    try {
        const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const response = await fetch(feedUrl);

        if (!response.ok) {
            return res.status(response.status).json({ message: 'Failed to fetch RSS feed' });
        }

        const xmlString = await response.text();
        const result = await parseStringPromise(xmlString);
        const items = result.feed.entry;

        const formattedItems = items.map((item: any) => ({
            title: item.title[0],
            link: item.link[0].$.href,
            thumbnail: item['media:thumbnail'][0].$.url,
        }));

        res.status(200).json(formattedItems);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
