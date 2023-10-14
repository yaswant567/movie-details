import React, { useEffect, useState } from 'react'
import { fetchNowPlayingMovies } from '../../API/MovieAPIs/MovieApi'

import './nowPlayingMovies.css'

const NowPlayingMovies = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() =>{
        const fetchData = async() => {
            const response = await fetchNowPlayingMovies();
            console.log('response',response.data.results);
            setMovieData(response.data.results);
        }
        fetchData();
    },[])

  return (
    <div className='nowPlaying'>        
           {movieData.map((item) =>{
              return(<div className='card'>
                 <span className='left'></span>
                 <span className='right'></span>
                 <span className='card_poster'>
                    {item.poster_path && (<img src={`https://www.themoviedb.org/t/p/w185/${item.poster_path}`} alt='no img'/>)}
                 </span>
                 <span>
                 s
                 </span>
              </div>)
           })}
  </div>
  )
}

export default NowPlayingMovies