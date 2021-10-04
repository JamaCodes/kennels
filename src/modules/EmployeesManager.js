const employeeURL = "http://localhost:5002/employees"



export const getEmployeeById = (employeeId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${employeeURL}/${employeeId}`)
  .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch(`${employeeURL}`)
  .then(res => res.json())
}



export const deleteEmployee = (id) => {
  return fetch(`${employeeURL}/${id}`,{
   method: "DELETE" 
  }).then(res => res.json())
}

