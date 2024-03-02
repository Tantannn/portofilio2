import "./RandomStuffs.css";
import React, { useState } from "react";

export default function RandomStuffs() {
    const [phoneNumber, setPhoneNumber] = useState<number>(0);
    const [enhance, setEnhance] = useState(false);
    const [advanceMode, setAdvanceMode] = useState(false);

    const rotation = (phoneNumber * 180) / 100000000000;

    const handlePhoneNumberChange = (e: any) => {
        setPhoneNumber(e.target.value);
    };

    const formatNumber = (num: number) => {
        let strNum = num.toString().padStart(11, "0");
        return strNum.slice(0, 2) + "-" + strNum.slice(2);
    };

    const confirmPhoneNumber = () => {
        const text = "Are your sure this is your number?";
        if (window.confirm(text) === true) {
            alert("Your number is " + formatNumber(phoneNumber));
        }
    };

    return (
        <>
            <div>
                <h4>Pealse enter Your Phone Number</h4>
                <input
                    className={`phone-number-changer ${
                        advanceMode && "phone-number-changer-advance"
                    }`}
                    style={{
                        transform: enhance ? `rotate(${rotation}deg)` : "",
                    }}
                    type="range"
                    min="00000000000"
                    max="99999999999"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
                <p>Your phone number: {formatNumber(phoneNumber)}</p>
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={() => setAdvanceMode(!advanceMode)}
                />
                <label>Advance Mode</label>
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={() => setEnhance(!enhance)}
                />
                <label>Enhance</label>
            </div>
            <button className="" onClick={() => confirmPhoneNumber()}>
                Submit
            </button>
        </>
    );
}
