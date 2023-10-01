import React,{useEffect, useState} from 'react'
import { fetchMovieIDs, fetchMovieDetails } from '../API/MovieAPIs/MovieApi'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Page from '../Pages/Page'

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
    console.log(movieIDs);
    console.log(movieDetails);

  return (
    <div className='Movies'>
      <Page details={movieDetails}/>
      <div className='page_no'>
        <span className='page' onClick={() => handlePageNo('prev')}><ArrowBackRoundedIcon/> Prev</span>
        <span>{pageNo}</span>
        <span className='page' onClick={() => handlePageNo('nxt')}>Next <ArrowForwardRoundedIcon/></span>
      </div>
    </div>
  )
}

export default Movies