import {React, useState} from "react";
import { Route, Redirect } from "react-router-dom";
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
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"



export const ApplicationViews = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
  }
  


  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>
<Route exact path="/animals">
	{isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
</Route>

<Route path="/login">
	<Login setAuthUser={setAuthUser}/>
</Route>

<Route path="/register">
	<Register setAuthUser={setAuthUser}/>
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
