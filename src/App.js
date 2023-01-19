import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import PurchaseMarket from './components/DashBoard/Market/PurchaseMarket';
import Sidebar from './components/DashBoard/Sidebar/Sidebar';
import AddFunds from './Pages/DashBoard/AddFunds/AddFunds';
import Market from './Pages/DashBoard/Market/Market';
import NewOrder from './Pages/DashBoard/NewOrder/NewOrder';
import Ticket from './Pages/DashBoard/Ticket/Ticket';
import './App.css'
import Profile from './Pages/DashBoard/Profile/Profile';

function App() {

  return (
    <>
      <div className='app__main'>
        <div className='sidebar__main__con'>
          <Sidebar />
        </div>
        <div className='app__routes'>
          <Routes>
            <Route path='/addfund' element={<AddFunds />} />
            <Route path='/ticket' element={<Ticket />} />
            <Route path='/market' element={<Market />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/purchase_market' element={<PurchaseMarket />} />
            <Route path='/neworder' element={<NewOrder />} />
          </Routes>
        </div>
      </div>
    </>
  );

}

export default App;