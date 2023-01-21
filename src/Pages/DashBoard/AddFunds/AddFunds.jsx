import { useState } from 'react'
import ManualFund from '../../../components/DashBoard/AddFunds/ManualFund'
import OnlineFund from '../../../components/DashBoard/AddFunds/OnlineFund'
import Sidebar from '../../../components/DashBoard/Sidebar/Sidebar'
import './AddFunds.css'

const AddFunds = () => {
    const [online, setOnline] = useState(true)


    return (
        <div className='app__main'>
            <div className='sidebar__main__con'>
                <Sidebar />
            </div>
            <div className='app__routes'>
                <div className="addfund">
                    <div className="addfund__con">
                        <div className="addfund__tab">
                            <p onClick={() => setOnline(true)} className={`cursor-pointer ${online && ('addfund__tab__active')}`}>Online Payment</p>
                            <p onClick={() => setOnline(false)} className={`cursor-pointer ${!online && ('addfund__tab__active')}`}>Manual Payment</p>
                        </div>


                        <div className="addfund__method">
                            {online && (<OnlineFund />)}
                            {!online && (<ManualFund />)}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFunds