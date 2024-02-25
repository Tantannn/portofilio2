import "./RandomStuffs.css";
import React, { useState } from 'react';

export default function RandomStuffs() {
    const [phoneNumber, setPhoneNumber] = useState(0);

    const handlePhoneNumberChange = (e : any) => {
        setPhoneNumber(e.target.value);
    };

    const formatNumber = (num : number) => {
        let strNum = num.toString().padStart(11, '0');
        return  strNum.slice(0, 2) + '-' + strNum.slice(2);
    };

    return (
        <div className="volume-changer">
            <h4>Pealse enter Your Phone Number</h4>
            <input
                type="range"
                min="00000000000"
                max="99999999999"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
            />
            <p>Volume: {formatNumber(phoneNumber)}</p>
            <input type="checkbox" id="checkbox" onChange={() => {}}/> 
            <label>Advance Mode</label>
        </div>
    );
}
