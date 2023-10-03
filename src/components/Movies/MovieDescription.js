import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../API/MovieAPIs/MovieApi'
import Credits from '../Credits/Credits'

import './movieDescription.css'


const MovieDescription = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() =>{
      const fetchDetail = async() =>{
        const data = await fetchMovieDetails(id);
        console.log('data:', data);
        setDetail(data);
      }
      fetchDetail();
    },[id])
    console.log(detail);

    const fetchYear = (getDate) =>{
      const date = new Date(getDate);
      return date.getFullYear();
    }

  return (
    <div className='movieDescription'>

      <div className='description'>
        <div className='backDrop' style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1280/${detail?.data?.backdrop_path})`}}>
        </div>
        <div className='poster_desc'>
         <div className='poster' >
           {detail?.data?.poster_path && <img src={`https://www.themoviedb.org/t/p/w342/${detail.data.poster_path}`} alt="Please Reload the Page" />}
          </div>
          <div className='desc'>
            <span className='desc_title'>{detail?.data?.title} - ({fetchYear(detail?.data?.release_date)})</span>
            <span className='desc_date'>
              {(detail.adult === true) ? (<span className='adult'>PG-18+</span>):(<span className='adult'>PG-13+</span>)} -
              <span className='date'>{detail?.data?.release_date}</span> -
              {detail?.data?.production_countries.map((country) =>{
                return(<span className='country'>{country.iso_3166_1}</span>)
              })}
            </span>
            <span className='desc_genres'><b>Genre:</b> {detail?.data?.genres?.map((item) =>{
                return (<span className='genre'> {item.name}</span>)
              })}</span>
            <span className='desc_originalTitle'><b>Original Title:</b> {detail?.data?.original_title}</span>
            <span className='desc_tagline'><b>Tagline: </b>{detail?.data?.tagline}</span>
            <span className='desc_overview'><b>Overview:</b> {detail?.data?.overview}</span>
          </div>
        </div>
      </div>

        <div className='cast'>
          {}
        </div>
    </div>
  )
}

export default MovieDescription