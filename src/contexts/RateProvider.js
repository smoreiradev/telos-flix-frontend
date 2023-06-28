import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import FlashMessage from "../components/flashMessage";

const apiURL = 'http://localhost:3333';

export const RateContext = createContext();

export default function RateProvider({ children }) {
  const [rateData, setRateData] = useState([]);
  const [flashMessage, setFlashMessage] = useState('');
  const [comments, setComments] = useState([]);

  const showFlashMessage = (message) => {
    setFlashMessage(message);
  };

  const movieRating = async ({ movie_id, content, rating }) => {
    try {
      const ratingResponse = await axios.post(`${apiURL}/comments`, {
        movie_id,
        content,
        rating
      });
      if (ratingResponse.status === 200) {
        setRateData(ratingResponse.data);
        showFlashMessage(`Comentário adicionado com sucesso.`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchComments = async ({ movie_id }) => {
    try {
      const response = await axios.get(`${apiURL}/comments/${movie_id}`);
      setComments(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Perform initial fetchComments or movieRating based on your requirement
    fetchComments({ movie_id: 'your_movie_id' });
    // movieRating({ movie_id: 'your_movie_id', content: 'your_comment', rating: 5 });
  }, []);

  const RateContextValue = {
    movieRating,
    fetchComments
  };

  return (
    <RateContext.Provider value={RateContextValue}>
      {flashMessage && <FlashMessage message={flashMessage} onClose={() => setFlashMessage('')} />}
      {children}
    </RateContext.Provider>
  );
}
