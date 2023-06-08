import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { storedUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  if (!storedUser || !storedUser.token) {
    alert('Unauthorized access!');
    navigate('/');
    return;
  }

  if (!storedUser || storedUser.role !== 'admin') {
    alert('Unauthorized access!');
    navigate('/');
    return;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
