import React from 'react';
import Customers from './Components/Customers';
import Customersbyid from './Components/Customersbyid';
import Orders from './Components/Orders';
import Ordersbyid from './Components/Ordersbyid';
function App() {
  return (
    <div className='app-main'>
      <Customers/>
      <Customersbyid/>
      <Orders/>
      <Ordersbyid/>
    </div>
  );
}
export default App;