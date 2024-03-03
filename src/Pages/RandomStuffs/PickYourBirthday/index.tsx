
import "./PickYourBirthday.css";
import React, { useState } from "react";

export default function PickYourBirthday() {
    const generateRandomDate = () => {
        const startTimestamp = new Date('1900-01-01').getTime();
        const endTimestamp = new Date().getTime();
        const randomTimestamp = Math.floor(Math.random() * (endTimestamp - startTimestamp) + startTimestamp);
        return new Date(randomTimestamp);
    };

    const [targetDate, setTargetDate] = useState(generateRandomDate());
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState(0);

    const handleGuess = (isEarlier : any) => {
        const currentDate = new Date();
        const isCorrect = (isEarlier && targetDate < currentDate) || (!isEarlier && targetDate > currentDate);

        if (isCorrect) {
            alert(`Congratulations! You guessed the correct birthday: ${targetDate.toDateString()}`);
        } else {
            setAttempts(attempts + 1);
            setTargetDate(generateRandomDate());
            setGuess('');
        }
    };

    return (
        <div>
            <h1>Guess the Birthday</h1>
            <p>Is the target birthday earlier or later than today?</p>
            <p>Attempts: {attempts}</p>
            <p>Target Date: {targetDate.toDateString()}</p>
            <button onClick={() => handleGuess(true)}>Earlier</button>
            <button onClick={() => handleGuess(false)}>Later</button>
        </div>
    );
};
