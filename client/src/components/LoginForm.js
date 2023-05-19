import React, {useState} from "react"

const Login = ({ onSubmitLogin}) => {

    const [usernameOrEmail, setUsernameOrEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
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
                <>
                <h2>Sign in </h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="user" placeholder="  USERNAME OR EMAIL  " value={usernameOrEmail} onChange={handleUsernameChange} required/>
                    <input type="text" id="password" placeholder="  PASSWORD  " value={password} onChange={handlePasswordChange} required/>
                    <input type="submit" value="Log in" />
                </form>
                </> 
            )
}
export default Login;