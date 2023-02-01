import './Website.css'

const Website = () => {
    return (
        <div className='website__setting'>
            <h1 className='font-black text-2xl pb-2'>Website Setting</h1>
            <p>Maintenance Mode</p>

            <div className="settings__active">
                <p>00</p>
                <p>Active</p>
            </div>

            <p>Note: Make such you remember this link to get access mode before you activte</p>
            <a className='text-[#0AA4F1]' href="https://Swiftresseler.com/maintenance/access">https://Swiftresseler.com/maintenance/access</a>

            <div className="w-full flex gap-5 justify-center">
                <div className="w-full flex flex-col gap-3 ">
                    <label>Website Name</label>
                    <input className='singleorder__right__input' type="text" />
                </div>
            </div>

            <div className="w-full flex gap-3">
                <div className="w-full gap-3 flex flex-col">
                    <label>Website Description</label>
                    <textarea className='singleorder__right__input' name="" id="" cols="30" rows="5"></textarea>
                </div>
            </div>
            <div className="w-full flex gap-3">
                <div className="w-full gap-3 flex flex-col">
                    <label>Website Keywords</label>
                    <textarea className='singleorder__right__input' name="" id="" cols="30" rows="5"></textarea>
                </div>
            </div>

            <div className="w-full flex gap-3 justify-center">
                <div className="w-full flex flex-col gap-3">
                    <label>Website Title</label>
                    <input className='singleorder__right__input' type="text" />
                </div>
            </div>

            <div className="w-full">
                <button className='bg-[#F04E31] py-2 px-6 text-white font-semibold rounded-2xl'>Save</button>
            </div>
        </div>
    )
}

export default Website