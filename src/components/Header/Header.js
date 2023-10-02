import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import { fetchSearchResults } from '../API/SearchAPI/SearchApi';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import './header.css'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() =>{

    const fetchResults = async() =>{
      if(searchQuery.trim() === ''){
        setSearchResults([]);
        return;
      }
      const result = await fetchSearchResults(searchQuery);
      console.log(result.data.results)
      setSearchResults(result.data.results);

    }
    fetchResults();
  },[searchQuery])

  const handleSearch = (event) =>{
    const query = event.target.value;
    setSearchQuery(query);
  }

  const handleChoice = (id) =>{
    setSearchResults([]);
    setSearchQuery('');
    navigate(`/Description/${id}`);
  }
  return (
    <div className='header'>
        <div className='header_left'>
           Logo
        </div>
        <div className='header_middle'>
          <span className='search'><SearchRoundedIcon color='secondary'/></span>
          <input type="search" placeholder='Search here...' onInput={handleSearch}/>
        </div>
        {searchResults.length > 0 && (
          <div className='search_drop'>
            
            {searchResults.map((result) =>{
              return(<div className='drops' key={result.id} onClick={() =>handleChoice(result.id)}>
              <span className='poster'><img src={`https://www.themoviedb.org/t/p/w185/${result.poster_path}`} alt="Description"/></span>
              <span className='title'>{result.title}</span>
              </div>)
            })}
            
          </div>
        )}

        <div className='header_right'>
          <NavLink to='/TVSeries'>
          <span>
            Tv shows
          </span>
          </NavLink>
          <NavLink to='/Movies'>
          <span className='movies'>
            Movies
          </span>
          </NavLink>
          <NavLink to='/Movies'>
          <span>
            Home
          </span>
          </NavLink>
        </div>
    </div>
  )
}

export default Header