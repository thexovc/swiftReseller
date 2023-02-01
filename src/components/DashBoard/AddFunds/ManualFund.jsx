import './ManualFund.css'

const ManualFund = () => {
    return (
        <div className='manualfund'>
            <div className='onlinefund__option'>
                <div className="onlinefund__payment">
                    <h1>Method</h1>
                    <select name="" id="" disabled>
                        <option value="Flutterwave">Naira Bank Transfer (Min $10 and Max $30000)  </option>
                    </select>
                </div>
                <div className="onlinefund__amount">
                    <label>Beneficiary Name</label>
                    <span>
                        <input type="text" value='Swiftreseller FLW' disabled />
                    </span>
                </div>
            </div>
            <div className='onlinefund__option'>
                <div className="onlinefund__amount">
                    <label>Bank Name</label>
                    <span>
                        <input type="text" value='Wema Bank PLC' disabled />
                    </span>
                </div>
                <div className="onlinefund__amount">
                    <label>Account Number</label>
                    <span>
                        <input type="text" value='7812066877' disabled />
                    </span>
                </div>
            </div>
            <div className="manualfund__card__con">
                <div className='manualfund__card'>
                    <p>The Conversion Charge is Applicable for Naira Bank Transfer * </p>
                    <div className='onlinefund__option'>
                        <div className="onlinefund__amount">
                            <label>Amount</label>
                            <span>
                                <label>$</label>
                                <input type="number" />
                            </span>
                        </div>
                        <div className="onlinefund__amount">
                            <label>Amount</label>
                            <span>
                                <label>NGN</label>
                                <input type="number" />
                            </span>
                        </div>
                    </div>

                    <p>After Payment, Take a Ticket with Payment Details Contact Us</p>
                    <p className='font-bold'>Min $10 and Max $30000</p>
                </div>
            </div>
        </div>
    )
}

export default ManualFund