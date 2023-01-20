import './SingleOrder.css'
import { FaShoppingCart } from 'react-icons/fa'

const SingleOrder = () => {
    return (
        <div className='singleorder'>
            <div className="singleorder__left">
                <h1 className='flex gap-2 items-center text-2xl font-bold'> <span className='text-[#2A3B68]'><FaShoppingCart /></span> Add New</h1>
                <div className="singleorder__input">
                    <label>Category</label>
                    <input type="text" />
                </div>

                <div className="singleorder__input">
                    <label>Order Service</label>
                    <input type="text" />
                </div>

                <div className="singleorder__input">
                    <label>Link</label>
                    <input type="text" />
                </div>

                <div className="singleorder__input">
                    <label>Quantity</label>
                    <input type="text" />
                </div>

                <div className="singleorder__input">
                    <p className='bg-[#2A3B68] text-white font-bold w-1/2 p-3 md:p-5 md:w-1/3'>Total Charge: $0</p>
                </div>

                <div className="singleorder__input">
                    <span className='gap-1 flex'><input type="checkbox" name="" id="" /> YES, I HAVE CONFIRMED THE ORDER!</span>
                </div>

                <div className="profile__button">
                    <button>Place Order</button>
                </div>

            </div>
            <div className="singleorder__right">
                <h1 className='flex gap-2 items-center text-2xl font-bold'> <span className='text-[#2A3B68]'><FaShoppingCart /></span> Order Resume</h1>
                <div className="singleorder__input">
                    <label>Service Name</label>
                    <input type="text" />
                </div>
                <div className="w-full flex gap-5">
                    <div className="w-1/2">
                        <label>Minimum Amount</label>
                        <input className='singleorder__right__input' type="text" />
                    </div>
                    <div className="w-1/2">
                        <label>Maximum Amount</label>
                        <input className='singleorder__right__input' type="text" />
                    </div>
                </div>

                <div className="w-full flex gap-5 justify-center">
                    <div className="w-1/2 flex flex-col items-center">
                        <label>Price per 1000 ($)</label>
                        <input className='singleorder__right__input' type="text" />
                    </div>
                </div>

                <div className="w-full flex gap-5 justify-center">
                    <div className="w-[95%] gap-5 flex flex-col items-center">
                        <label>Description</label>
                        <textarea className='singleorder__right__input' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleOrder