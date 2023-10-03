import React, { useEffect } from 'react'
import { fetchMovieCredits } from '../API/MovieAPIs/MovieCreditsApi'
import { useState } from 'react'

const Credits = () => {
  const [castDetails, setCastDetails] = useState([]);
  useEffect(() =>{
    const MovieCast = async() =>{
        const response = await fetchMovieCredits()
    }
  })
  return (
    <div className='credits'>
     
    </div>
  )
}

export default Credits