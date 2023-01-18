import './OnlineFund.css'

const OnlineFund = () => {
    return (
        <div className='onlinefund'>
            <div className='onlinefund__option'>
                <div className="onlinefund__payment">
                    <h1>Method</h1>
                    <select name="" id="">
                        <option value="Flutterwave">Flutterwave (NGN)</option>
                    </select>
                </div>
                <div className="onlinefund__amount">
                    <label>Amount</label>
                    <span>
                        <label>$</label>
                        <input type="number" />
                    </span>
                </div>
            </div>
            <div className="onlinefund__pay">
                <button>Pay</button>
            </div>
        </div>
    )
}

export default OnlineFund