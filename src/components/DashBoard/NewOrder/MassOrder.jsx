import './MassOrder.css'

const MassOrder = () => {
    return (
        <div className='massorder'>
            <h1 className='text-xl my-4 font-bold'>One order per line in format</h1>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <p><span><input type="checkbox" /> YES, I HAVE CONFIRMED THE ORDER!</span></p>
            <div className="massorder__note">
                <p className='gap-1 flex md:flex-row flex-col'>
                    <span className='font-bold'>Note:</span>
                    Here you can place your orders easy! Please make sure you check all prices and delivery
                    times before you place a order! After a order submitted it cannot be canceled</p>
            </div>
        </div>
    )
}

export default MassOrder