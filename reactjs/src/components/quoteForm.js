import React, { useState } from 'react';
import Axios from "axios";
import SearchForm from './searchFormcomponent';
import QuoteList from './quoteList';


const QuoteForm = ({ onAddQuotes }) => {
    const [author, setAuthor] = useState('');
    const [quoteText, setQuoteText] = useState('');
    const [tags, setTags] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const newQuote = {
            author: author,
            quoteText: quoteText,
            tags: tags
        };
    
        try {
            // Send the newQuote object as the request body in the POST request
            const response = await Axios.post(`https://localhost:7285/api/quotes`, newQuote);
    
            if (response.status === 200) { // Check for the correct status code for creation
                alert("Quote added successfully");
                // Optionally, update your state with the new quote or refresh the list of quotes
                // setQuotes([...quotes, response.data]);
            } else {
                alert("Failed to add quote");
            }
        } catch (error) {
            console.error("Error adding quote:", error);
            alert("Error adding quote");
        }
    
        // Clear form fields
        setAuthor('');
        setQuoteText('');
        setTags('');
    };
    

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
                placeholder="Quote text"
                value={quoteText}
                onChange={(e) => setQuoteText(e.target.value)}
            />
            <input
                
                type="text"
                placeholder="Tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
            />
            <button type="submit">Add Quote</button>
        </form>
        <br/>
        <SearchForm/>
        <br/>
        <QuoteList/>
        </>
    );
};

export default QuoteForm;
