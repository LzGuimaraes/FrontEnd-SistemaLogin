import React from 'react'
import Login from '../Pages/Login/index'
import ProtectedRoutes from '../Routes/ProtectedRoutes'
import Cadastro from '../Pages/Cadastro/index'
import Home from '../Pages/Home/index'
import Estoque from '../Pages/Estoque/index'
import ProdutoForm from '../Pages/ProdutoForm/index'
import EstoqueForm from '../Pages/EstoqueForm/index'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Routering = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="*" element={<Login/>} />
        <Route path="/cadastrar" element={<Cadastro/>} />
        <Route path="/home" element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
          }
        />
        <Route path="/estoque" element={
          <ProtectedRoutes>
            <Estoque />
          </ProtectedRoutes>
          }
        />
        <Route path="/produto/novo" element={
          <ProtectedRoutes>
            <ProdutoForm />
          </ProtectedRoutes>
          }
        />
        <Route path="/produto/editar/:id" element={
          <ProtectedRoutes>
            <ProdutoForm />
          </ProtectedRoutes>
          }
        />
        <Route path="/produto/estoque/:id" element={
          <ProtectedRoutes>
            <EstoqueForm />
          </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
   );
}
 
export default Routering;