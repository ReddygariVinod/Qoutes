import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetchQuotes();
  }, []);
  const fetchQuotes = async () => {
    try {
      const response = await Axios.get(`https://localhost:7285/api/quotes`);
      if (response.status === 200) {
        setQuotes(response.data);
      }
    } catch (error) {
      console.error("Error fetching quotes:", error);
      throw error;
    }
  };
const handleEditQuote=async(item)=>{
    const state = {
        id:item.id,
        author: item.author,
        quoteText: item.quoteText,
        tags: item.tags,
    };
    navigate(`/editQuotes/${item.id}`, { state });
}
const handleDeleteQuote=async(id)=>{
    try {
        const response = await Axios.delete(`https://localhost:7285/api/quotes/${id}`);
        if (response.status === 200) {
          alert("Delete Successfully")
        }
      } catch (error) {
        console.error("Error fetching quotes:", error);
        throw error;
      }

}
  return (
    <div>
{quotes.length > 0 ? (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Author</th>
                <th scope="col">Quote Text</th>
                <th scope="col">Tags</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            {quotes.map((item, index) => (
                <tr key={index}>
                    <td>{item.author}</td>
                    <td>{item.quoteText}</td>
                    <td>{item.tags}</td> {/* Join tags array */}
                    <td>
                        <button className="btn btn-warning" onClick={() => handleEditQuote(item)}>
                            Edit
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={() => handleDeleteQuote(item.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
) : (
    <div>No Data Found</div>
)}



   
    </div>
  );
};

export default QuoteList;
