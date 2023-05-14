import React, { useState, useEffect } from 'react';

const Orders = () => {
   const [customers, setCustomers] = useState([]);

   useEffect(() => {
      fetch("customers.json")
         .then((response) => response.json())
         .then((data) => {
            setCustomers(data.customers.customer);
            console.log(data.customers);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <ul>
         {Array.isArray(customers) && customers.map((customer) => (
            <li key={customer.order["@id"]}>
               <h2>{customer.order["#text"]}</h2>
               <p>{customer.details.size}</p>
               <p>{customer.details.temperature}</p>
               <p>{customer.details.customization}</p>
               <img src={customer.details.picture} alt={customer.name} />
            </li>
         ))}
      </ul>

   );
};

export default Orders;
