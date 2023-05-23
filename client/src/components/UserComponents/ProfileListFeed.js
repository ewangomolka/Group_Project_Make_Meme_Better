import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/UserServices';
import ProfileFeedItem from './ProfileFeedItem';

// import CommentForm from '../MainComponents/CommentForm';

const ProfileFeedList = ({user, handleEditClicked, postToEdit, postForUserUpdated}) => {


  return (
    
    <div>
      
        <ProfileFeedItem key={user._id} user={user} handleEditClicked={handleEditClicked} postToEdit={postToEdit} postForUserUpdated={postForUserUpdated} />
      
    </div>
  );
};

export default ProfileFeedList;