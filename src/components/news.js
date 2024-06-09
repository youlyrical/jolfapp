// src/components/News.js
import React, { useState, useEffect } from 'react';
import { searchNaverNews } from '../api/naverSearch';

const News = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const items = await searchNaverNews('음식/맛집');
        console.log(items); // API 응답 데이터 확인
        setResults(items);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <ul>
        {results.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
 
              <p dangerouslySetInnerHTML={{ __html: item.title }} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;