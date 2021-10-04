import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { CustomerCard } from "./customer/customerCard";
import { EmployeeCard } from "./employee/employeeCard";
import { AnimalList } from "./animals/AnimalList";
import { LocationCard } from "./locations/LocationCard";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./locations/LocationList";
import { AnimalDetail } from "./animals/AnimalDetail";
import { AnimalForm } from './animals/AnimalForm'
import { CustomerDetail } from "./customer/CustomerDetail";
import { AnimalEditForm } from "./animals/AnimalEditForm";


export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Render the animal list when http://localhost:3000/animals */}
      <Route exact path="/animals">
        <AnimalList />
      </Route>
      <Route path="/animals/:animalId(\d+)">
        <AnimalDetail />
      </Route>

      <Route path="/animals/:animalId(\d+)/edit"> 
       <AnimalEditForm />
</Route>

      
      <Route exact path="/customer">
        <CustomerList />
      </Route>
      <Route path="/customer/:customerId(\d+)">
        <CustomerDetail />
      </Route>
      
      // Our shiny new route.
      <Route path="/animals/create">
        <AnimalForm />
      </Route>
      {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
      <Route exact path="/customer">
        <CustomerList />
      </Route>
      <Route exact path="/employee">
        <EmployeeList />
      </Route>
      <Route exact path="/location">
        <LocationList />
      </Route>
    </>
  );
};
