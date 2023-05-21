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

// For posts:
export const getPosts = () => {
    return fetch(baseURL + 'post')
        .then(res => res.json())
}

export const createPostForUser = (id, post) => {
    return fetch(baseURL + id + '/post', {
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