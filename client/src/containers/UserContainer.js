import React, { useState, useEffect } from 'react';
import Login from '../components/UserComponents/LoginForm.js';
import { getUsers, deleteUser, postNewUser} from '../services/UserServices.js'
import MainContainer from './MainContainer';

const UserContainer = ({users, loggedInUser, onSubmitLogin, onUserLogout, addUser, removeUser, onUserDelete}) => {



        

    // const onNewUserSubmit = (user) => {
    //    postNewUser(user).then((data) => {
    //         addUser(data);
    // })




    // const onSubmitLogin = (searchUser) => {
    //     const workingUser = users.find(user => user.username === searchUser.username || user.email === searchUser.email);
    //     if (workingUser) { // if user exists
    //         if (workingUser.password === searchUser.password) { // if password matches
    //             setLoggedin(workingUser)    // set logged in user
    //         }
    //         else {
    //             console.log("wrong password"); // if password doesn't match
    //         }
    //     }
    //     else {
    //         console.log("please check you username or Email"); // if user doesn't exist
    //     }
    // }



    if (loggedInUser) {
        return <MainContainer users = {users} user={loggedInUser} onUserLogout={onUserLogout} removeUser={removeUser}/>; // if logged in, show main container with logged in user and logout function is passed through
    }
    return (
        <div>
        <Login onSubmitLogin={onSubmitLogin} addUser={addUser}/>
        </div>
        )
}

export default UserContainer;