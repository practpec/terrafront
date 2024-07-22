import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detalles() {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/clients/${id}`)
      .then(response => response.json())
      .then(data => setCliente(data))
      .catch(error => console.error('Error fetching client details:', error));
  }, [id]);

  if (!cliente) {
    return <p>Cargando detalles del cliente...</p>;
  }

  return (
    <div>
      <h1>Detalle del Cliente</h1>
      <h2>{cliente.name}</h2>
      <p>Contacto: {cliente.number_contact}</p>
      <p>Ubicación: {cliente.locate}</p>
    </div>
  );
}
