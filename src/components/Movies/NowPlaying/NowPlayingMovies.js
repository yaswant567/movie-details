import React, { useEffect, useState } from 'react';
import { fetchNowPlayingMovies } from '../../API/MovieAPIs/MovieApi';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import './nowPlayingMovies.css';
import { Link } from 'react-router-dom';

const NowPlayingMovies = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchNowPlayingMovies(1);
      setMovieData(response.data.results);
    }
    fetchData();
  }, []);

  const pressPrev = () => {
    const box = document.querySelector('.nowplaying_Movies');
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width + 45;
    }
  }

  const pressNext = () => {
    const box = document.querySelector('.nowplaying_Movies');
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width - 45;
    }
  }

  const handleClick = (id) =>{

  }
  return (
    <div className='nowPlaying'>
      <div className='butn'>
        <span className='left' onClick={pressPrev}><ArrowBackIosRoundedIcon fontSize='large' /></span>
        <span className='right' onClick={pressNext}><ArrowForwardIosRoundedIcon fontSize='large' /></span>
      </div>
      
      <div className='nowplaying_Movies'>
      {movieData.map((item) => (
        <div className='card' key={item.id} onClick={handleClick(item.id)}>
        <Link to={`/MovieDescription/${item.id}`} className='custom_link'>
          <span className='card_poster'>
            {item.poster_path && (
              <img src={`https://www.themoviedb.org/t/p/w185/${item.poster_path}`} alt='no img' />
            )}
          </span>
          <span className='card_title'>{item.title}</span>
          </Link>
        </div>
        
      ))}
      </div>
      
    </div>
  )
}

export default NowPlayingMovies;
