import React,{useEffect, useState} from 'react'
import { fetchMovieIDs, fetchMovieDetails, fetchNowPlayingMovies, fetchPopularMovies } from '../../API/MovieAPIs/MovieApi'
import { fetchGenreIDs } from '../../API/MovieAPIs/Genre';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import MoviePage from '../../Pages/MoviePage';

import './movies.css'
import { useParams } from 'react-router-dom';

const Movies = () => {
    const {type} = useParams();
    const [movieIDs, setMovieIDs] = useState([]);
    const [movieDetails, setMovieDetails] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [genreIds, setGenreIds] = useState([]);
    const [genre, setGenre] = useState(false);

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
              if(type === "NowPlaying")
              {
                const data = await fetchNowPlayingMovies(pageNo);
                setMovieDetails(data.data.results);
              }
              else if(type === "Popular")
              {
                const data = await fetchPopularMovies(pageNo);
                setMovieDetails(data.data.results);
              }
              else
              {
                const ids = await fetchMovieIDs(pageNo);
                setMovieIDs(ids);

                const detailsPromise = ids.map(async(id) =>{
                const response = await fetchMovieDetails(id.id);
                if(response !== undefined)
                  return response.data;
              })

              const details = await Promise.all(detailsPromise);
              const filteredDetails = details.filter((data) => data !== undefined);
              setMovieDetails(filteredDetails);

              const genre = await fetchGenreIDs();
              console.log(genre);
              setGenreIds(genre.data.genres);
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
      <div className='showGenre'>
        {type === 'NowPlaying' ? <h2>NowPlaying:</h2>:type === 'Popular' ? <h2>Popular</h2>: null}
        <span className='genre_text' onClick={() => setGenre(!genre)}>Genre</span>
        {genre && <div className='genre_list'>
          {genreIds.map((item) =>{
            return (<span>{item.name}</span>)
          })}
        </div>}
      </div>
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