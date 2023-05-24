import React, { useState } from 'react';
import { createPostForUser } from '../../services/MainServices';
import { editPostForUser } from '../../services/UserServices';
import { useNavigate } from "react-router-dom";

const EditPost = ({ user, selectedPost, postForUserUpdated, index}) => {
    // need a form that allows users to type in a post and submit it
    // need a state to hold the form data
    const navigate = useNavigate();
    const [newPost, setNewPost] = useState({
        content: "",
        comments: []
    })
    const handleChange = (event) => {
        const newInputPost = Object.assign({}, newPost);
        newInputPost[event.target.name] = event.target.value;
        setNewPost(newInputPost)
        }
    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedPostIndex = user.post.indexOf(user.post[index])
        const newEditedPosts = [...user.post]
        newEditedPosts[updatedPostIndex] = newPost
        console.log("newPort", newPost)
        postForUserUpdated({
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            post: newEditedPosts
        })
        navigate("/profile")
    };
    return (
        <>
            <form onSubmit={handleSubmit} id='editPostForm'>
            <label htmlFor="content">Edit post:</label>
                <input type="text" name="content" id="content" value={newPost.content} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form >
        </>
    );
}
export default EditPost;