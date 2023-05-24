import React, { useState, useEffect } from 'react';
import Login from '../components/UserComponents/LoginForm.js';
import { getUsers, deleteUser, postNewUser} from '../services/UserServices.js'
import MainContainer from './MainContainer';

const UserContainer = ({users, loggedInUser, onSubmitLogin, onUserLogout, addUser, addPost,
<<<<<<< HEAD
     removeUser, onUserDelete, handleEditClicked, postToEdit, updatePostForUser, postForUserUpdated}) => {
=======
     removeUser, onUserDelete, handleEditClicked, postToEdit, updatePostForUser, updateCommentForUser}) => {
>>>>>>> main



    if (loggedInUser) {
        return <MainContainer handleEditClicked={handleEditClicked} addPost={addPost}
         postToEdit={postToEdit} users = {users} user={loggedInUser}
          onUserLogout={onUserLogout} removeUser={removeUser}
<<<<<<< HEAD
          updatePostForUser={updatePostForUser} postForUserUpdated={postForUserUpdated}/>; // if logged in, show main container with logged in user and logout function is passed through
=======
          updatePostForUser={updatePostForUser} updateCommentForUser={updateCommentForUser}/>; // if logged in, show main container with logged in user and logout function is passed through
>>>>>>> main
    }
    return (
        <div>
        <Login onSubmitLogin={onSubmitLogin} addUser={addUser}/>
        </div>
        )
}

export default UserContainer;