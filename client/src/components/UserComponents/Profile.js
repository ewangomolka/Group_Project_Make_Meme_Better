import React from 'react';
import NavBar from '../MainComponents/Navbar';
import FeedItem from '../MainComponents/FeedItem';
import { deleteUser } from '../../services/UserServices';

const Profile = ({user, removeUser}) => {

    const handleDelete = () => {
        deleteUser(user._id)
        .then(() => {
            removeUser(user._id)
        })
    }

    return ( 
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <div>
                </div>
                <p>{user.username}</p>
                <div>
                <p>yo mama</p>
                <button onClick={handleDelete}>bye Felicia</button>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;

