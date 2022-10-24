import React from 'react';
import './Navbar.scss';

import {
  HomeOutlinedIcon,
  DarkModeOutlinedIcon,
  GridViewOutlinedIcon,
  SearchOutlinedIcon,
  EmailOutlinedIcon,
  PersonOutlinedIcon,
  NotificationsOutlinedIcon,
} from '../../utils/icons';
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
