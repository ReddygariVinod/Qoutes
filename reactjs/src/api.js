import axios from 'axios';

export const API_BASE_URL = 'https://localhost:7285/api';

// Utility functions for making API requests


export const fetchQuotes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/quotes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching quotes:', error);
        throw error;
    }
};


export const addQuotes = async (newQuotes) => {
    debugger
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await axios.post(`${API_BASE_URL}/quotes`, newQuotes, config);
        
        return response.data;
    } catch (error) {
        console.error('Error adding quotes:', error);
        // Log the error response details for debugging
        if (error.response) {
            console.error('Response error details:', error.response.data);
        }
        throw error;
    }
};


export const updateQuote = async (id, updatedQuote) => {
    return axios.put(`${API_BASE_URL}/quotes/${id}`, updatedQuote);
};

export const deleteQuote = async (id) => {
    return axios.delete(`${API_BASE_URL}/quotes/${id}`);
};
