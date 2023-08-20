import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Tarea from './components/tarea.jsx';

function App() {

  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  
  const agregarTarea = () => {
    if (nuevaTarea) {
      setTareas([...tareas, { text: nuevaTarea, completo: false, id: Date.now() }]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (id) => {
    const actualizarTarea = tareas.filter(tarea => tarea.id !== id);
    setTareas(actualizarTarea);
  };

  const estadoTarea = (id) => {
    const actualizarTarea = tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completo: !tarea.completo } : tarea
    );
    setTareas(actualizarTarea);
  };

  useEffect(() => {
    document.title = `Tareas Pendientes: ${tareas.length}`;
  }, [tareas]);

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <div className="form-tarea">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>
      <div className="lista-tarea">
        {tareas.map(tarea => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            text={tarea.text}
            completo={tarea.completo}
            estadoTarea={estadoTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
