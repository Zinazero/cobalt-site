async function ping() {
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.cobaltsoft.ca',
        key: process.env.INDEXNOW_KEY,
        keyLocation: 'https://www.cobaltsoft.ca/key.txt',
        urlList: ['https://www.cobaltsoft.ca/'],
      }),
    });
    console.log('IndexNow ping response status:', res.status);
  } catch (err) {
    console.error('IndexNow ping failed:', err);
  }
}

ping();
