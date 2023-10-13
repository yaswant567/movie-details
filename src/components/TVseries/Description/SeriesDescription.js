import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSeriesDetails } from '../../API/TvAPIs/TvApi';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Credits from '../../Credits/Credits'

import './seriesDescription.css'


const SeriesDescription = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() =>{
      const fetchDetail = async() =>{
        const data = await fetchSeriesDetails(id);
        setDetail(data);
      }
      fetchDetail();
    },[id])

    const fetchYear = (getDate) =>{
      const date = new Date(getDate);
      return date.getFullYear();
    }

  return (
    <div className='seriesDescription'>

      <div className='description'>
        <div className='backDrop' style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1280/${detail?.data?.backdrop_path})`}}>
        </div>
        <div className='poster_desc'>
         <div className='poster' >
           {detail?.data?.poster_path && <img src={`https://www.themoviedb.org/t/p/w342/${detail.data.poster_path}`} alt="Please Reload the Page" />}
          </div>
          <div className='desc'>
            <span className='desc_title'>{detail?.data?.name} - ({fetchYear(detail?.data?.first_air_date)})</span>
            <span className='desc_date'>
              {(detail.adult === true) ? (<span className='adult'>PG-18+</span>):(<span className='adult'>PG-13+</span>)} <FiberManualRecordIcon fontSize='small'/>
              <span className='date'>{detail?.data?.first_air_date}</span> <FiberManualRecordIcon fontSize='small'/>
              {detail?.data?.production_countries.map((country) =>{
                return(<span className='country'>{country.iso_3166_1}</span>)
              })}
            </span>
            <span className='desc_genres'><b>Genre:</b> {detail?.data?.genres?.map((item) =>{
                return (<span className='genre'> {item.name}</span>)
              })}</span>
            <span className='desc_type'><b>Type:</b> {(detail?.data?.type)? detail?.data?.type : <b>--</b>}</span>
            <span className='desc_originalTitle'><b>Original Title:</b> {(detail?.data?.original_name) ? detail?.data?.original_name : <b>--</b>}</span>
            <span className='desc_tagline'><b>Tagline: </b>{(detail?.data?.tagline) ? detail?.data?.tagline : <b>--</b> }</span>
            <span className='desc_overview'><b>Overview:</b> {(detail?.data?.overview) ? detail?.data?.overview : <b>--</b>}</span>
          </div>
        </div>
      </div>

        <div className='cast'>
          {}
        </div>
    </div>
  )
}

export default SeriesDescription