import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import './SideBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

function NavBar({ handleLogout }) {

  const Header = styled.header`
  background-color: rgba(0,0,0,0);
  height: 90px;
  top: 0;
  z-index: -6;
  `

  const Img = styled.img`
      height: 60px;
      width: 60px;
      border-radius: 50%;
      position: absolute;
      top: 16px;
      right: 16px;
  `

  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  };

  return (
    <>
      <Header>
        <Link to="/profile">
          <Img className="header-profile-pic" src="../../queen-elizabeth-242909c079b34ea38ae6b328d1da2fc0.jpg" alt="Queenie" />
        </Link>
      </Header>

      <div className={`button ${isActive ? 'active' : ''}`} onClick={toggleSidebar}>
        <div className="bar top"></div>
        <div className="bar middle"></div>
        <div className="bar bottom"></div>
      </div>

      <main className={`move-to-right ${isActive ? 'active' : ''}`}>
        {/* Main content */}
      </main>

      <div className={`sidebar ${isActive ? 'active' : ''}`}>
        <ul className="sidebar-list">
          {/* <li className="sidebar-item"><a href="#" className="sidebar-anchor">Feed</a></li>
          <li className="sidebar-item"><a href="#" className="sidebar-anchor">Profile</a></li>
          <li className="sidebar-item"><a href="#" className="sidebar-anchor">Upload</a></li>
          <li className="sidebar-item"><a href="#" className="sidebar-anchor">Support</a></li>
        </ul>
        <div>
          <ul> */}
          <li>
            <Link to="/">Feed</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <div className='logout-btn'><li className='logout-btn'>
            <Link to="/" onClick={handleLogout} className='logout-btn'>Logout<FontAwesomeIcon icon={faRightFromBracket} className='logout-icon' /></Link>
            
          </li></div>
        </ul>
      </div>

    </>
  );
}

export default NavBar;