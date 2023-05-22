import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/UserServices';
import FeedItem from './FeedItem';

const FeedList = ({users, removeUser}) => {



  return (
    <div>
      {users.map((user) => (
        <FeedItem key={user._id} user={user} removeUser={removeUser}/>
      ))}
    </div>
  );
};

export default FeedList;
