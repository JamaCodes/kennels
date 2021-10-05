import React, { useState, useEffect } from "react";
import { AnimalSpotlight } from "../components/animals/AnimalSpotlight";
import { getRandomId } from "../modules/AnimalManager";
import { PropsAndState } from "./PropsAndState";
import { TodaysDate } from "./date/DateCard";

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

export const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
      <h2>Nashville Kennels</h2>
      <small>Loving care when you're not there.</small>

      <address>
        <div>Visit Us at the Nashville North Location</div>
        <div>500 Puppy Way</div>
      </address>
      <PropsAndState yourName={"Jama"} />
      <TodaysDate />

      <div>
        <address>
          Visit Us at the Nashville North Location
          <br />
          500 Puppy Way
        </address>
        <h1>Animal Spotlight</h1>
        <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
        {spotlightId && <AnimalSpotlight animalId={spotlightId} />}
      </div>
    </>
  );
};
