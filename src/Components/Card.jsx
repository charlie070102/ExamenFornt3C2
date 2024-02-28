import React from "react";

const Card = ({ pelicula, anio }) => (
  <div>
    <h2>Información de la película:</h2>
    <label>
      Película:
      <span>{pelicula}</span>
    </label>
    <br />
    <label>
      Protagonista:
      <span>{anio}</span>
    </label>
  </div>
);

export default Card;
