import React, { useState, useEffect} from "react"
import {useParams, useHistory} from "react-router-dom"
import {getAnimalById, update} from "../../modules/AnimalManager"
import "./AnimalForm.css"
import reactDom from "react-dom"

export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "", customerId: "" , locationId: "", });
  const [isLoading, setIsLoading] = useState(false);

  const {animalId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
      customerId: animal.customerId,
      locationId: animal.locationId
     
    };

    update(editedAnimal)
    .then(() => history.push("/animals")
    )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
    
        </fieldset>
      </form>
    </>
  );
}

