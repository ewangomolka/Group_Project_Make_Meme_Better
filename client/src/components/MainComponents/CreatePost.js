import React, { useState } from 'react';
import { createPostForUser } from '../../services/UserServices';
import './CreatePost.css'
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const CreatePost = ({ user, addPost, updatePostForUser }) => {

    const navigate = useNavigate();

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
    // // need a function to handle form submission and save the new post to the database
    const handleSubmit = (event) => {
        event.preventDefault();
        const newPosts = [...user.post]
        newPosts.push(newPost)
        updatePostForUser({
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            post: newPosts
        })
        navigate("/");
    };

    return (
        <>
            <div className='create-post-form-wrapper'>
                <div className='create-post-form'>
                    <h1>Create Post Form</h1>
                    <div className='form-header'>
                        <img className="header-profile-pic" src="../../queen-elizabeth-242909c079b34ea38ae6b328d1da2fc0.jpg" alt="Queenie" />
                        <p>@{user.username}</p>
                    </div>
                    <form onSubmit={handleSubmit} id='createPostForm'>
                        <label htmlFor="content"></label>
                        <input type="textarea" name="content" id="content" placeholder="What's occuring?" value={newPost.content} onChange={handleChange} />
                        <button className='post-submit-btn' type='submit' value='Save'>Post</button>
                    </form>
                </div>
            </div>
        </>

    );


}

export default CreatePost;