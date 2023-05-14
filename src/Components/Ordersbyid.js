import React, { useState, useEffect } from 'react';

const Ordersbyid = () => {
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
            <li key={customer.order["@id"]}>
               <p>{customer.order["@id"]}</p>
            </li>
         ))}
      </ul>

   );
};

export default Ordersbyid;
