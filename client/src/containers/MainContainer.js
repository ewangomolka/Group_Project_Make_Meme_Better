import React, {useState, useEffect} from 'react';
import NavBar from '../components/MainComponents.js/Navbar';
import FeedList from '../components/MainComponents.js/FeedList';
import { getMemes } from '../services/MainServices';

const MainContainer = ({ onUserLogout }) => {

    const [feedItems, setFeedItems] = useState([]);
    const [users, setUsers] = useState([])

    useEffect(() => {
        getMemes().then((allMemes) => {
            setFeedItems(allMemes)
        })
    }, [feedItems])

    const handleLogout = () => {
      onUserLogout();
    }

    const removeUser = (id) => {
        const usersToKeep = users.filter(user => user._id!==id)
        setUsers(usersToKeep)
    }

    return ( 
        <div>
            <h1>Your Feed!</h1>
            <p>prof_pic</p>
            <div>
            <NavBar removeUser={removeUser}/>
            </div>
            <div>
            <FeedList feedItems={feedItems}/>
            </div>
            <footer>H.E.C. ltd</footer>
            <button onClick={handleLogout}>temp logout button</button>
        </div>
     );
}
 
export default MainContainer;