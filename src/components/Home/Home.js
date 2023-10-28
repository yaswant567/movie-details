import React, { useState, useEffect } from 'react';
import NowPlayingMovies from '../Movies/NowPlaying/NowPlayingMovies';
import NowPlayingSeries from '../TVseries/NowPlaying/NowPlayingSeries';
import PopularMovies from '../Movies/Popular/PopularMovies';
import PopularSeries from '../TVseries/Popular/PopularSeries';
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import UpComing from '../Movies/UpComing/UpComing';
import { fetchNowPlayingMovies } from '../API/MovieAPIs/MovieApi';
import { fetchNowPlayingSeries } from '../API/TvAPIs/TvApi';
import './home.css';
import { Link } from 'react-router-dom';



const Home = () => {

  const [nowPlaying, setNowPlaying] = useState('Movies');
  const [popular, setPopular] = useState('Movies');
  const [latest, setLatest] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);


  const shuffleArray = (arr) =>{
    return arr.sort(() => Math.random() - 0.5);
  }
  useEffect(() =>{
    const fetchLatest = async() =>{
      const movieData = await fetchNowPlayingMovies(1);
      const seriesData = await fetchNowPlayingSeries(1);
      let response = [...movieData.data.results, ...seriesData.data.results];
      response = shuffleArray(response);

      setLatest(response);
    }
    fetchLatest();
  },[])


  const handleCarousel = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % latest.length);
  };

  useEffect(() => {
    const carouselInterval = setInterval(handleCarousel, 4000); // Change image every 4 seconds 

    return () => clearInterval(carouselInterval); // Clean up the interval

  }, [latest]);

  return (
    <div className='home'>
      <div className='home_latest'>
      <div className="latest">
          {latest.map((item, index) => (
            <img className='latest_backdrop'
              src={`https://www.themoviedb.org/t/p/w1280/${item?.backdrop_path}`}
              alt="no img"
              key={index}
              style={{
                display: index === carouselIndex ? 'block' : 'none', 
              }}
            />
          ))}
        </div>
      </div>

      <div className='home_nowPlaying'>
        <div className='nowplaying_Type'>
          <span className='nowplaying_text'>Now Playing {`${nowPlaying}`}</span>
          <div className='Type'>
            <span className={`type movie ${nowPlaying === 'Movies' ? 'playingShow' : ''}`} onClick={() => setNowPlaying('Movies') }>Movies</span>
            <span className={`type tv ${nowPlaying === 'Series' ? 'playingShow' : ''}`} onClick={() => setNowPlaying('Series')}>TV</span>
          </div>
          { nowPlaying === 'Movies' ? 
                (<Link to='/Movies/NowPlaying'><span className='more'> More <ReadMoreRoundedIcon fontSize='large'/> </span></Link>
                ):(
                 <Link to='/TVseries/Nowplaying'><span className='more'> More <ReadMoreRoundedIcon fontSize='large'/> </span></Link>
                 )}
        </div>
        {(nowPlaying === 'Movies') ? <NowPlayingMovies/> : <NowPlayingSeries/>}
      </div>
      <div className='home_popular'>
        <div className='popular_Type'>
          <span className='popular_text'>Popular {`${popular}`}</span>
          <div className='Type'>
            <span className={`type movie ${popular === 'Movies' ? 'popularShow' : ''}`} onClick={() => setPopular('Movies') }>Movies</span>
            <span className={`type tv ${popular === 'Series' ? 'popularShow' : ''}`} onClick={() => setPopular('Series')}>TV</span>
          </div>
          <span className='more'>More <ReadMoreRoundedIcon fontSize='large'/></span>
        </div>
        {(popular === 'Movies') ? <PopularMovies/> : <PopularSeries/>}
      </div>
      <div className='home_UpComing'>
        <div className='UpComing_Type'>
          <span className='UpComing_text'>UpComing Movies</span>
          <span className='more'>More <ReadMoreRoundedIcon fontSize='large'/></span>
        </div>
        <UpComing/>
      </div>
    </div>
  )
}

export default Home