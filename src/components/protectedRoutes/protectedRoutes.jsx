import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import VideoPlayer from '../videoPlayer';

const ProtectedRoutes = () => {
  const { id } = useParams();
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      alert('Acesso negado. Faça login.')
      navigate(`/video/${id}`); 
    }
  }, [isLoggedIn, navigate]);

};

export default ProtectedRoutes;
