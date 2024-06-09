// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/search', async (req, res) => {
  const { query } = req.body;
  try {
    const response = await axios.get('https://openapi.naver.com/v1/search/blog.json', {
      params: { query },
      headers: {
        'X-Naver-Client-Id': 'TaHvsPI42FduE6SiSrGo',
        'X-Naver-Client-Secret': 'nb9_GmxayH'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/news', async (req, res) => {
  const { query, display, start, sort } = req.body;
  try {
    const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {
      params: {
        query,
        display,
        start,
        sort,
      },
      headers: {
        'X-Naver-Client-Id': 'TaHvsPI42FduE6SiSrGo',
        'X-Naver-Client-Secret': 'nb9_GmxayH'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});