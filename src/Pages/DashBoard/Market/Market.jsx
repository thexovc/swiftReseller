import MarketAccount from '../../../components/DashBoard/Market/MarketAccount'
import PurchaseMarket from '../../../components/DashBoard/Market/PurchaseMarket'
import Sidebar from '../../../components/DashBoard/Sidebar/Sidebar'
import Footer from '../../../components/Footer/Footer'
import './Market.css'

const Market = () => (
    <div className='app__main'>
        <div className='sidebar__main__con'>
            <Sidebar />
        </div>
        <div className='app__routes'>
            <div className='market'>
                {/* <MarketAccount /> */}
                <PurchaseMarket />
            </div>
            <Footer />
        </div>
    </div>
)

export default Market