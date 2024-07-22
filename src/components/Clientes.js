import React, { useEffect, useState } from 'react';
import dash from '../assets/images/dash.jpg';
import '../assets/styles/Clientes.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/clients/')
      .then(response => response.json())
      .then(data => setClientes(data))
      .catch(error => console.error('Error fetching clients:', error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/detalle/${id}`);
  };

  return (
    <div className='clientes-container'>
      <nav>
        <div className='logo-name'>
          <div className='logo-image'>
            <img src={dash} alt="logo" />
          </div>
          <span className='logo_name'>TerraTest</span>
        </div>
        <div className='menu-items'>
          <ul className='nav-links'>
            <li>
              <Link to="/">
                <i className="fa-solid fa-house"></i>
                <span className='link-name'>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/clientes">
                <i className="fa-solid fa-users"></i>
                <span className='link-name'>Clientes</span>
              </Link>
            </li>
            <li>
              <Link to="/analisis">
                <i className="fa-solid fa-chart-bar"></i>
                <span className='link-name'>Análisis</span>
              </Link>
            </li>
            <li>
              <Link to="/cuenta">
                <i className="fa-regular fa-user"></i>
                <span className='link-name'>Cuenta</span>
              </Link>
            </li>
          </ul>
          <ul className='logout-mode'>
            <li className='mode'>
              <Link to="#">
                <i className="fa-regular fa-moon"></i>
                <span className='link-name'>Modo Oscuro</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className='main-contentdos'>
        <h1 className='title'>Clientes</h1>
        <div className='cards-containerdos'>
          {clientes.length === 0 ? (
            <p>Cargando clientes...</p>
          ) : (
            clientes.map((cliente, index) => (
              <div key={index} className='cardos' onClick={() => handleCardClick(cliente.id)}>
                <h2>{cliente.name}</h2>
                <p>Contacto: {cliente.number_contact}</p>
                <p>Ubicación: {cliente.locate}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
