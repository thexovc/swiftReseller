import Sidebar from '../../../components/DashBoard/Sidebar/Sidebar'
import Footer from '../../../components/Footer/Footer'
import './Ticket.css'

const Ticket = () => {
    return (
        <div className='app__main'>
            <div className='sidebar__main__con'>
                <Sidebar />
            </div>
            <div className='app__routes'>
                <div className='ticket'>
                    <div className='w-full flex mx-auto p-3 md:hidden'>
                        <input className='w-2/3 border-2 p-3 border-[#777777]' type="text" placeholder='search' />
                        <select name="" id="" className='1/3 border-2 p-3 border-[#777777] text-sm'>
                            <option value="Order ID" className='text-sm'>Order ID</option>
                        </select>
                    </div>

                    <div className="ticket__h1">
                        <h1>Tickets</h1>
                    </div>
                    <div className="ticket__msg">
                        <h1>Message Use</h1>
                        <button>Sort By</button>
                    </div>

                    <div className="ticket__con">
                        <div className="ticket__send">
                            <div className="ticket__send__con">
                                <label>Subject</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="ticket__send__con">
                                <label>Request</label>
                                <input type="text" />
                            </div>
                            <div className="ticket__send__con">
                                <label>Order ID</label>
                                <input type="text" />
                            </div>
                            <div className="ticket__send__con">
                                <label>Description</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>

                            <div className="onlinefund__pay">
                                <button style={{ background: "#2A3B68" }}>Submit</button>
                            </div>

                        </div>

                        {/* ticket list */}
                        <div className="ticket__list">
                            <div className="ticket__h1">
                                <h1>Lists</h1>
                            </div>

                            <div className="ticket__list__card">
                                <div className="ticket__list__card__img">
                                    <img src="https://i.pinimg.com/originals/61/3c/00/613c002cf21eb436be78e22315dcd8cf.jpg" alt="" />
                                </div>
                                <div className="ticket__list__card__text">
                                    <p>#58 - Order -  Refill - Link edin account</p>
                                    <p>Cryptmarkettrade Cmt - hut8ming
                                        @gmail.com</p>
                                    <p>2022-07-21:28:12</p>
                                </div>
                                <p className='ticket__status'>pending</p>
                            </div>

                            <div className="ticket__list__card">
                                <div className="ticket__list__card__img">
                                    <img src="https://i.pinimg.com/originals/61/3c/00/613c002cf21eb436be78e22315dcd8cf.jpg" alt="" />
                                </div>
                                <div className="ticket__list__card__text">
                                    <p>#58 - Order -  Refill - Link edin account</p>
                                    <p>Cryptmarkettrade Cmt - hut8ming
                                        @gmail.com</p>
                                    <p>2022-07-21:28:12</p>
                                </div>
                                <p className='ticket__status'>pending</p>
                            </div>

                            <div className="ticket__list__card">
                                <div className="ticket__list__card__img">
                                    <img src="https://i.pinimg.com/originals/61/3c/00/613c002cf21eb436be78e22315dcd8cf.jpg" alt="" />
                                </div>
                                <div className="ticket__list__card__text">
                                    <p>#58 - Order -  Refill - Link edin account</p>
                                    <p>Cryptmarkettrade Cmt - hut8ming
                                        @gmail.com</p>
                                    <p>2022-07-21:28:12</p>
                                </div>
                                <p className='ticket__status'>pending</p>
                            </div>
                            <div className="ticket__list__card">
                                <div className="ticket__list__card__img">
                                    <img src="https://i.pinimg.com/originals/61/3c/00/613c002cf21eb436be78e22315dcd8cf.jpg" alt="" />
                                </div>
                                <div className="ticket__list__card__text">
                                    <p>#58 - Order -  Refill - Link edin account</p>
                                    <p>Cryptmarkettrade Cmt - hut8ming
                                        @gmail.com</p>
                                    <p>2022-07-21:28:12</p>
                                </div>
                                <p className='ticket__status'>pending</p>
                            </div>

                            <div className="ticket__pagination">
                                <p className='bg-[#2A3B68]'>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p> xx </p>
                            </div>

                        </div>
                        {/* ticket list end */}

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Ticket