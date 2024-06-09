import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Search from './components/Search';
import News from './components/news';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Trend Search</h1>
      </header>
      <div className="intro">
        <p>현재 가장 이슈가 되고 있는 음식들과 그것들에 대한 레시피를 검색해 보세요.</p>
        <img src="https://www.suwon.ac.kr/usr/images/suwon/ui_img05.png" alt="소개 이미지" />
      </div>
      <main className="main">
        <section className="section">
          <h2>블로그 검색</h2>
          <Search />
        </section>
        <section className="section">
          <h2>음식/맛집 뉴스</h2>
          <News />
        </section>
      </main>
    </div>
  );
}

export default App;
