import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body.jsx';

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    async function Contar() {
      document.title = '${contador}';
    };
    Contar();
  }, []);
  
  const aumentar = () => {
    setContador(contador + 1);
  };

  const disminuir = () => {
    setContador(contador - 1);
  };

  return (
    <div className="App">
      <Header/>
      <Body Contar = {contador} Subir = {aumentar} Bajar = {disminuir}></Body>
    </div>
  );
}

export default App;
