import React, { useState, useEffect } from 'react';
import CommentForm from '../MainComponents/CommentForm';
import { getPosts, getComments } from '../../services/UserServices';
import { deleteUser } from '../../services/UserServices';
import EditPost from '../MainComponents/EditPost';

// feed item will be card with a post taken from the database
const ProfileFeedItem = ({ user, handleEditClicked, postToEdit }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLiked, setLiked] = useState(false);
  const [isShared, setShared] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    if (user.id) {
      fetchPosts(user.id);
    }// fetching the posts from the API
  }, []);

  const fetchPosts = (id) => {
    getPosts(id) // fetching the posts from the API and updating the state
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

  const handleToggleEdit = () => {
    setShowEdit(!showEdit);
  };

  // the feed item needs to generate a post from the database
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
      <button onClick={handleToggleEdit}>Edit</button>
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
      {showEdit && <EditPost user={user} handleEditClicked={handleEditClicked} postToEdit={postToEdit} />}
      {showModal && <CommentForm />}
    </>
  );
};

export default ProfileFeedItem;
