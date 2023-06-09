import React, { useState } from "react"
import ForgotPassword from "./ForgotPassword"
import { loginUser } from "../../services/UserServices"
import { postNewUser } from "../../services/UserServices"
import './LoginForm.css'

const Login = ({ onSubmitLogin, addUser }) => {

    const [usernameOrEmail, setUsernameOrEmail] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [show, setShow] = useState(false)
    const [visible, setVisible] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        post: []
    })

    const handleCreate = () => {
        setButtonClicked(!buttonClicked)
    }

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postNewUser(formData).then((data) => {
            addUser(data);
        })
        setFormData({
            username: "",
            email: "",
            password: ""
        })
    }

    const handleUsernameOrEmailChange = (event) => {
        setUsernameOrEmail(event.target.value)
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
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
            username: username,
            email: email,
            password: password
        };

        // loginUser(user) // loginUser is a function that takes in a user object and returns a promise
        //   .then((data) => { // data is the user that is logged in
        //     console.log("db response", data);
        if (
            user && // if data exists
            user.email === email && // if the email matches
            user.password === password // if the password matches
        ) {
            console.log('User Logged In', user);
            onSubmitLogin(user);
        } else {
            console.log('Authentication failed');
        }
    }
    // .catch((error) => {
    //   console.error('Error occurred:', error);
    // });

    // setUsername('');
    // setPassword('');




    return (
        <div className="login-container">
        
            <div className="login-form-wrapper">
            <img className="header-logo" src="../../Meme logo.png" alt="logo" />
                <h1>Sign in </h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input type="text" id="user" placeholder="  Username/Email  " value={username} onChange={handleUsernameChange} required />
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" placeholder="  Password  " value={password} onChange={handlePasswordChange} required />
                    </div>
                    <div>
                        <button onClick={() => setShow(true)} className="forgot-pw">Forget Password?</button>
                        {show && (
                            <div className="modal-overlay">
                                <div className="modal-content">
                                    <ForgotPassword onClose={() => setShow(false)} show={show} />
                                </div>
                            </div>
                        )}
                    </div>
                    <input className="login-submit-btn" type="submit" value="Sign In" />
                </form>
                <div>
                    <button onClick={handleCreate} className="create-acc-btn">Create an account</button>
                    {buttonClicked && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                            <img className="header-logo" src="../../Meme logo.png" alt="logo" />
                                <h1>Create Form</h1>
                                <form onSubmit={onSubmit}>
                                    <div className="input-field">
                                        <input type="text" id="user" name='username' placeholder="  USERNAME  " value={formData.username} onChange={onChange} required />
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="email" name='email' placeholder="  EMAIL  " value={formData.email} onChange={onChange} required />
                                    </div>
                                    <input type="password" id="password" name='password' placeholder="  PASSWORD  " value={formData.password} onChange={onChange} required />
                                    <input className="acc-submit-btn" type="submit" value="Create Account" />
                                </form>
                                <button className="acc-cancel-btn" onClick={handleCreate}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>


    )
}
export default Login;