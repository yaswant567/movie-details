import React,{useEffect, useState} from 'react'
import { fetchMovieIDs, fetchMovieDetails } from '../../API/MovieAPIs/MovieApi'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import MoviePage from '../../Pages/MoviePage';

import './movies.css'

const Movies = () => {
    const [movieIDs, setMovieIDs] = useState([]);
    const [movieDetails, setMovieDetails] = useState([]);
    const [pageNo, setPageNo] = useState(1);

    const handlePageNo = (page) =>{
      setPageNo((prevPageNo) => {
        if (page === 'nxt') {
          return prevPageNo + 1;
        }
        if (page === 'prev' && prevPageNo > 1) {
          return prevPageNo - 1;
        }
        return prevPageNo;
      });

      // Scrolls  the webpage to the Top of the window
      window.scrollTo({top:0, behavior: 'smooth',});

    }

    useEffect(() =>{
        const fetchData = async() =>{
            try{
              const ids = await fetchMovieIDs(pageNo);
              setMovieIDs(ids);

              const detailsPromise = ids.map(async(id) =>{
                const data = await fetchMovieDetails(id.id);
                return data;
              })

              const details = await Promise.all(detailsPromise);
              const filteredDetails = details.filter((data) => data !== undefined);
              setMovieDetails(filteredDetails);
            }
            catch(error){
              console.error('Error fetching data : ', error);
            }
        }

        fetchData();
    },[pageNo]);
    console.log({pageNo},movieIDs);
    console.log(movieDetails);

  return (
    <div className='Movies'>
      <MoviePage details={movieDetails}/>
      <div className='page_no'>
        <span className='page' onClick={() => handlePageNo('prev')}><ArrowBackRoundedIcon/> Prev</span>
        <span>{pageNo}</span>
        <span className='page' onClick={() => handlePageNo('nxt')}>Next <ArrowForwardRoundedIcon/></span>
      </div>
    </div>
  )
}

export default Movies