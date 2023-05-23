const baseURL = 'http://localhost:9000/api/users/'

// For users:
export const getUsers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postNewUser = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const deleteUser = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateUser = (id, payload) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        header: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
};

export const loginUser = (user) => { // user is the user that is trying to log in
    return fetch(baseURL, {
        
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            console.log('Login response:', response);
            return response.json();
        })
        .then((data) => { // data is the user that is logged in
            console.log('Login data:', data);
            return data;
        })
        .catch((error) => {
            console.error('Login error:', error);
            throw error;
        });
};

// For posts:
// export const getPosts = () => {
//     return fetch(baseURL)
//         .then(res => res.json());
// }
export const getPosts = (id) => {
    return fetch(baseURL + id + '/posts')
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

// export const getPosts = () => {
//     return fetch(baseURL)
//       .then((res) => res.json())
//       .then((data) => {
//         const posts = data.reduce((acc, user) => {
//           if (user.post && user.post.length > 0) {
//             user.post.forEach((post) => {
//               acc.push({ user: user.username, content: post.content });
//             });
//           }
//           return acc;
//         }, []);
//         return posts;
//       })
//       .catch((error) => console.log(error));
//   };


export const createPostForUser = (id, post) => {
    return fetch(baseURL + id + 'post', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}


// for comments:
export const getComments = (id) => {
    return fetch(baseURL + 'post/' + id + '/comment')
        .then(res => res.json());
}

export const createCommentForPost = (id, comment) => {
    return fetch(baseURL + 'post/' + id + '/comment', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}
export const putPost = (id, payload) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}