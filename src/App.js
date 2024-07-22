import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './components/Principal';
import Login from './components/Login';
import Analisis from './components/Analisis';
import Registro from './components/Registro';
import Resultados from './components/Resultados';
import Clientes from './components/Clientes';
import Ganilli from './components/Ganilli';
import Detalles from './components/Detalles';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/analisis"
          element={
            <PrivateRoute>
              <Analisis />
            </PrivateRoute>
          }
        />
        <Route
          path="/resultados/:id"
          element={
            <PrivateRoute>
              <Resultados />
            </PrivateRoute>
          }
        />
        <Route
          path="/clientes"
          element={
            <PrivateRoute>
              <Clientes />
            </PrivateRoute>
          }
        />
        <Route
          path="/ganilli"
          element={
            <PrivateRoute>
              <Ganilli />
            </PrivateRoute>
          }
        />
        <Route
          path="/detalle/:id"
          element={
            <PrivateRoute>
              <Detalles />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
