import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './SideBar.css'

function NavBar({ handleLogout }) {
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
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/">Upload</Link>
          </li>
          <li>
            <Link to="/">Support</Link>
          </li>
          <li>
            <Link to="/logout" onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </div>

    </>
  );
}

export default NavBar;