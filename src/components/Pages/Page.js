import React from 'react'
import './page.css'

const Page = (showType) => {
    const FormatDate = (dateString) =>{
        const date = new Date(dateString);
        const year = date.getFullYear();
        return year;
    }
  return (
    <div className='Page'>
      {showType.details.map((type) =>{
        return(type.data && type.data.poster_path && <div className='show' key={type.data.id} onClick={() => }>
          <div className='show_poster'>
          {type.data && type.data.poster_path && (<img src={`https://www.themoviedb.org/t/p/w185/${type.data.poster_path}`} alt="Description" />)}
          </div>
          <div className='show_details'>
            <span className='title'>{type.data && type.data.poster_path && (type.data.title)}</span>
            <span className='time'>
                <span>{FormatDate(type.data.release_date)} ||  {type.data.runtime} min</span>
                <span>Movie</span>
            </span>
          </div>
        </div>);
      })}
    </div>
  )
}

export default Page