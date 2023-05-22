import React from 'react';
import NavBar from '../components/MainComponents.js/NavBar';
import FeedItem from '../components/MainComponents.js/FeedItem';
import { deleteUser } from '../../services/UserServices';

const Profile = ({users, removeUser}) => {

    const userPostList = users.post.map((user) => {
        <FeedItem
        key={user._id}
        />
    })

    const handleRemove = () => {
        deleteUser(user._id)
        .then(() => {
            removeUser(booking._id)
        })
    }

    return ( 
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <div>
                <h2>{user.username}</h2>
                <button onClick={handleRemove} confirm={confirm('are you sure you want to delete your profile?')}>Delete Profile</button>
                </div>
                <p>Your posts:</p>
                <div>
                    {userPostList}
                </div>
            </div>
        </div>
     );
}
 
export default Profile;

