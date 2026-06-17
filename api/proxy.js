// api/proxy.js
export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL diperlukan' });
  try {
    const response = await fetch(decodeURIComponent(url));
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*'); // Bypass agar frontend bisa baca
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Proxy gagal' });
  }
}
