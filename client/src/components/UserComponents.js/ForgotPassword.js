import React from 'react';

const forgotPassword = (props) => {

    if (!props.show){
        return null
    }

    return ( 
        <div>
            <img src="https://media.tenor.com/Ym4iH4Mr7McAAAAM/silly-goose-silly-goose-moment.gif"
            alt="sillygoose"/>
            <h2>you are a silly goose!</h2>
            <button onClick={props.onClose}>oh wait! I member!</button>
        </div>
     );
}
 
export default forgotPassword;