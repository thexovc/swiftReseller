import './NewOrder.css'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { FiCopy } from 'react-icons/fi'
import { GiDiamondTrophy } from 'react-icons/gi'
import vid from '../../../assets/DashBoard/order.mp4'
import MassOrder from '../../../components/DashBoard/NewOrder/MassOrder'

const NewOrder = () => {
    return (
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
                    <p className='flex gap-2 items-center text-lg md:text-xl'> <span><FiCopy /></span> Single Order</p>
                    <p className='flex gap-2 items-center text-lg md:text-xl bg-[#C8D7FF] p-4 rounded-xl'> <span><GiDiamondTrophy /></span> Mass Order</p>
                </div>
                <MassOrder />
            </div>

            <div className="neworder__video">
                <h1 className='text-2xl'>Using Mass Order Swift</h1>
                <div className="neworder__video__con">
                    <video src={vid} controls></video>
                </div>
            </div>
        </div>
    )
}

export default NewOrder