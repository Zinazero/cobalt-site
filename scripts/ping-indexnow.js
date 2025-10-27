import fetch from 'node-fetch';

const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const SITE_URL = 'https://www.cobaltsoft.ca';

async function ping() {
  const url = `https://www.bing.com/indexnow?url=${encodeURIComponent(SITE_URL)}&key=${INDEXNOW_KEY}`;

  try {
    const res = await fetch(url, { method: 'GET' });
    if (res.ok) {
      console.log('IndexNow ping successful');
    } else {
      console.error('ndexNow ping failed', res.status, await res.text());
    }
  } catch (err) {
    console.error('IndexNow ping error', err);
  }
}

ping();
