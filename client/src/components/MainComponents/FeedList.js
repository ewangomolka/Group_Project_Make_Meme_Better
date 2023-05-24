import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/UserServices';
import FeedItem from './FeedItem';
import styled from 'styled-components';

const FeedList = ({ users, removeUser, updateCommentForUser }) => {

  const ScrollBox = styled.div`
    & {
    height: 400px;
    width: 450px;
    justify-content: center;
    overflow: auto;
    list-style: none;
    }
    &::-webkit-scrollbar {
    display: none;
    }
    
  `
  const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 75px;
  `

  return (
    <Container>
      <ScrollBox>
        {users.map((user) => (
          <FeedItem key={user._id} user={user} removeUser={removeUser} updateCommentForUser={updateCommentForUser} />
        ))}
      </ScrollBox>
    </Container>
  );
};

export default FeedList;
