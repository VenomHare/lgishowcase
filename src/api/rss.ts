// api/fetchYouTubeFeed.ts
import { Request, Response } from 'express';
import { parseStringPromise } from 'xml2js';

export default async function handler(req: Request, res: Response) {
    const { channelId } = req.query;

    if (!channelId) {
        return res.status(400).json({ message: 'Missing channelId parameter' });
    }

    try {
        const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const response = await fetch(feedUrl);

        if (!response.ok) {
            return res.status(response.status).json({ message: 'Failed to fetch RSS feed' });
        }

        const xmlString = await response.text();

        // Parse the XML response
        const result = await parseStringPromise(xmlString);
        const items = result.feed.entry;

        // Map XML entries to a simpler data structure
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
