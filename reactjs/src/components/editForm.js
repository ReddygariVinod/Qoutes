import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';

const EditQuoteForm = () => {
    // Initialize state variables
    const [author, setAuthor] = useState('');
    const [quoteText, setQuoteText] = useState('');
    const [tags, setTags] = useState('');
  const navigate = useNavigate();


    // Get the state object from useLocation
    const { state } = useLocation();

    // Set initial state values based on the state object
    useEffect(() => {
        if (state) {
            setAuthor(state.author || '');
            setQuoteText(state.quoteText || '');
            setTags(state.tags || '');
        }
    }, [state]);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedQuote = {
            author,
            quoteText,
            tags,
        };

        try {
            // Make PUT request to update the quote
            const response = await Axios.put(`https://localhost:7285/api/quotes/${state.id}`, updatedQuote);

            if (response.status === 200) {
                alert('Quote updated successfully');
               navigate('/')
                // Optionally, navigate away or refresh data if necessary
            } else {
                alert('Failed to update quote');
            }
        } catch (error) {
            console.error('Error updating quote:', error);
            alert('Error updating quote');
        }
    };

    // Render the form
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
            />
            <textarea
                value={quoteText}
                onChange={(e) => setQuoteText(e.target.value)}
                placeholder="Quote Text"
            />
            <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Tags"
            />
            <button type="submit">Edit Quote</button>
        </form>
    );
};

export default EditQuoteForm;
