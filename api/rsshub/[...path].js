import fetch from 'node-fetch';

export default async function handler(req, res) {
  const rawPath = req.query['id'];
  
  if (!rawPath) {
    return res.status(400).json({ message: 'Missing RSS path' });
  }
  
  const targetUrl = `https://rsshub.app/youtube/playlist/${rawPath}`;
  console.log('Fetching:', targetUrl);
  
  try {
    // Try direct approach with enhanced headers
    const response = await fetch(targetUrl, {
      headers: {
        'Accept': 'application/xml, application/rss+xml, text/xml, */*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://rsshub.app/',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'DNT': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'Connection': 'keep-alive'
      },
      // Some sites check for redirect following behavior
      redirect: 'follow',
      // Add a timeout
      timeout: 10000
    });
    
    const contentType = response.headers.get('content-type');
    const text = await response.text();
    
    // If we got HTML instead of XML, try to extract RSS URL and fetch again
    if (contentType && contentType.includes('text/html')) {
      console.log('Received HTML. Attempting alternative approach...');
      
      // Check if this is an actual YouTube playlist ID
      const youtubePlaylistUrl = `https://www.youtube.com/playlist?list=${rawPath}`;
      
      // Try using YouTube's RSS feed directly instead of RSSHub
      const ytFeedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${rawPath}`;
      console.log('Trying direct YouTube feed URL:', ytFeedUrl);
      
      const ytResponse = await fetch(ytFeedUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/xml, application/rss+xml, text/xml, */*'
        }
      });
      
      const ytContent = await ytResponse.text();
      const ytContentType = ytResponse.headers.get('content-type');
      
      if (ytContentType && (ytContentType.includes('xml') || ytContentType.includes('application/atom+xml'))) {
        res.setHeader('Content-Type', ytContentType || 'application/xml');
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(200).send(ytContent);
      } else {
        return res.status(502).json({ 
          message: 'Failed to fetch RSS feed from both RSSHub and YouTube directly',
          originalContentType: contentType,
          ytContentType: ytContentType
        });
      }
    }
    
    // If we're here, we got XML from the original request
    res.setHeader('Content-Type', contentType || 'application/xml');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).send(text);
    
  } catch (error) {
    console.error('RSS Proxy Error:', error);
    return res.status(500).json({ message: 'Proxy failed', error: error.message });
  }
}