import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/UserServices';
import FeedItem from './FeedItem';

const FeedList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  return (
    <div>
      {users.map((user) => (
        <FeedItem key={user._id} user={user} />
      ))}
    </div>
  );
};

export default FeedList;
