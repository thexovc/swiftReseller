import './PaymentIntegration.css'

const PaymentIntegration = () => {
    return (
        <div className='paymentintegration'>
            <h1 className='text-xl font-bold'>Payment Integration</h1>

            <div className='w-full'>
                <h2 className='font-semibold text-sm'>Manual Payment</h2>
                <span className='flex gap-1'>
                    <input type="checkbox" name="" id="" />
                    <p className='text-[##777777]'>Active</p>
                </span>
            </div>

            <div className="w-full flex gap-3">
                <div className="w-full gap-3 flex flex-col">
                    <label>Content</label>
                    <textarea className='singleorder__right__input' name="" id="" cols="30" rows="5"></textarea>
                </div>
            </div>

            <div className="w-full">
                <button className='bg-[#F04E31] py-2 px-6 text-white font-semibold rounded-2xl'>Save</button>
            </div>
        </div>
    )
}

export default PaymentIntegration