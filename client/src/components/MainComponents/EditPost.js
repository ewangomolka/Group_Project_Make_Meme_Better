import React, { useState } from 'react';
import { createPostForUser } from '../../services/MainServices';
import { editPostForUser } from '../../services/UserServices';
const EditPost = ({ user, selectedPost, postForUserUpdated, index}) => {
    // need a form that allows users to type in a post and submit it
    // need a state to hold the form data
    const [newPost, setNewPost] = useState({
        content: "",
        comments: []
    })
    // // need a function to handle form data changes
    // const handleChange = (event) => {
    //     setPost({
    //         ...post,
    //         [event.target.id]: event.target.value
    //     })
    // }
    // const handlePostChange = (event) => {
        // }
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
    const handleChange = (event) => {
        const newInputPost = Object.assign({}, newPost);
        newInputPost[event.target.name] = event.target.value;
        setNewPost(newInputPost)
        }
    // const handleEdit = (event) => {
    //     event.preventDefault();
    //     handleEditClicked(postToEdit._id, post)
    //     // Reset the form input values
    //     setPost({
    //         content: “”,
    //     });
    //     handleEditClicked(null)
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