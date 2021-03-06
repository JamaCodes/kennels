import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalDetail.css";

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {animalId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          location: animal.location,
          customer: animal.customer,
        });
        setIsLoading(false);
      });
  }, [animalId]);

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location"> {animal.location?.name}</div>
      <div className="animal__owner">{animal.customer?.name}</div>
      {/* <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button> */}
    </section>
  );
};

