import React, { useState, useEffect } from 'react';
//import the components we will need

import { deleteCustomer, getAllCustomers, getCustomerById } from '../../modules/CustomerManager'
import { CustomerCard } from './customerCard'

export const CustomerList = () => {
  // The initial state is an empty array
  const [customers, setCustomers] = useState([])

  const getCustomers = () => {
    // After the data comes back from the API, we
    //  use the setCustomers function to update state
    return getAllCustomers().then(CustomersFromAPI => {
      setCustomers(CustomersFromAPI)
    })
  }

  const handleDeleteCustomer = id => {
    deleteCustomer(id)
    .then(() => getAllCustomers().then(setCustomers));

  }

  // got the Customers from the API on the component's first render
  useEffect(() => {
    getCustomers();
  }, [])

  // Finally we use .map() to "loop over" the Customers array to show a list of Customer cards
  return (
    <div className="container-cards">
      {customers.map(customer => 
      <CustomerCard  
      key={customer.id} 
      customer={customer} 
      handleDeleteCustomer={handleDeleteCustomer}
      />)}
    </div>
  )
}

