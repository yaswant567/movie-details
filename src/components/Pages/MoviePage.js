import React from 'react'
import './page.css'
import { Link } from 'react-router-dom';

const MoviePage = (showType) => {
    const FormatDate = (dateString) =>{
        const date = new Date(dateString);
        const year = date.getFullYear();
        return year;
    }
  return (
    <div className='Page'>
      {showType.details.map((showT) =>{ 
        return(showT.data && showT.data.poster_path && (<Link to={`/MovieDescription/${showT.data.id}`} key={showT.data.id} className='custom-link'>
        <div className='show'>

          <div className='show_poster'>
          {showT.data && showT.data.poster_path && (<img src={`https://www.themoviedb.org/t/p/w185/${showT.data.poster_path}`} alt="Please Reload the Page" />)}
          </div>
          <div className='show_details'>
            <span className='title'>{showT.data && showT.data.poster_path && ((showT.data.title)||(showT.data.name))}</span>
            <span className='time'>
                <span>{FormatDate(showT.data.release_date)} ||  {showT.data.runtime} min</span>
                <span>Movie</span>
            </span>
          </div>

        </div></Link>));
      })}
    </div>
  )
}

export default MoviePage