import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/UserServices';
import ProfileFeedItem from './ProfileFeedItem';
import styled from 'styled-components';


// import CommentForm from '../MainComponents/CommentForm';

const ProfileFeedList = ({ user, handleEditClicked, postToEdit, postForUserUpdated }) => {

  const ScrollBox = styled.div`
  & {
  height: 500px;
  width: 500px;
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

    <div>
      <Container>
        <ScrollBox>
          <ProfileFeedItem key={user._id} user={user} handleEditClicked={handleEditClicked} postToEdit={postToEdit} postForUserUpdated={postForUserUpdated} />
        </ScrollBox>
      </Container>

    </div>
  );
};

export default ProfileFeedList;