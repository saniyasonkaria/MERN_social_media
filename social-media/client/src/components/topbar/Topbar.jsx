
import {Person, Search,Notifications, Chat} from "@mui/icons-material" ;
import {Link } from 'react-router-dom';

import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to="/"> <span className="logo">Sanisocial</span></Link>
       
      </div>
      <div className="topbarCenter">
        <div className="searchbar">

        <Search className="searchIcon"/>
        <input
          placeholder="Search for friend, post or video"
          className="searchInput"
        />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink"> HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <div className="topbarIconBadge">1</div>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <div className="topbarIconBadge">1</div>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <div className="topbarIconBadge">1</div>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
