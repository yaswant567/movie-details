import React,{useEffect, useState} from 'react'
import { fetchSeriesIDs, fetchSeriesDetails, fetchNowPlayingSeries, fetchPopularSeries } from '../../API/TvAPIs/TvApi'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import SeriesPage from '../../Pages/SeriesPage'

import './series.css'
import { useParams } from 'react-router-dom';

const Series = () => {
    const {type} = useParams();
    const [seriesIDs, setSeriesIDs] = useState([]);
    const [seriesDetails, setSeriesDetails] = useState([]);
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
              if(type === "NowPlaying"){
                const data = await fetchNowPlayingSeries(pageNo);
                setSeriesDetails(data.data.results);
              }
              else if(type === 'Popular'){
                const data = await fetchPopularSeries(pageNo);
                setSeriesDetails(data.data.results);
              }
              else{
                const ids = await fetchSeriesIDs(pageNo);
                setSeriesIDs(ids);
  
                const detailsPromise = ids.map(async(id) =>{
                  const data = await fetchSeriesDetails(id.id);
                  return data;
                })
  
                const details = await Promise.all(detailsPromise);
                const filteredDetails = details.filter((data) => data !== undefined);
                setSeriesDetails(filteredDetails);
              }

            }
            catch(error){
              console.error('Error fetching data : ', error);
            }
        }

        fetchData();
    },[pageNo]);

  return (
    <div className='Movies'>
      <SeriesPage details={seriesDetails}/>
      <div className='page_no'>
        <span className='page' onClick={() => handlePageNo('prev')}><ArrowBackRoundedIcon/> Prev</span>
        <span>{pageNo}</span>
        <span className='page' onClick={() => handlePageNo('nxt')}>Next <ArrowForwardRoundedIcon/></span>
      </div>
    </div>
  )
}

export default Series;