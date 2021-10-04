import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { getCustomerById } from "../../modules/CustomerManager";
import "./CustomerDetail.css";

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {customerId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getCustomerById(id) from CustomerManager and hang on to the data; put it into state
    console.log("useEffect", customerId)
    getCustomerById(customerId)
      .then(customer => {
        setCustomer({
          name: customer.name,
          address: customer.address,
        });
        setIsLoading(false);
      });
  }, [customerId]);

  return (
    <section className="customer">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer__address">{customer.address}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button> */}
    </section>
  );
};

