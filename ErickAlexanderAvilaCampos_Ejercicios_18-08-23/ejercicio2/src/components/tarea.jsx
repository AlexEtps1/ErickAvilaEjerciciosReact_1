import React from 'react';

function Tarea(props) {
  const actualizar = () => {
    props.estadoTarea(props.id);
  };

  const eliminar = () => {
    props.eliminarTarea(props.id);
  };

  return (
    <div className={`tarea ${props.completo ? 'completo' : ''}`}>
      <span>{props.text}</span>
      <button onClick={actualizar}>{props.completo ? 'Marcar Incompleta' : 'Marcar Completa'}</button>
      <button onClick={eliminar}>Eliminar</button>
    </div>
  );
}

export default Tarea;