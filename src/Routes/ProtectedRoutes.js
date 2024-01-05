import React from 'react';
import Routering from './routes';
import UserService from '../Services/UserServices';

const userService = new UserService();

const ProtectedRoutes = (children) => {
    const usuarioAutenticado = userService.usuarioAutenticado()
    return usuarioAutenticado ? children : <Routering/>
}

export default ProtectedRoutes;