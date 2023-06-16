import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import VideoPlayer from '../videoPlayer';

const ProtectedRoutes = ({children}) => {
  const { id } = useParams();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      return <Navigate to="/" replace />
    }
    return children
  }, [isLoggedIn]);

};

export default ProtectedRoutes;
