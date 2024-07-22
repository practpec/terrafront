import React, { useState } from 'react';
import '../assets/styles/Registro.css';
import registroimg from '../assets/images/Registro.jpg';

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, telefono, password } = formData;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { nombre, email, telefono, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Registro exitoso:', newUser);
  };

  return (
    <div className="registro-container">
      <div className="registro-image">
        <img src={registroimg} alt="Registro" />
      </div>
      <div className="registro-form-container">
        <h1>Bienvenido, por favor regístrese</h1>
        <form className="registro-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn-submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
