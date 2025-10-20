import axios from 'axios';

export default async function handler(req, res) {
  const { word } = req.query;

  if (!word) {
    return res.status(400).json({ error: 'No word provided' });
  }

  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    res.status(200).json(response.data);
  } catch (err) {
    console.error('Error fetching dictionary data:', err.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
