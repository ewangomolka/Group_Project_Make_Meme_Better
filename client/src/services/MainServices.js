const baseURL = 'http://localhost:9000/api/memes/'

export const getMemes = ()=>{
    return fetch(baseURL)
    .then(res => res.json())
}

export const postMeme = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteMeme = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateMeme = (id, payload) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}