import React, {useState} from "react"
import ForgotPassword from "./ForgotPassword"
import CreateForm from "./CreateForm"

const Login = ({ onSubmitLogin}) => {

    const [usernameOrEmail, setUsernameOrEmail] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [show, setShow] =useState(false)
    const [visable, setVisable] =useState(false)

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
        event.preventDefault()
        const user = {
           username: username,
           email: email,
           password: password
       }
        if (usernameOrEmail === user.email || usernameOrEmail === user.username){
            if (password === user.password) {
            console.log("User Loged In");
            } else {
            console.log("wrong password");
            }
        } else {
            console.log("please check you username or Email");
        }
        onSubmitLogin(user)
        setUsername("")
        setPassword("")
        }
            return(
                <div>
                <h2>Sign in </h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="user" placeholder="  USERNAME OR EMAIL  " value={usernameOrEmail} onChange={handleUsernameOrEmailChange} required/>
                    <input type="text" id="password" placeholder="  PASSWORD  " value={password} onChange={handlePasswordChange} required/>
                    <input type="submit" value="Log in" />
                </form>
                <div>
                    <button onClick={() => setShow(true)}>Forget Password?</button>
                    <ForgotPassword onClose={() => setShow(false)} show={show}/>
                  </div>  
                  <div>
                    <button onClick={() => setVisable(true)}>create an account?</button>
                    <CreateForm onClose={() => setVisable(false)} show={visable}/>
                </div>
                </div> 
            )
}
export default Login;