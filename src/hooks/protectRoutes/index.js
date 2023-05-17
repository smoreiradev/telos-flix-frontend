import { Outlet, Navigate } from 'react-router-dom';

import { useContext } from 'react';
import { AuthenticateContext } from '../../contexts/AuthenticateContext';

export const ProtectRoutes = () => {
    const { cookies } =  useContext(AuthenticateContext)

    return cookies.token ? <Outlet/> : <Navigate to='/' exact />
};