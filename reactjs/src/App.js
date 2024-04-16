import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchForm from './components/searchFormcomponent';
import QuoteForm from './components/quoteForm';
import QuoteList from './components/quoteList';
import EditQuoteForm from './components/editForm';

function App() {
    return (
  
        <Routes>
        <Route path="/" element={<QuoteForm />} /> {/* Add a home page or default path */}
        <Route path="/editQuotes/:id" element={<EditQuoteForm />} />
        {/* <Route path="/search" element={<SearchForm />} />
        <Route path="/add-quote" element={<QuoteForm />} />
        <Route path="/quotes" element={<QuoteList />} /> */}
    </Routes>
      
    );
}

export default App;
