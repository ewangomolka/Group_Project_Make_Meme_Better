import React , {useState, useEffect}from 'react';
import Login from '../components/UserComponents.js/LoginForm';
import forgotPassword from '../components/UserComponents.js/ForgotPassword';
import CreateForm from '../components/UserComponents.js/CreateForm';
import { getUsers, deleteUser, addUser} from '../services/UserServices.js'

const UserContainer = () => {
    const[users, setUsers] = useState([])
    const [loggedIn, setLoggedin] = useState(null)

    useEffect(() => {
        getUsers()
        .then(data => { setUsers(data)})
      
    }, [])

    const addUser = (user) =>{
        const temp = users.map(s => s)
        temp.push(user)
        setUsers(temp)
    }
    //const onNewUserSubmit = (user) => {
    //    postNewUser(user).then((data) => {
    //        addUser(data);
    //    })
    //}

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

    const onLoginSubmit = (searchUser) => {
        const workingUser = users.find(user => user.username === searchUser.username)
        setLoggedin(workingUser)
    }

    return(
        <>
        <Login onLoginSubmit={onLoginSubmit}/>
        
        </>
     );

}
export default UserContainer;