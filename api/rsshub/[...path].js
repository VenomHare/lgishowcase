import fetch from 'node-fetch';

export default async function handler(req, res) {
  // Get dynamic route segments: e.g., ['youtube', 'playlist', 'ID']
  const path = req.query.path;
  console.log(req);
  console.log(path);
  // Handle missing path
  if (!path || (Array.isArray(path) && path.length === 0)) {
    return res.status(400).json({ message: 'Missing RSS path' });
  }

  // Construct full path
  const rssPath = Array.isArray(path) ? path.join('/') : path;
  const targetUrl = `https://rsshub.app/${rssPath}`;
  console.log(targetUrl);
  try {
    const response = await fetch(targetUrl);
    const text = await response.text();

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).send(text);
  } catch (error) {
    console.error('RSSHub Proxy Error:', error);
    return res.status(500).json({ message: 'Proxy failed', error });
  }
}
