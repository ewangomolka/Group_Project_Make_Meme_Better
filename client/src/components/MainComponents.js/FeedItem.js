import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import { getPosts, getComments } from '../../services/UserServices';

const FeedItem = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLiked, setLiked] = useState(false);
  const [isShared, setShared] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    getPosts()
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  };

  const fetchComments = (postId) => {
    getComments(postId)
      .then((fetchedComments) => {
        setComments(fetchedComments);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  };

  const handleLike = () => {
    setLiked(!isLiked);
  };

  const handleShare = () => {
    setShared(!isShared);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <h1>Feed Item</h1>
      <h3>{user.username}</h3>
      {user.post && user.post.length > 0 ? (
        user.post.map((post, index) => (
          <div key={index}>
            <p>{post.content}</p>
            {post.comments.map((comment, commentIndex) => (
              <div key={commentIndex}>
                <p>User: {comment.user}</p>
                <img src={comment.meme} alt="Comment Meme" />
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}

      <button onClick={handleToggleModal}>Comment</button>
      <button>Edit</button>
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

      {showModal && <CommentForm />}
    </>
  );
};

export default FeedItem;
