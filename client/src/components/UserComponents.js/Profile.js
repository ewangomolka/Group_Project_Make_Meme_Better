<<<<<<< Updated upstream
=======
import React from 'react';
import NavBar from '../components/MainComponents.js/NavBar';

const Profile = ({users}) => {

    const userPostList = users.post.map((user) => {
        <FeedItem
        key={user._id}
        />
    })

    return ( 
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <h2>{user.username}</h2>
                <p>Your posts:</p>
                <div>
                    {userPostList}
                </div>
            </div>
        </div>
     );
}
 
export default Profile;
>>>>>>> Stashed changes
