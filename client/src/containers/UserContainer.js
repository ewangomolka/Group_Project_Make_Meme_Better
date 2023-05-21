import React, { useState, useEffect } from 'react';
import Login from '../components/UserComponents.js/LoginForm';
import ForgotPassword from '../components/UserComponents.js/ForgotPassword';
import CreateForm from '../components/UserComponents.js/CreateForm';
import { getUsers, deleteUser, postNewUser, addUser } from '../services/UserServices.js'
import MainContainer from './MainContainer';

const UserContainer = () => {
    const [users, setUsers] = useState([])
    const [loggedIn, setLoggedin] = useState(null)

    useEffect(() => {
        getUsers()
            .then(data => { setUsers(data) })

    }, [])

    const addUser = (user) => {
        setUsers([...users, user])

    }
    // const onNewUserSubmit = (user) => {
    //    postNewUser(user).then((data) => {
    //         addUser(data);
    // })


    const removeUser = (user) => {
        const temp = users.map(s => s);
        let index = temp.indexOf(user);
        temp.splice(index, 1)
        setUsers(temp)
    }
    const onUserDelete = (id) => {
        deleteUser(id).then((data) => {
            removeUser(data);
        })
    }

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

    const onSubmitLogin = (searchUser) => { // searchUser is the user that is trying to log in
        const workingUser = users.find(
            (user) => // find the user that matches the username or email and password
                (user.username === searchUser.username || user.email === searchUser.username) &&
                user.password === searchUser.password
        );

        if (workingUser) { // if user exists
            console.log("User Logged In");
            setLoggedin(workingUser);
        } else { // if user doesn't exist
            console.log("Authentication failed");
        }
    };

    if (loggedIn) { 
        return <MainContainer user={loggedIn} />; // if logged in, show main container
    }
    return <Login onSubmitLogin={onSubmitLogin} />;
}

export default UserContainer;