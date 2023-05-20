import React from 'react';
import everythingisfine from '../everthingisfine'
const forgotPassword = () => {
    return ( 
        <div>
            <h2>oh dear, it looks like you've forgotten your password. </h2>
            <img className="everything is fine" src={everythingisfine} alt = "itsfine"/>
        </div>
     );
}
 
export default forgotPassword;