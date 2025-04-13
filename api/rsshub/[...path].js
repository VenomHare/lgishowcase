import fetch from 'node-fetch';

export default async function handler(req, res) {
  const rawPath = req.query['id'];
  console.log(req.query);
  console.log(rawPath);
  
  if (!rawPath) {
    return res.status(400).json({ message: 'Missing RSS path' });
  }
  
  const targetUrl = `https://rsshub.app/youtube/playlist/${rawPath}`;
  console.log('Fetching:', targetUrl);
  
  try {
    const response = await fetch(targetUrl, {
      headers: {
        'Accept': 'application/xml, application/rss+xml, text/xml, */*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://rsshub.app/',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    // Check if response is HTML (likely the homepage)
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      console.log('Received HTML instead of RSS feed. Content type:', contentType);
      return res.status(502).json({ 
        message: 'Received HTML instead of RSS feed',
        contentType: contentType 
      });
    }
    
    const text = await response.text();
    
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).send(text);
  } catch (error) {
    console.error('RSSHub Proxy Error:', error);
    return res.status(500).json({ message: 'Proxy failed', error: error.message });
  }
}