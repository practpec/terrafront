import React, { useState } from 'react';
import '../assets/styles/Login.css';
import logo from '../assets/images/login.jpg';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.nombre === username && u.password === password);

    if (user) {
      localStorage.setItem('token', 'fake-jwt-token'); // Este es un token falso para indicar que el usuario está autenticado
      console.log('Login exitoso:', user);
      navigate('/analisis');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="login-content">
          <h1 className="title">TERRATEST</h1>
          <h2>BIENVENIDO</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Usuario</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Iniciar Sesión</button>
          </form>
          <div className="register-link">
            <Link to="/registro">¿No tienes una cuenta? <a href="#register">Regístrate</a></Link>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
