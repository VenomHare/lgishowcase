import fetch from 'node-fetch';

export default async function handler(req, res) {
  const rawPath = req.query['id'];
  
  if (!rawPath) {
    return res.status(400).json({ message: 'Missing playlist ID' });
  }
  
  // Use YouTube's direct feed URL instead of RSSHub
  const ytFeedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${rawPath}`;
  console.log('Fetching YouTube feed directly:', ytFeedUrl);
  
  try {
    const response = await fetch(ytFeedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/xml, application/atom+xml, text/xml, */*'
      },
      redirect: 'follow',
      timeout: 10000
    });
    
    console.log('Response status:', response.status);
    const contentType = response.headers.get('content-type');
    console.log('Content type:', contentType);
    
    const text = await response.text();
    console.log('Response text length:', text.length);
    
    // Set appropriate headers
    res.setHeader('Content-Type', contentType || 'application/xml');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    return res.status(200).send(text);
    
  } catch (error) {
    console.error('YouTube Feed Proxy Error:', error);
    return res.status(500).json({ 
      message: 'Proxy failed', 
      error: error.message,
      stack: error.stack
    });
  }
}