import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Kennels</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Animals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customer">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employee">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/location">Locations</Link>
            </li>
        </ul>
    )
}
