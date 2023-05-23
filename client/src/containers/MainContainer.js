import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../components/MainComponents/Navbar';
import FeedList from '../components/MainComponents/FeedList';
import { getMemes } from '../services/MainServices';
import Profile from '../components/UserComponents/Profile';
import CreatePost from '../components/MainComponents/CreatePost';
import Support from '../components/MainComponents/Support';


const MainContainer = ({ users, user, onUserLogout, removeUser }) => {

    const [feedItems, setFeedItems] = useState([]);


    useEffect(() => {
        getMemes().then((allMemes) => {
            setFeedItems(allMemes)
        })
    }, [removeUser])

    const handleLogout = () => {
      onUserLogout();
    }

    // const removeUser = (id) => {
    //     const usersToKeep = users.filter(user => user._id!==id)
    //     // setUsers(usersToKeep)
    // }

    return ( 
        <div>
            <h1>Your Feed!</h1>
        <div>
            <Router>
                <NavBar handleLogout={handleLogout}/>
            <Routes> 
            <Route path="/" element = {<FeedList users={users} removeUser={removeUser} feedItems={feedItems}/>}/> 
            <Route path="/profile" element = {<Profile key={user._id} user={user} removeUser={removeUser} handleLogout={handleLogout}/>}/>
            <Route path="/upload" element = {<CreatePost users={users}/>}/>
            <Route path="/support" element = {<Support/>}/> 
            </Routes>
            </Router>
            <footer>H.E.C. ltd</footer>
            {/* <button onClick={handleLogout}>temp logout button</button> */}
        </div>
        </div>
     );
}
 
export default MainContainer;