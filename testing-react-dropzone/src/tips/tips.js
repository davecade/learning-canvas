import React, { useEffect, useState } from "react";

export default function TipCalculator() {
    // Write your code here.
    const [bill, setBill] = useState(50);
    const [tipPercentage, setTipPercentage] = useState(18);
    const [numOfPeople, setNumOfPeople] = useState(1);
    const [totalTip, setTotalTip] = useState(0);
    const [tipPerPerson, setTipPerPerson] = useState(0);

    useEffect(() => {
        updateTotalTip();
        updateTipPerPerson();
    }, [numOfPeople, tipPercentage]);

    const updateBill = (event) => {
        setBill(event.target.value);
    };

    const updateTipPercentage = (event) => {
        setTipPercentage(event.target.value);
    };

    const updateNumOfPeople = (event) => {
        setNumOfPeople(event.target.value);
    };

    const updateTotalTip = () => {
        const result = bill * (tipPercentage / 100);
        setTotalTip(result ? `$${result.toFixed(2)}` : "-");
    };

    const updateTipPerPerson = () => {
        const result = (bill * (tipPercentage / 100)) / numOfPeople;
        setTipPerPerson(
            result && result !== Infinity ? `$${result.toFixed(2)}` : "-"
        );
    };

    return (
        <>
            <label>Bill</label>
            <input type="number" value={bill} onChange={updateBill} />

            <label>Tip Percentage</label>
            <input
                type="number"
                value={tipPercentage}
                onChange={updateTipPercentage}
            />

            <label>Number of People</label>
            <input
                type="number"
                value={numOfPeople}
                onChange={updateNumOfPeople}
            />

            <p>Total Tip: {totalTip}</p>
            <p>Tip Per Person: {tipPerPerson}</p>
        </>
    );
}
