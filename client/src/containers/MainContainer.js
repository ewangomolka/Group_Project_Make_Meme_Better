import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/MainComponents/Navbar';
import FeedList from '../components/MainComponents/FeedList';
import { getMemes } from '../services/MainServices';
import Profile from '../components/UserComponents/Profile';
import CreatePost from '../components/MainComponents/CreatePost';
import Support from '../components/MainComponents/Support';
import styled from 'styled-components';

import '../App.css';


const MainContainer = ({ users, user, onUserLogout, removeUser, handleEditClicked, postToEdit, addPost, updatePostForUser, updateCommentForUser, postForUserUpdated}) => {

    const Footer = styled.footer`
    position: fixed;
    left: 0;
    bottom: 15px;
    width: 100%;
    /* text-align: center; */
    margin-top: 20px;
    position: fixed;
    margin-top: auto;
    z-index: 1;
    color: white;
    font-size: 2vh;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 15px 25px, rgba(0, 0, 0, 0.35) 0px 5px 10px;
    font-family: reem kufi, sans-serif;
    `



    const [feedItems, setFeedItems] = useState([]);


    useEffect(() => {
        getMemes().then((allMemes) => {
            setFeedItems(allMemes)
        })
    }, [removeUser, updatePostForUser, updateCommentForUser])

    const handleLogout = () => {
        onUserLogout();
    }

    return (
        <div>
        <div>
            <Router>
                <NavBar handleLogout={handleLogout}/>
            <Routes> 
            <Route path="/" element = {<FeedList users={users} user={user} removeUser={removeUser} feedItems={feedItems} updateCommentForUser={updateCommentForUser}/>}/> 
            <Route path="/profile" element = {<Profile key={user._id} user={user} removeUser={removeUser} handleLogout={handleLogout} handleEditClicked={handleEditClicked} postToEdit={postToEdit} postForUserUpdated={postForUserUpdated}/>}/>
            <Route path="/upload" element = {<CreatePost users={users} addPost={addPost} updatePostForUser={updatePostForUser} user={user}/>}/>
            <Route path="/support" element = {<Support/>}/> 
            </Routes>
            </Router>
            {/* <button onClick={handleLogout}>temp logout button</button> */}
        </div>

            <Footer>H.E.C. ltd</Footer>
        </div>
    );
}

export default MainContainer;