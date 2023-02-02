import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Auth/Login/Login";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
import DashBoard from "./Pages/DashBoard/DashBoard";
import NewOrder from "./Pages/DashBoard/NewOrder/NewOrder";
import AddFunds from "./Pages/DashBoard/AddFunds/AddFunds";
import Ticket from "./Pages/DashBoard/Ticket/Ticket";
import Market from "./Pages/DashBoard/Market/Market";
import Profile from "./Pages/DashBoard/Profile/Profile";
import Services from "./Pages/DashBoard/Services/Services";
import PurchaseMarket from "./components/DashBoard/Market/PurchaseMarket";
import Sidebar from "./components/DashBoard/Sidebar/Sidebar";
import Order from "./Pages/DashBoard/Order/Order";
import MarketTran from "./Pages/DashBoard/MarketTran/MarketTran";
import PaymentTran from "./Pages/DashBoard/PaymentTran/PaymentTran";
import Footer from "./components/Footer/Footer";
import News from "./Pages/News/News";
import Settings from "./Pages/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/news" element={<News />} />


        {/* dashboard */}
        <Route path='/neworder' element={<NewOrder />} />
        <Route path='/addfund' element={<AddFunds />} />
        <Route path='/ticket' element={<Ticket />} />
        <Route path='/market' element={<Market />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/service' element={<Services />} />
        <Route path='/purchase_market' element={<PurchaseMarket />} />
        <Route path='/order' element={<Order />} />
        <Route path='/market_transaction' element={<MarketTran />} />
        <Route path='/payment_transaction' element={<PaymentTran />} />
        <Route path='/settings' element={<Settings />} />



      </Routes>

    </div>
  );
}

export default App;
