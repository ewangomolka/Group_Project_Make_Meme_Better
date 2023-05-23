import React, { useState } from 'react';
// import { createPostForUser } from '../../services/UserServices';
import { createPostForUser } from '../../services/UserServices';


const CreatePost = ({user, addPost, updatePostForUser}) => {

    // need a form that allows users to type in a post and submit it

    // need a state to hold the form data
    const [newPost, setNewPost] = useState({
        content: "",
        comments: []
    })

    // // need a function to handle form data changes
    const handleChange = (event) => {
        const newInputPost = Object.assign({}, newPost);
        newInputPost[event.target.name] = event.target.value;
        setNewPost(newInputPost)
    }
    // // UNSURE IF THIS IS RIGHT
    // // need a function to handle form submission and save the new post to the database
    const handleSubmit = (event) => {
        event.preventDefault();
        const newPosts = [... user.post]
        newPosts.push(newPost)
        updatePostForUser({
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            post: newPosts
        })
    };
    
    return (
        <>
            <h1>Create Post Form</h1>
            <form onSubmit={handleSubmit} id='createPostForm'>
                <label htmlFor="content">Content:</label>
                <input type="text" name="content" id="content" value={newPost.content} onChange={handleChange} />
                <button type='submit' value='Save'>Submit</button>
            </form>
        </>

);


}

export default CreatePost;