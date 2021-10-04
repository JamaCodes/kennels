import React from "react"
import "./employee.css"

export const EmployeeCard = ({employee, handleDeleteEmployee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__jobTitle">{employee.jobTitle}</div>
        <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>FIRE THEM</button>
    </section>
)
