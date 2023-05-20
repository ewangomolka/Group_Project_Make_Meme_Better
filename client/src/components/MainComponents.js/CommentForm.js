import React, { useState, useEffect } from 'react';

const CommentForm = () => {

    // need a state variable to hold all categories
    // need a state variable to hold the selected category
    // need a state variable to hold the random meme
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [randomMeme, setRandomMeme] = useState('');

    // need a function to fetch all categories
    useEffect(() => {
        fetch('http://localhost:9000/api/memes/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, []);

    // need a function to handle Category selection
    const handleCategorySelection = (event) => {
        setSelectedCategory(event.target.value);
    }

    // need a function to handle random meme generation
    const handleGenerateMeme = () => {
        fetch(`http://localhost:9000/api/memes/${selectedCategory}`)
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                setRandomMeme(data[randomIndex]);
            })
            .catch(error => console.log(error))
    }

    // need a function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted');
    }


    // drop down box to select the meme and be able to post it

    return (
        <>
            <h1>Comment Form</h1>
            <form onSubmit={handleSubmit} id='commentForm'>
                <label htmlFor="category">Select a category:</label>
                <select id='category' value={selectedCategory} onChange={handleCategorySelection}>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <button type='button' onClick={handleGenerateMeme} disabled={!selectedCategory}>Generate Random Meme</button>
                <div>
                    <img src={randomMeme.url} alt="random meme" />
                    <p>{randomMeme.name}</p>
                </div>
                <button type='submit'>Submit</button>

            </form>




        </>
    );
}

export default CommentForm;