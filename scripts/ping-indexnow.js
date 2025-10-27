import 'dotenv/config';

async function ping() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    console.error('INDEXNOW_KEY not found in environment variables');
    process.exit(1);
  }

  const host = 'www.cobaltsoft.ca';
  const urlList = ['https://www.cobaltsoft.ca/'];
  const keyLocation = `https://${host}/key.txt`;

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList,
      }),
    });

    if (!response.ok) {
      console.error(`IndexNow ping failed with status ${response.status}`);
      const text = await response.text();
      console.error('Response:', text);
    } else {
      console.log(`IndexNow ping successful! Status: ${response.status}`);
    }
  } catch (err) {
    console.error('Error sending IndexNow ping:', err);
  }
}

ping();
