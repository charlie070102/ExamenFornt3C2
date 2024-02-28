import React, { useState } from "react";

const Form = ({ onEnviar }) => {
  const [pelicula, setPelicula] = useState("");
  const [anio, setAnio] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pelicula.length >= 3 && anio.length >= 6) {
      onEnviar({ pelicula, anio });
      setError("");
    } else {
      setError("Por favor chequea que la información sea correcta");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de la Pelicula :
        <input
          type="text"
          value={pelicula}
          onChange={(e) => setPelicula(e.target.value)}
        />
      </label>
      <br />
      <label>
        Protagonista :
        <input
          type="text"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Form;
