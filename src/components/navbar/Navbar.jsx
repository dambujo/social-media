import React from 'react';
import './Navbar.scss';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link
          to="/"
          style={{ textDecoration: 'nome' }}
        >
          <span>Damb-social</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="https://media.istockphoto.com/photos/what-challenges-us-can-help-change-us-picture-id1014076102?k=20&m=1014076102&s=612x612&w=0&h=tcCHSV1TF-3KWj2mH4GVd4CxQdJJabhd2Wit0kLok5U="
            alt=""
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
