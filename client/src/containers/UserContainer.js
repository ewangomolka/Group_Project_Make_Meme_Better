import React, { useState, useEffect } from 'react';
import Login from '../components/UserComponents.js/LoginForm';
import { getUsers, deleteUser, postNewUser} from '../services/UserServices.js'
import MainContainer from './MainContainer';

const UserContainer = () => {
    const [users, setUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useState(null)

    useEffect(() => {
        getUsers()
            .then(data => { setUsers(data) })

        const storedUser = localStorage.getItem('loggedInUser') // gets the logged in user from local storage if it exists 
        if (storedUser) { 
            setLoggedInUser(JSON.parse(storedUser)) // if the user exists, it sets the logged in user to the user in local storage
        }
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
        if (workingUser) { 
            console.log("User Logged In");
            setLoggedInUser(workingUser);
            localStorage.setItem('loggedInUser', JSON.stringify(workingUser)); // stores the logged in user in local storage
        } else { // if user doesn't exist
            console.log("Authentication failed");
        }
    };

    const onUserLogout = () => {
        setLoggedInUser(null);
        localStorage.removeItem('loggedInUser') // removes the logged in user from local storage
    }

    if (loggedInUser) {
        return <MainContainer user={loggedInUser} onUserLogout={onUserLogout} />; // if logged in, show main container with logged in user and logout function is passed through
    }
    return <Login onSubmitLogin={onSubmitLogin} addUser={addUser}/>;
}

export default UserContainer;