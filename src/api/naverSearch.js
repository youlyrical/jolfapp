import axios from 'axios';

const CLIENT_ID = 'TaHvsPI42FduE6SiSrGo';
const CLIENT_SECRET = 'nb9_GmxayH';

export const searchNaver = async (query) => {
    const response = await axios.post('http://localhost:5000/api/search', { query });
    return response.data.items;
  };

  export const searchNaverNews = async (query) => {
    const response = await axios.post('http://localhost:5000/api/news', {
      query,
      display: 10,
      start: 1,
      sort: 'date',
    });
    return response.data.items;
  };