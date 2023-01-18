import React, { useState } from "react"
import "./Sidebar.css"
import { NavLink } from "react-router-dom"
import { AiOutlineMenu, AiTwotoneApi } from "react-icons/ai"
import { FaUserFriends, FaShoppingCart } from 'react-icons/fa'
import { GiServerRack } from 'react-icons/gi'
import { CgLoadbarDoc } from 'react-icons/cg'
import { BiMoney } from 'react-icons/bi'
import { GrTransaction } from 'react-icons/gr'
import { ImTicket } from 'react-icons/im'
import { FiLogOut } from 'react-icons/fi'
import { MdBusiness } from 'react-icons/md'


const Sidebar = () => {
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div >
            <div className="Navbar md:hidden">
                <div className="left__nav">
                    <AiOutlineMenu onClick={() => setIsOpen(true)} className="navbar__menubar" />
                </div>

            </div>

            {isOpen && (

                <div className="sidebar-con md:hidden" >

                    <nav class="sidebar pt-4" >
                        <ul>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/">
                                <FaShoppingCart /> New Order
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/login">
                                <CgLoadbarDoc /> Order
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/signup">
                                <FaShoppingCart />  Market
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/contact">
                                <GiServerRack /> Services
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/dogecoin">
                                <MdBusiness /> Market Transaction
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/bitcoin">
                                <AiTwotoneApi /> API
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/about-minting">
                                <ImTicket /> Tickets
                            </NavLink>
                            <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/responsible">
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
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/">
                            <FaShoppingCart /> New Order
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/login">
                            <CgLoadbarDoc /> Order
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/signup">
                            <FaShoppingCart />  Market
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/contact">
                            <GiServerRack /> Services
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/dogecoin">
                            <MdBusiness /> Market Transaction
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/bitcoin">
                            <AiTwotoneApi /> API
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/about-minting">
                            <ImTicket /> Tickets
                        </NavLink>
                        <NavLink className="sidebar__links gap-2 items-center" onClick={handleClick} to="/responsible">
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
