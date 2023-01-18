import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import PurchaseMarket from './components/DashBoard/Market/PurchaseMarket';
import AddFunds from './Pages/DashBoard/AddFunds/AddFunds';
import Market from './Pages/DashBoard/Market/Market';
import Ticket from './Pages/DashBoard/Ticket/Ticket';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/addfund' element={<AddFunds />} />
          <Route path='/ticket' element={<Ticket />} />
          <Route path='/market' element={<Market />} />
          <Route path='/purchase_market' element={<PurchaseMarket />} />
        </Routes>
      </div>
    </>
  );

}

export default App;