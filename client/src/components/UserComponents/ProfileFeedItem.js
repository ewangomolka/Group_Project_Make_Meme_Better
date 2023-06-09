import React, { useState, useEffect } from 'react';
import CommentForm from '../MainComponents/CommentForm';
import { getPosts, getComments } from '../../services/UserServices';
import { deleteUser } from '../../services/UserServices';
import EditPost from '../MainComponents/EditPost';
import './ProfileFeedItem.css'

// feed item will be card with a post taken from the database
const ProfileFeedItem = ({ user, handleEditClicked, postToEdit, postForUserUpdated}) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLiked, setLiked] = useState(false);
  const [isShared, setShared] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});

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
    setSelectedPost(user.post[0]);
    setShowEdit(!showEdit);
  };

  // the feed item needs to generate a post from the database
  return (
    <div className='profile-feed-wrapper'>
      {/* <h3>{user.username}</h3> */}
      {user.post && user.post.length > 0 ? (
        user.post.map((post, index) => (
          <div className='' key={index}>
            <h2>{post.content}</h2>
            <EditPost
            user={user}
            index={index}
            postForUserUpdated={postForUserUpdated}/>
            {post.comments.map((comment, commentIndex) => (
              <div key={commentIndex}>
                <hr />
                <p>@{comment.user} commented:</p>
                <img src={comment.meme} alt="Comment Meme" />
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}

      {showEdit && <EditPost user={user} handleEditClicked={handleEditClicked} selectedPost={selectedPost} postForUserUpdated={postForUserUpdated} />}
      {showModal && <CommentForm />}
    </div>
  );
};

export default ProfileFeedItem;
