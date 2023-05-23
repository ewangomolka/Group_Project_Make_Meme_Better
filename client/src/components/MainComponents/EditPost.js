import React, { useState } from 'react';
import { createPostForUser } from '../../services/MainServices';
const EditPost = ({ user, handleEditClicked, postToEdit }) => {
    // need a form that allows users to type in a post and submit it
    // need a state to hold the form data
    const [post, setPost] = useState({
        content: postToEdit,
    })
    // // need a function to handle form data changes
    const handleChange = (event) => {
        setPost({
            ...post,
            [event.target.id]: event.target.value
        })
    }
    // const handlePostChange = (event) => {
    //     const newPost =Object.assign({}, post)
    //     newPost[event.target.name] = event.target.value
    //     setPost(newPost)
    // }
    // // UNSURE IF THIS IS RIGHT
    // // need a function to handle form submission and save the new post to the database
    // const handleEdit = (event) => {
    //     event.preventDefault();
    //     console.log(‘edit submitted’);
    //     console.log(user, ‘user’)
    //     handleEditClicked(user._id, post)
    // }
    const handleEdit = (event) => {
        event.preventDefault();
        handleEditClicked(postToEdit._id, post)
        // Reset the form input values
        setPost({
            content: "",
        });
        handleEditClicked(null)
    }
    return (
        <>
            <h1>Edit Post Form</h1>
            <form onSubmit={handleEdit} id='editPostForm'>
            <label htmlFor="content">Content:</label>
                <input type="text" id="content" value={post.content} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form >
        </>
    );
}
export default EditPost;