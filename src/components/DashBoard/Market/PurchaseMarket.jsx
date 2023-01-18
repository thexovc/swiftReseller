import './PurchaseMarket.css'

const PurchaseMarket = () => {
    return (
        <div className='purchasemarket'>
            <h1 className='text-2xl pt-10 font-bold hidden md:flex'>Purchase Market Details:</h1>


            <div className="purchasemarket__card">
                <div className='md:hidden right-0'>
                    <h1 className='text-xl pt-3  font-bold'>Purchase Market Details:</h1>
                    <p>19-Jul-2022</p>
                    <p className='font-bold'>James</p>
                    <p>jamesbatman@gmail.com</p>
                </div>


                <p className='hidden md:flex'>IG Accounts | Registered in 03.2020. Email included (original). An avatar and 5 posts are added. Resgistered from the RU IP.</p>

                <div className="purchasemarket__card__form hidden md:flex">
                    <div className="purchasemarket__card__form__input">
                        <label>Email</label>
                        <input type="email" value="jamesbatman@gmail.com" />
                    </div>
                    <div className="purchasemarket__card__form__input">
                        <label>Name</label>
                        <input type="text" value="James" />
                    </div>
                    <div className="purchasemarket__card__form__input">
                        <label>Quantity</label>
                        <input type="text" value="1pcs" />
                    </div>
                    <p>Price: $6.21</p>
                    <p>Date: 19-Jul-2022</p>
                </div>

                <div className="purchasemarket__card__text  flex-col gap-2 hidden md:flex">
                    <p className='text-[#757575]'>If you are buying an account for the first time buy not many of them (not more than 10 pcs) and check</p>
                    <p>Please note that this action is irreversible.</p>
                    <span className='text-[#1865D8] gap-2'><input type="checkbox" /> Terms and Conditions Apply</span>
                </div>

                <div className="purchasemarket__card__button hidden md:flex">
                    <button className='bg-[#3D954B]'>Proceed</button>
                    <button className='bg-[#F04D4D]'>Cancel</button>
                </div>

            </div>

            {/* mobile start */}


            <div className="purchasemarket__card__text flex-col gap-4 md:hidden p-5">
                <div className="w-[100%] p-5 text-white bg-[#2A3B68] mb-1">
                    <div className="flex w-[100%] gap-2 text-sm">
                        <p className='w-[60%]'>Details</p>
                        <p className='w-[20%]'>Quantity</p>
                        <p className='w-[20%]'>Price</p>
                    </div>
                </div>
                <div className="w-[100%] p-5 text-white bg-[#2A3B68]">
                    <div className="flex w-[100%] gap-2">
                        <p className='w-[60%]'>IG Accounts | Registered in 03.2020. Email included (original). An avatar and 5 posts are added. Resgistered from the RU IP.</p>
                        <p className='w-[20%]'>1pcs</p>
                        <p className='w-[20%]'>$6.21</p>
                    </div>
                </div>

                <p className='text-[#757575] pt-5'>If you are buying an account for the first time buy not many of them (not more than 10 pcs) and check</p>
                <p>Please note that this action is irreversible.</p>
                <span className='text-[#1865D8] gap-2'><input type="checkbox" /> Terms and Conditions Apply</span>
            </div>

            <div className="purchasemarket__card__button2">
                <button className='bg-[#3D954B]'>Proceed</button>
                <button className='bg-[#F04D4D]'>Cancel</button>
            </div>

            {/* mobile end */}
        </div>
    )
}

export default PurchaseMarket