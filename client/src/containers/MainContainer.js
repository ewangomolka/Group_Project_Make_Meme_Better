import React, {useState, useEffect} from 'react';
import NavBar from '../components/MainComponents.js/Navbar';
import FeedList from '../components/MainComponents.js/FeedList';
import { getMemes } from '../services/MainServices';

const MainContainer = () => {

    const [feedItems, setFeedItems] = useState([]);

    useEffect(() => {
        getMemes().then((allMemes) => {
            setFeedItems(allMemes)
        })
    }, [feedItems])

    return ( 
        <div>
            <h1>Your Feed!</h1>
            <p>prof_pic</p>
            <div>
            <NavBar/>
            </div>
            <div>
            <FeedList feedItems={feedItems}/>
            </div>
            <footer>H.E.C. ltd</footer>
        </div>
     );
}
 
export default MainContainer;