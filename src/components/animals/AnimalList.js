import React, { useEffect , useState} from 'react';
import { getAllAnimals, getAnimalById } from '../../modules/AnimalManager';
import { AnimalCard } from './animalCard';
import { deleteAnimal, handleDeleteAnimal  } from '../../modules/AnimalManager';
import { useHistory } from 'react-router';
import './animallist.css'

export const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  const history = useHistory();


  const getAnimals = () => {
    return getAllAnimals().then(animalsFromAPI => {
      // We'll do something more interesting with this data soon.
      console.log(animalsFromAPI);
     
      setAnimals(animalsFromAPI);
    });
  };

  const handleDeleteAnimal = id => {
    deleteAnimal(id)
    .then(() => getAllAnimals().then(setAnimals));
  };

  useEffect(() => {
    console.log("useEffect Invoked")
    getAnimals();
  }, []);

  return (
    <div className="container-cards">
      //add this button above your display of animal cards
<section className="section-content">
<button class="button-74" role="button" onClick={() => {history.push("/animals/create")}}> 
<span class="text"> 
      Admit Animal</span>
  </button>
</section>

      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          handleDeleteAnimal={handleDeleteAnimal} />)}
    </div>
  );
};

