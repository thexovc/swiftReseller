import Sidebar from '../../../components/DashBoard/Sidebar/Sidebar'
import Footer from '../../../components/Footer/Footer'
import './Services.css'

const Services = () => {
    return (
        <div className='app__main'>
            <div className='sidebar__main__con'>
                <Sidebar />
            </div>
            <div className='app__routes'>
                <div className='service'>
                    <div className="service__search">
                        <div className="service__input">
                            <span><input type="text" /> </span>
                        </div>

                        <div className="service__select">
                            <select name="" id="">
                                <option value="">Sort by</option>
                            </select>
                        </div>

                    </div>

                    <div className="service__filter">
                        <h1 className='text-2xl'>Services</h1>
                    </div>

                    <div className="service__cat">
                        <div className="service__cat__title p-10">
                            <h1 className='text-xl'>NFT Marketplace</h1>
                        </div>
                        <div className="service__cat__table__name">
                            <p>ID</p>
                            <h1>Name</h1>
                            <p>Rate per 1000</p>
                            <p>Min/MaxOrder</p>
                            <p>Description</p>
                        </div>

                        <div className="service__cat__table border-b-2 flex items-center border-gray-400">
                            <p>8283</p>
                            <h1>Discord - ONLINE NFT Profile Pictures Server Members[1 MONTH ONLINE]</h1>
                            <p>243</p>
                            <p>500/5000</p>
                            <p className='md:flex md:items-center '>
                                <span className='bg-red-700 py-1 md:px-5 px-1 text-white'>
                                    Details
                                </span>
                            </p>
                        </div>

                        <div className="service__cat__table border-b-2 flex items-center border-gray-400">
                            <p>8283</p>
                            <h1>Discord - ONLINE NFT Profile Pictures Server Members[1 MONTH ONLINE]</h1>
                            <p>243</p>
                            <p>500/5000</p>
                            <p className='md:flex md:items-center '>
                                <span className='bg-red-700 py-1 md:px-5 px-1 text-white'>
                                    Details
                                </span>
                            </p>
                        </div>

                        <div className="service__cat__table border-b-2 flex items-center border-gray-400">
                            <p>8283</p>
                            <h1>Discord - ONLINE NFT Profile Pictures Server Members[1 MONTH ONLINE]</h1>
                            <p>243</p>
                            <p>500/5000</p>
                            <p className='md:flex md:items-center '>
                                <span className='bg-red-700 py-1 md:px-5 px-1 text-white'>
                                    Details
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Services