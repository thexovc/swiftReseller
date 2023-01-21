import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import PurchaseMarket from '../../components/DashBoard/Market/PurchaseMarket';
import Sidebar from '../../components/DashBoard/Sidebar/Sidebar';
import AddFunds from './AddFunds/AddFunds';
import Market from './Market/Market';
import NewOrder from './NewOrder/NewOrder';
import Ticket from './Ticket/Ticket';

import Profile from './Profile/Profile';
import Services from './Services/Services';


function DashBoard() {

    return (
        <>
            <div className='app__main'>
                <div className='sidebar__main__con'>
                    <Sidebar />
                </div>
                <div className='app__routes'>
                    <Routes>
                        <Route path='/neworder' element={<NewOrder />} />
                        <Route path='/addfund' element={<AddFunds />} />
                        <Route path='/ticket' element={<Ticket />} />
                        <Route path='/market' element={<Market />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/service' element={<Services />} />
                        <Route path='/purchase_market' element={<PurchaseMarket />} />
                    </Routes>
                </div>
            </div>
        </>
    );

}

export default DashBoard;