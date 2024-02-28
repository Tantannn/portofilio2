import "./RandomStuffs.css";
import React, { useState } from 'react';

export default function RandomStuffs() {
    const [phoneNumber, setPhoneNumber] = useState<number>(0);
    const [advanceMode, setAdvanceMode] = useState(false);

    const handlePhoneNumberChange = (e : any) => {
        setPhoneNumber(e.target.value);
    };

    const formatNumber = (num : number) => {
        let strNum = num.toString().padStart(11, '0');
        return  strNum.slice(0, 2) + '-' + strNum.slice(2);
    };

    const confirmPhoneNumber = () => {
        const text = 'Are your sure this is your number?'
        if (window.confirm(text) === true) {
            alert('Your number is ' + formatNumber(phoneNumber));
        }
    }

        // <div className=`phone-number-changer ${phoneNumber && 'phone-number-changer-advance}`>
    return (
        <>
            <div >
                <h4>Pealse enter Your Phone Number</h4>
                <input
                    className={`phone-number-changer ${advanceMode && 'phone-number-changer-advance'}`}
                    type="range"
                    min="00000000000"
                    max="99999999999"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
                <p>Your phone number: {formatNumber(phoneNumber)}</p>
                <input type="checkbox" id="checkbox" onChange={() => setAdvanceMode(!advanceMode)}/> 
                <label>Advance Mode</label>
                <input type="checkbox" id="checkbox" onChange={() => setAdvanceMode(!advanceMode)}/> 
                <label>Enhance</label>
            </div>
            <button className="" onClick={() => confirmPhoneNumber()}>Submit</button>
        </>
    );
}
