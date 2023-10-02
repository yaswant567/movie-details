import React from 'react'
import { NavLink } from 'react-router-dom';

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
          <NavLink >
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