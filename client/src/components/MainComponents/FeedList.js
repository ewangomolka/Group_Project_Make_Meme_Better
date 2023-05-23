import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/UserServices';
import FeedItem from './FeedItem';
import './FeedList.css'
import styled from 'styled-components';

const FeedList = ({users, removeUser}) => {

  const ScrollBox= styled.div`
    height: 400px;
    width: 400px;
    justify-content: center;
    overflow: auto;
    list-style: none;
  `
  const Container= styled.div`
    display: flex;
    justify-content: center;
    padding-top: 75px;
  `

  return (
    <Container>
      <ScrollBox>
      {users.map((user) => (
        <FeedItem key={user._id} user={user} removeUser={removeUser}/>
      ))}
      </ScrollBox>
    </Container>
  );
};

export default FeedList;
