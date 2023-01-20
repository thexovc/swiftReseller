import './MarketAccount.css'
import { GrInstagram } from 'react-icons/gr'
import insta from '../../../assets/DashBoard/insta.jpg'

const MarketAccount = () => {
    return (
        <div className='marketaccount'>
            <div className="marketaccount__icon">
                <GrInstagram />
                <h1>Instagram</h1>
            </div>
            <div className='marketaccount__category'>
                <h1>Aged</h1>

                <div className="marketaccount__card__con cursor-pointer">
                    <div className="marketaccount__card__img">
                        <img src={insta} alt="" />
                    </div>
                    <div className="marketaccount__card__text">
                        <p>IG Accounts | Registered in 03.2020. Email included (original).An avatar and 5 posts are added. Resgistered from the RU IP.</p>
                        <p>In Stock: 3</p>
                        <p> Price: $6.21</p>

                    </div>
                    <div className="marketaccount__card__order">
                        <p>Quantity</p>
                        <input type="number" value="1" />
                        <button>Checkout</button>
                    </div>
                </div>

                <div className="marketaccount__card__con cursor-pointer">
                    <div className="marketaccount__card__img">
                        <img src={insta} alt="" />
                    </div>
                    <div className="marketaccount__card__text">
                        <p>IG Accounts | Registered in 03.2020. Email included (original).An avatar and 5 posts are added. Resgistered from the RU IP.</p>
                        <p>In Stock: 3</p>
                        <p> Price: $6.21</p>

                    </div>
                    <div className="marketaccount__card__order">
                        <p>Quantity</p>
                        <input type="number" value="1" />
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketAccount