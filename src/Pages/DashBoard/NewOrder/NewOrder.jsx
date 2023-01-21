import './NewOrder.css'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { FiCopy } from 'react-icons/fi'
import { GiDiamondTrophy } from 'react-icons/gi'
import vid from '../../../assets/DashBoard/order.mp4'
import MassOrder from '../../../components/DashBoard/NewOrder/MassOrder'
import SingleOrder from '../../../components/DashBoard/NewOrder/SingleOrder'
import { useState } from 'react'
import Sidebar from '../../../components/DashBoard/Sidebar/Sidebar'

const NewOrder = () => {
    const [massOrder, setMassOrder] = useState(false)


    return (
        <div className='app__main'>
            <div className='sidebar__main__con'>
                <Sidebar />
            </div>
            <div className='app__routes'>
                <div className='neworder'>
                    <div className="neworder__bal">
                        <div className="neworder__bal__con bg-[#C8D7FF]">
                            <AiOutlineCreditCard className='text-3xl text-[#2A3B68]' />
                            <div className="text-xl text-[#2A3B68]">
                                <p>Spent Balance</p>
                                <p>499.36</p>
                            </div>
                        </div>

                        <div className="neworder__bal__con bg-[#2A3B68]">
                            <AiOutlineCreditCard className='text-3xl text-[#7399FF]' />
                            <div className="text-xl text-[#7399FF]">
                                <p>Spent Balance</p>
                                <p>499.36</p>
                            </div>
                        </div>

                    </div>

                    <div className="neworder__type">
                        <div className="neworder__option">
                            <p className={`flex gap-2 items-center text-sm md:text-xl p-4 rounded-xl cursor-pointer ${!massOrder ? "bg-[#C8D7FF]" : ""}`} onClick={() => setMassOrder(false)}> <span><FiCopy /></span> Single Order</p>
                            <p className={`flex gap-2 items-center text-sm md:text-xl ${massOrder ? "bg-[#C8D7FF]" : ""} cursor-pointer p-4 rounded-xl`} onClick={() => setMassOrder(true)}> <span><GiDiamondTrophy /></span> Mass Order</p>
                        </div>

                        {!massOrder && (
                            <SingleOrder />
                        )}
                        {massOrder && (
                            <MassOrder />
                        )}
                    </div>

                    <div className="neworder__video">
                        <h1 className='text-2xl'>Using Mass Order Swift</h1>
                        <div className="neworder__video__con">
                            <video src={vid} controls></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewOrder