import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { path = [] } = req.query;
  const rssPath = Array.isArray(path) ? path.join('/') : path;

  const url = `https://rsshub.app/${rssPath}`;
  try {
    const response = await fetch(url);
    const text = await response.text();

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(text);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Proxy failed', error: err });
  }
}
