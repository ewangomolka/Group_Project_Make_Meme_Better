import React, {useState}from 'react';
import { postNewUser } from '../../services/UserServices';

const CreateForm = (postNewUser) => {
    const [name, setName] = useState("")
    const [usernameOrEmail, setUsernameOrEmail] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleUsernameOrEmailChange = (event) => {
        setUsernameOrEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
          name: name,
          username: username,
          email: email,
          password: password
        };

    postNewUser(user)
      .then(data => {
        console.log('User created:', data);
        setUsername("");
        setEmail("");
        setPassword("");
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
    }

    return (
        <>
            <h1>Create Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" placeholder="  NAME  " value={name} onChange={handleNameChange} required />
                <input type="text" id="user" placeholder="  USERNAME  " value={username} onChange={handleUsernameOrEmailChange} required />
                <input type="text" id="email" placeholder="  EMAIL  " value={email} onChange={handleEmailChange} required />
                <input type="text" id="password" placeholder="  PASSWORD  " value={password} onChange={handlePasswordChange} required />
                <input type="submit" value="Create Account" />
            </form>
        </>

    );

}
export default CreateForm;