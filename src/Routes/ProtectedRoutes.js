import React from 'react';
import { Navigate } from 'react-router-dom';
import UserService from '../Services/UserServices';

const userService = new UserService();

const ProtectedRoutes = ({ children }) => {
    const usuarioAutenticado = userService.usuarioAutenticado()
    return usuarioAutenticado ? children : <Navigate to="/" />
}

export default ProtectedRoutes;