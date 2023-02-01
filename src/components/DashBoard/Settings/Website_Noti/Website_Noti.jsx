import './Website_Noti.css'

const Website_Noti = () => {
    return (
        <div className='websitenoti__setting !gap-3 flex flex-col'>
            <h1 className='font-bold text-2xl'>Website Notification</h1>
            <p>Website Notification Mode</p>

            <div className="settings__active gap-4">
                <p>00</p>
                <p>Active</p>
            </div>



            <div className="w-full mt-2">
                <button className='bg-[#F04E31] py-2 px-6 text-white font-semibold rounded-2xl'>Save</button>
            </div>
        </div>
    )
}

export default Website_Noti