import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/MainContainer';
import UserContainer from './containers/UserContainer';
import {useState, useEffect} from 'react'
import { getUsers, deleteUser, postNewUser} from './services/UserServices.js'

function App() {

  const [users, setUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    getUsers()
        .then(data => { setUsers(data) })
        
        // if(localStorage.getItem('loggedInUser') != null){
        //     let storedUser = localStorage.getItem('loggedInUser')
        //     console.log(JSON.parse(storedUser))
        //     // setLoggedInUser(JSON.parse(storedUser))
        // } // gets the logged in user from local storage if it exists 

    }, [])

  const onSubmitLogin = (searchUser) => { // searchUser is the user that is trying to log in
    console.log("search user", searchUser);
    const workingUser = users.find(
        (user) => // find the user that matches the username or email and password
            (user.username === searchUser.username || user.email === searchUser.username) &&
            user.password === searchUser.password
    );
    if (workingUser) { 
        console.log("workingUser", workingUser);
      
        setLoggedInUser(workingUser)

        // localStorage.setItem('loggedInUser', JSON.stringify(workingUser)); // stores the logged in user in local storage
    } else { // if user doesn't exist
        console.log("Authentication failed");
    }
};

const onUserLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser') // removes the logged in user from local storage
}


const addUser = (user) => {
  setUsers([...users, user]) 

}

const removeUser = (id) => {
  const usersToKeep = users.filter(user => user._id !== id)
  setUsers(usersToKeep);
  // const newUsers = [...users];
  // const index = newUsers.indexOf(user);
  // newUsers.splice(index, 1)
  // setUsers(newUsers)
}

  return (
    <div className="App">
      <UserContainer users={users} loggedInUser={loggedInUser} onSubmitLogin={onSubmitLogin} onUserLogout={onUserLogout} addUser={addUser} removeUser={removeUser}/>

      
    </div>
  );
}

export default App;
