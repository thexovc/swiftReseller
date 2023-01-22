import Sidebar from '../../../components/DashBoard/Sidebar/Sidebar'
import './MarketTran.css'
import { BsCreditCard2FrontFill, BsThreeDotsVertical } from 'react-icons/bs'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RxDoubleArrowRight } from 'react-icons/rx'
import Footer from '../../../components/Footer/Footer'


const MarketTran = () => {
    return (
        <div className='app__main'>
            <div className='sidebar__main__con'>
                <Sidebar />
            </div>
            <div className='app__routes'>
                <div className='refill'>
                    <div className="refill__table">
                        <h1 className="bg-[#C8D7FF] text-[#2A3B68] text-2xl font-semibold text-left flex items-center gap-2 py-4 pl-8">
                            <span><BsCreditCard2FrontFill /></span> Market Transactions
                        </h1>

                        <div class="px-6 py-5 text-xl text-white text-left w-[100%]  bg-[#2A3B68] border-t-2 border-b-2 border-white">
                            Lists
                        </div>

                        {/* table start */}

                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">

                            <table class="w-full text-sm text-left ">

                                <thead class="text-xs text-white  bg-[#2A3B68] border-t-2 border-b-2 border-white ">
                                    <tr>

                                        <th scope="col" class="px-6 py-5">
                                            S/N
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            User
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            About The Account
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            Purchase
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            Deposit Date
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-[#2A3B68] text-white border-t-2 border-b-2 border-white">


                                        <td class="px-6 py-4">
                                            1
                                        </td>

                                        <td class="px-6 py-4">
                                            Ledosovba@gmail.com
                                        </td>

                                        <td class="px-6 py-4 flex md:flex-row flex-col gap-2 justify-center md:items-center">
                                            <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />

                                            <p className='break-normal sm:break-words md:break-all '>
                                                IG Account | Email address
                                                is included in the package.
                                                Male. Accounts are partially
                                                filled. Account are registered
                                                in IP addresses of UK

                                            </p>
                                        </td>

                                        <td class="px-6 py-4">
                                            1 pcs at $4.89
                                            per each
                                        </td>
                                        <td class="px-2 py-4 ">
                                            2022-07-24
                                            22:08:59
                                        </td>
                                        <td class="py-4 px-6 ">
                                            <div className='text-4xl'>
                                                <BsThreeDotsVertical />
                                            </div>
                                        </td>


                                    </tr>


                                </tbody>
                            </table>


                        </div>

                        {/* table end */}
                        <div className="ticket__pagination pt-2">
                            <p className='bg-[#2A3B68]'>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p className='flex items-center text-2xl font-thin'> <MdKeyboardArrowRight /> </p>
                            <p className='flex items-center text-xl text-black font-bold'> <RxDoubleArrowRight /> </p>
                        </div>
                    </div>
                </div >
                <Footer />
            </div>
        </div>
    )
}

export default MarketTran