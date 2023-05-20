import React from 'react';
import NavBar from '../components/MainComponents.js/Navbar';
import FeedList from '../components/MainComponents.js/FeedList';

const MainContainer = () => {
    return ( 
        <div>
            <h1>Your Feed!</h1>
            <p>prof_pic</p>
            <div>
            <NavBar/>
            </div>
            <div>
            <FeedList/>
            </div>
            <footer>H.E.C. ltd</footer>
        </div>
     );
}
 
export default MainContainer;