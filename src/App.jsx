import React, { useState } from 'react';
import './App.css';
import Formulario from './Components/Form';
import Card from './Components/Card';

function App() {
  const [datos, setDatos] = useState(null);

  const handleEnviar = (data) => {
    setDatos(data);
  };

  return (
    <div className="App">
      <h1>Queremos saber cuales son tús Películas Favoritas</h1>
      <Formulario onEnviar={handleEnviar} />
      {datos && <Card pelicula={datos.pelicula} anio={datos.anio} />}
    </div>
  );
}

export default App;
