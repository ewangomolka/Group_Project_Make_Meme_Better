import React from 'react';
import NavBar from '../MainComponents/Navbar';
import FeedItem from '../MainComponents/FeedItem';
import { deleteUser } from '../../services/UserServices';

const Profile = ({users, removeUser}) => {

    const userPostList = users.post.map((user) => {
        <FeedItem
        key={user._id} user={user}
        />
    })



    return ( 
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <div>
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

