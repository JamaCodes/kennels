const remoteURL = "http://localhost:5002/locations"



export const getAllLocations = () => {
  return fetch(`${remoteURL}`)
  .then(res => res.json())
}


export const getLocationsById = (locationId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/${locationId}`)
  .then(res => res.json())
}


export const deleteLocation = (id) => {
return fetch(`${remoteURL}/${id}`, {
  method : "DELETE"
}).then(res => res.json())

}
