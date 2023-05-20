import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import { getPosts } from '../../services/UserServices';

// feed item will be card with a post taken from the database
const FeedItem = () => {
    const [posts, setPosts] = useState([]);
    const [isLiked, setLiked] = useState(false);
    const [isShared, setShared] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getPosts() // fetching the posts from the API and updating the state
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, []);

    // it will also include a button that lets other users like the post
    const handleLike = () => {
        setLiked(!isLiked);
    }

    // it will also include a share button that when clicked it changes the color of the button to highlight that it's been shared
    const handleShare = () => {
        setShared(!isShared);
    }

    // it will also include a button that opens a modal to allow users to comment on the post
    const handleToggleModal = () => {
        setShowModal(!showModal);
    }

    // the feed item needs to generate a post from the database

    return (
        <>
            <h1>Feed Item</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <p>{post.content}</p>
                </div>
            ))}

            <button onClick={handleToggleModal}>Comment</button>
            <button>Edit</button>
            <button
                onClick={handleLike}
                className={isLiked ? 'like-button liked' : 'like-button'}>{isLiked ? 'Unlike' : 'Like'}</button>
            <button onClick={handleShare}
                className={isShared ? 'share-button shared' : 'share-button'}>{isShared ? 'Unshare' : 'Share'}</button>

            {showModal && <CommentForm />}
        </>
    );
}

export default FeedItem;