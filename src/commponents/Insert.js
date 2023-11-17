
import React, { useState } from 'react';
import insertService from '../services/insertService';
import { useNavigate  } from 'react-router-dom';

const Insert = ({ onInsertarUsuario }) => {
  const [nombre, setNombre] = useState('');
  const [coreo, setcoreo] = useState('');
  const [edad, setEdad] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !coreo || !edad) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (!validateEmail(coreo)) {
      setError('coreo electrónico no válido');
      return;
    }

    const edadNumber = parseInt(edad, 10);
    if (isNaN(edadNumber) || edadNumber <= 0) {
      setError('La edad debe ser un número mayor a 0');
      return;
    }

    setError(null);

    const nuevoUsuario = {
      nombre,
      coreo,
      edad: edadNumber,
    };

    try {
      await insertService.insertarUsuario(nuevoUsuario);
      navigate('/mygrid');

      onInsertarUsuario(nuevoUsuario);

      // Clear the fields after inserting the user
      setNombre('');
      setcoreo('');
      setEdad('');
    } catch (error) {
      console.error('Error al enviar datos al servicio:', error);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          coreo:
          <input type="text" value={coreo} onChange={(e) => setcoreo(e.target.value)} />
        </label>
        <br />
        <label>
          Edad:
          <input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </label>
        <br />
        <button type="submit">Insertar Usuario</button>
      </form>
    </div>
  );
};

export default Insert;