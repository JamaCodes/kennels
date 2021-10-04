import React from "react"
import "./customer.css"
import { Link } from 'react-router-dom'

export const CustomerCard = ({customer, handleDeleteCustomer}) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__address">{customer.address}</div>
        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>yeet</button>
        <Link to={`/customer/${customer.id}`}>
          <button>Details</button>
        </Link>

    </section>
)
