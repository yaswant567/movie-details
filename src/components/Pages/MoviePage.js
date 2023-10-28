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
      {showType?.details.map((showT) =>{ 
        return(showT?.poster_path && (<Link to={`/MovieDescription/${showT.id}`} key={showT.id} className='custom-link'>
        <div className='show'>
 
          <div className='show_poster'>
          {showT.poster_path && (<img src={`https://www.themoviedb.org/t/p/w185/${showT.poster_path}`} alt="Please Reload the Page" />)}
          </div>
          <div className='show_details'>
            <span className='title'>{showT.poster_path && ((showT.title)||(showT.name))}</span>
            <span className='time'>
                <span>{FormatDate(showT.release_date)} ||  {showT.runtime} min</span>
                <span>Movie</span>
            </span>
          </div>

        </div></Link>));
      })}
    </div>
  )
}

export default MoviePage