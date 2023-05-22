import React, { useState } from 'react';
import { createPostForUser } from '../../services/UserServices';


const CreatePost = ({user}) => {

    // need a form that allows users to type in a post and submit it

    // need a state to hold the form data
    // const [post, setPost] = useState({
    //     content: "",
    // })

    // // need a function to handle form data changes
    // const handleChange = (event) => {
    //     setPost({
    //         ...post,
    //         [event.target.id]: event.target.value
    //     })
    // }

    // // UNSURE IF THIS IS RIGHT
    // // need a function to handle form submission and save the new post to the database
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('form submitted');

    //     const userId = '6468b9b34615204115925465'

    //     createPostForUser(post)
    //         .then((data) => {
    //             console.log('post saved', data);
    //             setPost({
    //                 content: "",
    //             })
    //         })
    //         .catch(error => {
    //             console.error('Error saving post:', error);
    //         });
    // }

    return (
        <>
            <h1>Create Post Form</h1>
            {/* <form onSubmit={handleSubmit} id='createPostForm'> */}
                {/* <label htmlFor="content">Content:</label>
                <input type="text" id="content" value={post.content} onChange={handleChange} />
                <button type='submit'>Submit</button> */}
            {/* </form> */}
        </>

    );

}

export default CreatePost;