import React, { useState } from "react"
import "./Sidebar.css"
import { NavLink } from "react-router-dom"
import { AiOutlineMenu, AiTwotoneApi } from "react-icons/ai"
import { FaShoppingCart } from 'react-icons/fa'
import { GiServerRack } from 'react-icons/gi'
import { CgLoadbarDoc } from 'react-icons/cg'
import { BiMoney, BiUserCircle } from 'react-icons/bi'
import { ImTicket } from 'react-icons/im'
import { FiLogOut } from 'react-icons/fi'
import { MdBusiness } from 'react-icons/md'
import logo from '../../../assets/logo.png'


const Sidebar = () => {
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div >
            {/* mobile */}
            <div className="Navbar md:hidden">
                <div className="left__nav">
                    <NavLink to={`/profile`} ><BiUserCircle className="navbar__menubar" /></NavLink>
                    <NavLink to={`/`} ><p className="text-2xl flex font-black items-center"> <img src={logo} className="w-[50px]" /> Swift</p> </NavLink>
                    <AiOutlineMenu onClick={() => setIsOpen(true)} className="navbar__menubar" />
                </div>
            </div>
            {/* mobile end */}


            {/* desktop */}

            {/* desktop end */}

            {isOpen && (

                <div className="sidebar-con md:hidden" >

                    <nav class="sidebar pt-4" >
                        <ul>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/neworder">
                                <FaShoppingCart /> New Order
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/">
                                <CgLoadbarDoc /> Order
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/market">
                                <FaShoppingCart />  Market
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/service">
                                <GiServerRack /> Services
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/dogecoin">
                                <MdBusiness /> Market Transaction
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/bitcoin">
                                <AiTwotoneApi /> API
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/ticket">
                                <ImTicket /> Tickets
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/addfund">
                                <BiMoney /> Add Funds
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/leverage">
                                <MdBusiness /> Payment Transactions
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/copy-trader">
                                <FiLogOut /> Logout
                            </NavLink>

                        </ul>
                    </nav>
                    <div className="side-overlay" onClick={() => setIsOpen(false)}></div>
                </div>
            )}

            {/* desktop */}
            <div className="sidebar-con desktop md:block" >

                <nav class="sidebar pt-4" >
                    <ul>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/neworder">
                            <FaShoppingCart /> New Order
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/login">
                            <CgLoadbarDoc /> Order
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/market">
                            <FaShoppingCart />  Market
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/service">
                            <GiServerRack /> Services
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/dogecoin">
                            <MdBusiness /> Market Transaction
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/bitcoin">
                            <AiTwotoneApi /> API
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/ticket">
                            <ImTicket /> Tickets
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/addfund">
                            <BiMoney /> Add Funds
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/leverage">
                            <MdBusiness /> Payment Transactions
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/copy-trader">
                            <FiLogOut /> Logout
                        </NavLink>

                    </ul>
                </nav>
                {/* <div className="side-overlay" onClick={() => setIsOpen(false)}></div> */}
            </div>
            {/*  */}

        </div>
    )
}

export default Sidebar
