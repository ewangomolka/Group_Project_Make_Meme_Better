import React from 'react';
import NavBar from '../MainComponents/Navbar';
import FeedItem from '../MainComponents/FeedItem';
import { deleteUser } from '../../services/UserServices';
import ProfileFeedList from './ProfileListFeed';
import { Link } from 'react-router-dom';


const Profile = ({ user, removeUser, handleLogout, handleEditClicked, postToEdit, postForUserUpdated }) => {


    const handleDelete = () => {
        handleLogout();
        deleteUser(user._id)
            .then(() => {
                removeUser(user._id)
            })
    }

    return (
        <>
            <h1>Hello @{user.username}</h1>
            
                <h3>Welcome to your profile. You can see all your posts here.</h3>
                <ProfileFeedList user={user} handleEditClicked={handleEditClicked} postToEdit={postToEdit} postForUserUpdated={postForUserUpdated} />
                <Link to="/"><button onClick={handleDelete} className='delete-acc-btn'>Delete account</button></Link>
            
        </>

    );
}

export default Profile;

