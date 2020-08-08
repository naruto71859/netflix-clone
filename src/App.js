import React from 'react';
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import './css/App.css'
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
        <Navbar/>
        <Banner movieType={request.netflixmovies} />
        <Row title={'Netflix Movies'} movieType={ request.netflixmovies} isLargeRow />
        <Row title={'Trending Movies'} movieType={ request.trendingmovies}  />
        <Row title={'Action Movies'} movieType={ request.actionmovies}  />
        <Row title={'Drama Movies'} movieType={ request.dramamovies}  />
        <Row title={'Horror Movies'} movieType={ request.horrormovies}  />
    </div>
  );
}

export default App;
