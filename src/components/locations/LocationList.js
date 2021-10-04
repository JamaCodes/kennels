import React, { useState, useEffect } from 'react';
//import the components we will need
import { getAllLocations, getlocationById } from '../../modules/LocationManager';
import { LocationCard } from './LocationCard'
import { deleteLocation } from '../../modules/LocationManager';

export const LocationList = () => {
  // The initial state is an empty array
  const [Locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return getAllLocations().then(LocationsFromAPI => {
      setLocations(LocationsFromAPI)
    });
  };
  const handleDeleteLocation = id => {
    deleteLocation(id)
    .then(() => getAllLocations().then(setLocations));
};

  // got the Locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  // Finally we use .map() to "loop over" the Locations array to show a list of location cards
  return (
    <div className="container-cards">
      {Locations.map(location => 
      <LocationCard key={location.id} 
      location={location} 
      handleDeleteLocation={handleDeleteLocation}  />)}
    </div>
  );
};

