import React, {useState, createContext, useEffect} from "react";
import { RateContext } from "./RateContext";
import axios from "axios";
import FlashMessage from "../components/flashMessage";

const apiURL = 'http://localhost:3333';

export const RateContext = createContext();

export default  function RateProvider ({ children }) {
  const [rateData, setRateData] = useState([]);
  const [flashMessage, setFlashMessage] = useState('');
  const [comments, setComments] = useState([]);

  const showFlashMessage = (message) => {
    setFlashMessage(message);
  };

  const movieRating = async({movie_id, content, rating}) => {
    try {
      const ratingResponse = await axios.post(`${apiURL}/comments`, {
        movie_id, 
        content, 
        rating
      });
      if (ratingResponse.status === 200) {
        setRateData(movie_id, content, rating);
        showFlashMessage(`Comentário adicionado com sucesso.`)
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
    movieRating();
    fetchComments();
  }, [])

  const RateContextValue = {
    movieRating,
  };

  return(
    <RateContextValue.Provider value={RateContextValue}>
      {flashMessage && <FlashMessage message={flashMessage} onClose={() => setFlashMessage('')} />}
      {children}
    </RateContextValue.Provider>
  );
}