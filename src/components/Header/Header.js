import React from 'react'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
           Logo
        </div>
        <div className='header_middle'>
          <span className='search'><SearchRoundedIcon color='secondary'/></span>
          <input type="search" placeholder='Search here...'/>
        </div>
        <div className='header_right'>
          <span>
            Tv shows
          </span>
          <span>
            Movies
          </span>
          <span>
            Home
          </span>
        </div>
    </div>
  )
}

export default Header