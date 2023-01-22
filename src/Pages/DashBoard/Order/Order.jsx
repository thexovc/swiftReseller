import Sidebar from '../../../components/DashBoard/Sidebar/Sidebar'
import Footer from '../../../components/Footer/Footer'
import './Order.css'

const Order = () => {
    return (
        <div className='app__main'>
            <div className='sidebar__main__con'>
                <Sidebar />
            </div>
            <div className='app__routes'>
                <div className='refill'>
                    <div className="refill__table">
                        <h1 className="bg-[#C8D7FF] text-2xl font-semibold text-left py-4 pl-8">Order Logs</h1>
                        <div className="order__filter bg-[#C8D7FF] text-left p-4">
                            <p>All</p>
                            <p className='bg-[#2A3B68] !text-white pr-4 rounded-md'>Pending</p>
                            <p>Processing</p>
                            <p>In Progress</p>
                            <p>Completed</p>
                            <p>Partial</p>
                            <p>Canceled</p>
                            <p>Refunded</p>
                            <p>Awaiting</p>
                            <p>Error</p>
                        </div>
                        <div class="px-6 py-5 text-xl text-white text-left w-[100%]  bg-[#2A3B68] border-t-2 border-b-2 border-white">
                            Lists
                        </div>

                        {/* table start */}

                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">

                            <table class="w-full text-sm text-left ">

                                <thead class="text-xs text-white  bg-[#2A3B68] border-t-2 border-b-2 border-white ">
                                    <tr>

                                        <th scope="col" class="px-6 py-5">
                                            Order ID
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            API OrderID
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            User
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            Order Basic Details
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            Created
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            Refill
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            Refill Disable
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-[#2A3B68] text-white border-t-2 border-b-2 border-white">


                                        <td class="px-6 py-4">
                                            391182
                                        </td>
                                        <td class="px-6 py-4">
                                            35366084
                                        </td>
                                        <td class="px-6 py-4">
                                            Ledosovba@gmail.com
                                        </td>
                                        <td class="px-6 py-4">
                                            <p>
                                                8979 - Twitter Followes [1-100k/D] [0-24/H]
                                            </p>
                                            <p className='mt-1'> Type: thelordofthe panels.com(ID3744)</p>
                                            <p> Link:</p>
                                            <p> Quantity 2000</p>
                                            <p> Charge: $2.60 (0.4300/2.1700)</p>
                                            <p> Start Counter: 8474</p>
                                            <p> Remains:</p>

                                        </td>
                                        <td class="px-6 py-4">
                                            2022-07-24
                                            22:08:59
                                        </td>
                                        <td class="px-2 py-4 ">
                                            <a href="#" class="font-medium text-sm md:text-xs text-white bg-[#3D954B] py-1 px-2 rounded-lg hover:underline">
                                                Completed
                                            </a>
                                        </td>
                                        <td class="py-4 px-2 md:px-0">
                                            <a href="#" class="font-medium text-sm md:text-xs text-white bg-[#F0884D] py-2 px-2 rounded-lg hover:underline">
                                                Complete Refill
                                            </a>
                                        </td>
                                        <td class="px-2 py-4 ">
                                            <a href="#" class="font-medium text-sm md:text-xs  text-white bg-[#E40D0D] py-2 px-2 rounded-lg hover:underline">
                                                Disable Refill
                                            </a>
                                        </td>

                                    </tr>


                                </tbody>
                            </table>
                        </div>

                        {/* table end */}
                    </div>
                </div >
                <Footer />
            </div>
        </div>
    )
}

export default Order