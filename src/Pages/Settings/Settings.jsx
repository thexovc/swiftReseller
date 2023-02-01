import Website from '../../components/DashBoard/Settings/Website/Website'
import Website_Noti from '../../components/DashBoard/Settings/Website_Noti/Website_Noti'
import Sidebar from '../../components/DashBoard/Sidebar/Sidebar'
import './Settings.css'

const Settings = () => {
    return (
        <div className='app__main'>
            <div className='sidebar__main__con'>
                <Sidebar />
            </div>
            <div className='app__routes !bg-[#EBEAF4] !text-left'>
                <div className='settings  md:!w-[95%] flex flex-col'>
                    <h1 className=" text-2xl font-semibold text-left py-4 pl-8">Settings</h1>
                    <div className="order__filter !w-[95%]  bg-white text-left p-4">
                        <p className='bg-[#2A3B68] !text-white pr-4 rounded-md'>Website Settings</p>
                        <p>Website Logo</p>
                        <p>Website Notification</p>
                        <p>Cookie Policy</p>
                        <p>Terms and Policy</p>
                        <p>Default Setting</p>
                        <p>Currency Setting</p>
                        <p>Affiliate Setting</p>
                        <p>Childpanel Setting</p>
                        <p>Other</p>
                        <p>Email Setting</p>
                        <p>Email Template</p>
                        <p>Payment</p>
                    </div>


                    <div className="settings__input !w-[95%] md:w-[100%] mt-10 !bg-white p-10 gap-5">
                        {/* <Website /> */}
                        <Website_Noti />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings