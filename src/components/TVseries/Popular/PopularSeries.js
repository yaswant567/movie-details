import React, { useEffect, useState } from 'react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import './popularSeries.css'
import { fetchPopularSeries } from '../../API/TvAPIs/TvApi';
import { Link } from 'react-router-dom';

const PopularSeries = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPopularSeries();
      setMovieData(response.data.results);
    }
    fetchData();
  }, []);

  const pressPrev = () => {
    const box = document.querySelector('.popular_Series');
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width + 45;
    }
  }

  const pressNext = () => {
    const box = document.querySelector('.popular_Series');
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width - 45;
    }
  }

  return (
    <div className='popular'>
      <div className='butn'>
        <span className='left' onClick={pressPrev}><ArrowBackIosRoundedIcon fontSize='large' /></span>
        <span className='right' onClick={pressNext}><ArrowForwardIosRoundedIcon fontSize='large' /></span>
      </div>
      
      <div className='popular_Series'>
      {movieData.map((item) => (
        <div className='card' key={item.id}>
        <Link to={`/SeriesDescription/${item.id}`} className='custom_link'>
          <span className='card_poster'>
            {item.poster_path && (
              <img src={`https://www.themoviedb.org/t/p/w185/${item.poster_path}`} alt='no img'/>
            )}
          </span>
          <span className='card_title'>{item.name}</span>
        </Link>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default PopularSeries;
