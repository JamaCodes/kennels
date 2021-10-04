const remoteURL = "http://localhost:5002/customers"

export const getAllCustomers = () => {
  return fetch(`${remoteURL}`)
  .then(res => res.json())
}


export const getCustomerById = (customerId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/${customerId}`)
  .then(res => res.json())
}

export const deleteCustomer= (id) => {
  return fetch(`${remoteURL}/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}
