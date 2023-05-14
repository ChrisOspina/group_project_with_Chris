import React, { useState, useEffect } from 'react';

const Customers = () => {
   const [customers, setCustomers] = useState([]);

   useEffect(() => {
      fetch("customers.json")
         .then((response) => response.json())
         .then((data) => {
            setCustomers(data.customers.customer);
            console.log(data.customers.customer)
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <ul>
         {Array.isArray(customers) && customers.map((customer) => (
            <li key={customer["@id"]}>
               <h2>{customer.name}</h2>
               <p>{customer.order["#text"]}</p>
            </li>
         ))}
      </ul>

   );
};

export default Customers;
