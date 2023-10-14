import React, { useEffect, useState } from 'react';
import { fetchNowPlayingMovies } from '../API/MovieAPIs/MovieApi';
import { fetchNowPlayingSeries } from '../API/TvAPIs/TvApi';
import NowPlayingMovies from '../Movies/NowPlaying/NowPlayingMovies';
import { responsiveFontSizes } from '@mui/material';
import './home.css';

const Home = () => {
  // const [movie, setMovie] = useState([]);
  // const [series, setSeries] = useState([]);
  // useEffect(() => {
  //   const fetchResponse = async() =>{
  //     const movieResponse = await fetchNowPlayingMovies();
  //     setMovie(movieResponse.data.results);
  //     const seriesResponse = await fetchNowPlayingSeries();
  //     setSeries(seriesResponse.data.results);
  //   }
  //   fetchResponse();
    
  // },[])
  // console.log("movie",movie);
  
  return (
    <div className='home'>
      <div className='home_nowPlaying'>
        <NowPlayingMovies/>
      </div>
    </div>
  )
}

export default Home