import fetch from 'node-fetch';

export default async function handler(req, res) {
  const rawPath = req.query['0']; // 👈 fix here
  console.log(JSON.stringify(req));
  if (!rawPath) {
    return res.status(400).json({ message: 'Missing RSS path' });
  }

  const targetUrl = `https://rsshub.app/${rawPath}`;
  console.log('Fetching:', targetUrl);

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
