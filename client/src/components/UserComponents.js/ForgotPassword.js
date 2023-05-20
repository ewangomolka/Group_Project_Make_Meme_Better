import React from 'react';

const forgotPassword = (props) => {

    if (!props.show){
        return null
    }

    return ( 
        <div>
            <h2>you are a silly goose!</h2>
            <button onClick={props.onClose}>I member</button>
        </div>
     );
}
 
export default forgotPassword;