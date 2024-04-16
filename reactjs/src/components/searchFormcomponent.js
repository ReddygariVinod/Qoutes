import React, { useState } from 'react';

const SearchForm = () => {
    const [author, setAuthor] = useState('');
    const [tags, setTags] = useState('');
    const [text, setText] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        // const tagsArray = tags.split(',').map(tag => tag.trim());
        // onSearch({ author, tags: tagsArray, text });
    };

    return (
        <>
        <form>
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="text"
                placeholder="Tags (comma-separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
            />
            <input
                type="text"
                placeholder="Quote text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
      
        </>
    );
};

export default SearchForm;
