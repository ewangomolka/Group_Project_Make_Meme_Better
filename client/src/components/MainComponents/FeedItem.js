import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import { getPosts, getComments } from '../../services/UserServices';
import { deleteUser } from '../../services/UserServices';
import './FeedItem.css'

// feed item will be card with a post taken from the database
const FeedItem = ({ user, removeUser, updateCommentForUser }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLiked, setLiked] = useState(false);
  const [isShared, setShared] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showComments, setShowComments] = useState(false);


  useEffect(() => {
    fetchPosts(); // fetching the posts from the API
  }, []);

  const handleRemove = () => {
    deleteUser(user._id)
    .then(() => {
        removeUser(user._id)
    })
}

  const fetchPosts = () => {
    getPosts() // fetching the posts from the API and updating the state
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  };

  // fetch comments
  const fetchComments = (postId) => {
    getComments(postId)
      .then((fetchedComments) => {
        setComments(fetchedComments);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  };

    // it will also include a button that lets other users like the post
    const handleLike = () => {
    setLiked(!isLiked);
  };

  // it will also include a button that lets other users share the post
  const handleShare = () => {
    setShared(!isShared);
  };

    // it will also include a button that lets other users comment on the post
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

// the feed item needs to generate a post from the database
  return (
     <div>
      {user.post && user.post.length > 0 ? 
      (user.post.map((post, index) => (
          <div key={index}>
            <h3>{user.username}</h3>
            <p>{post.content}</p>
            {showComments && (
              <div>
                {post.comments.map((comment, commentIndex) => (
                  <div key={commentIndex}>
                    <p>User {comment.user} posted:</p>
                    <img src={comment.meme} alt="Comment Meme" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        null
      )}

{user.post && user.post.length > 0 ?
    <div>
      <button onClick={handleToggleModal}>Comment</button>
      <button onClick={handleToggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      <button
        onClick={handleLike}
        className={isLiked ? 'like-button liked' : 'like-button'}
      >
        {isLiked ? 'Unlike' : 'Like'}
      </button>
      <button
        onClick={handleShare}
        className={isShared ? 'share-button shared' : 'share-button'}
      >
        {isShared ? 'Unshare' : 'Share'}
      </button>

      {showModal && <CommentForm user={user} updateCommentForUser={updateCommentForUser}/>} 
    </div> : null}
    </div>
  );
};

export default FeedItem;
