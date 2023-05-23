import React from 'react';
import NavBar from '../MainComponents/Navbar';
import FeedItem from '../MainComponents/FeedItem';
import { deleteUser } from '../../services/UserServices';
import ProfileFeedList from './ProfileListFeed';
import {Link} from 'react-router-dom';

const Profile = ({user, removeUser, handleLogout, handleEditClicked, postToEdit, postForUserUpdated}) => {

    const handleDelete = () => {
        handleLogout();
        deleteUser(user._id)
        .then(() => {
            removeUser(user._id)
        })
    }

    return ( 
        <div>
            {/* <div>
                <NavBar/>
            </div> */}
            <div>
                <div>
                </div>
                <p>{user.username}</p>
                <div>
                <p>yo mama</p>
                <ProfileFeedList user={user} handleEditClicked={handleEditClicked} postToEdit={postToEdit} postForUserUpdated={postForUserUpdated}/>
                <Link to="/"><button onClick={handleDelete}>bye Felicia</button></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;

