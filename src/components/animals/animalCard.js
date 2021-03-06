import React from "react";
import { Link } from 'react-router-dom'
import "./animal.css";
import { useHistory } from "react-router-dom";

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {

  const history = useHistory();

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-petname">{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <button className="button-56" type="button" onClick={() => handleDeleteAnimal(animal.id)}>
          Discharge
        </button>
        <Link to={`/animals/${animal.id}`}>
          <button>Details</button>
        </Link>

        <button type="button"
  onClick={() => history.push(`/animals/${animal.id}/edit`)}>
  Edit
</button>

      </div>
    </div>
  );
};

//   <picture>
//   <img src={require('./dog.svg')} alt="My Dog" />
// </picture>

