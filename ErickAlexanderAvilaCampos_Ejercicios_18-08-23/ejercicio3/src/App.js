import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contra, setContra] = useState('');
  const [datosEnviados, setDatosEnviados] = useState(null);

  const eventoSubmit = (e) => {
    e.preventDefault();

    if (nombre && correo && contra) {
      setDatosEnviados({ nombre, correo, contra });
    }
  };

  useEffect(() => {
    document.title = 'Formulario de Usuario';
  }, []);

  return (
    <div className="App">
      <h1>Registro de datos</h1>
      <form onSubmit={eventoSubmit}>
        <div className='div-form'>
          <label>Nombre:</label>
          <label>Correo electrónico:</label>
          <label>Contraseña:</label>
        </div>
        <div className='div-form'>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          <input type="password" value={contra} onChange={(e) => setContra(e.target.value)} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {datosEnviados && (
        <div className="datos-form">
          <h2>Datos registrados</h2>
          <div className='contenedor-datos'>
            <div className='div-datos'>
              <p>Nombre:</p>
              <p>Correo Electrónico:</p>
              <p>Contraseña:</p>
            </div>
            <div className='div-datos'>
              <p><b>{datosEnviados.nombre}</b></p>
              <p><b>{datosEnviados.correo}</b></p>
              <p><b>{datosEnviados.contra}</b></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
