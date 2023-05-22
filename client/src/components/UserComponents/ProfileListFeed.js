import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/UserServices';
import ProfileFeedItem from './ProfileFeedItem';

// import CommentForm from '../MainComponents/CommentForm';

const ProfileFeedList = ({user}) => {


  return (
    
    <div>
      
        <ProfileFeedItem key={user._id} user={user} />
      
    </div>
  );
};

export default ProfileFeedList;