import React, { useState, useEffect } from 'react';
import { getMemes, postMeme } from '../../services/MainServices';

const CommentForm = () => {

    // need a state variable to hold all categories
    // need a state variable to hold the selected category
    // need a state variable to hold the random meme
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [memes, setMemes] = useState([]);
    const [randomMeme, setRandomMeme] = useState('');


    // need a function to fetch all categories
    useEffect(() => {
        fetch('http://localhost:9000/api/memes')
          .then(response => response.json())
          .then(data => {
            setMemes(data);
            const uniqueCategories = [...new Set(data.map(meme => meme.category))];
            setCategories(uniqueCategories);
          })
          .catch(error => console.log(error))
      }, []);
      

    // need a function to handle Category selection
    const handleCategorySelection = (event) => {
        setSelectedCategory(event.target.value);
    }

    // need a function to handle random meme generation
    const handleGenerateMeme = () => {
        if (selectedCategory) {
          const filteredMemes = memes.filter(meme => meme.category === selectedCategory);
          const randomIndex = Math.floor(Math.random() * filteredMemes.length);
          setRandomMeme(filteredMemes[randomIndex]);
        }
      };
      

    // need a function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted');
        const payload = {
            category: selectedCategory,
            meme: randomMeme,
        }

        postMeme(payload)
            .then((response) => {
                console.log(response);
                setSelectedCategory('');
                setRandomMeme('');
            })
            .catch((error) => {
                console.error('Error:', error);
            }
            );

    }

    // drop down box to select the meme and be able to post it

    return (
        <>
      <h1>Comment Form</h1>
      <form onSubmit={handleSubmit} id='commentForm'>
        <label htmlFor="category">Select a category:</label>
        <select id='category' value={selectedCategory} onChange={handleCategorySelection}>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <button type='button' onClick={handleGenerateMeme} disabled={!selectedCategory}>
          Generate Random Meme
        </button>
        <div>
          {randomMeme && (
            <>
              <img src={randomMeme.url} alt="random meme" />
              <p>{randomMeme.name}</p>
            </>
          )}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
    );
}

export default CommentForm;