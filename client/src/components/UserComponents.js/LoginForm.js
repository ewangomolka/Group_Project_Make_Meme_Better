import React, { useState } from "react"
import ForgotPassword from "./ForgotPassword"
import CreateForm from "./CreateForm"
import { loginUser } from "../../services/UserServices"

const Login = ({ onSubmitLogin }) => {

    const [usernameOrEmail, setUsernameOrEmail] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [show, setShow] = useState(false)
    const [visible, setVisible] = useState(false)

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
          username,
          email,
          password,
        };
        loginUser(user) // loginUser is a function that takes in a user object and returns a promise
          .then((data) => { // data is the user that is logged in
            if (
              data && // if data exists
              data.email === email && // if the email matches
              data.password === password // if the password matches
            ) {
              console.log('User Logged In');
            } else {
              console.log('Authentication failed');
            }
          })
          .catch((error) => {
            console.error('Error occurred:', error);
          });
        onSubmitLogin(user);
        setUsername('');
        setPassword('');
      };


    return (
        <div>
            <h2>Sign in </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="user" placeholder="  USERNAME OR EMAIL  " value={usernameOrEmail} onChange={handleUsernameOrEmailChange} required />
                <input text="password" id="password" placeholder="  PASSWORD  " value={password} onChange={handlePasswordChange} required />
                <input type="submit" value="Log in" />
            </form>
            <div>
                <button onClick={() => setShow(true)}>Forget Password?</button>
                <ForgotPassword onClose={() => setShow(false)} show={show} />
            </div>
            <div>
                <button onClick={() => setVisible(true)}>create an account?</button>
                <CreateForm onClose={() => setVisible(false)} show={visible} />
            </div>
        </div>
    )
}
export default Login;