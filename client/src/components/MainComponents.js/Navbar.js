import React, { useState } from 'react';
import './SideBar.css'

function Sidebar() {
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
          <li className="sidebar-item"><a href="#" className="sidebar-anchor">Item 1</a></li>
          <li className="sidebar-item"><a href="#" className="sidebar-anchor">Item 2</a></li>
          <li className="sidebar-item"><a href="#" className="sidebar-anchor">Item 3</a></li>
          <li className="sidebar-item"><a href="#" className="sidebar-anchor">Item 4</a></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;