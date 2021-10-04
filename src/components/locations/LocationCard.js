import React from "react"
import "./location.css"

export const LocationCard = ({location, handleDeleteLocation}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="locatin__address">{location.address}</div>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>sell</button>
    </section>
)
