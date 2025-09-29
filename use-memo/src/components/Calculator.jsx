// src/components/Calculator.jsx
import React, { useState, useMemo } from 'react';

const expensiveCalculation = (num) => {
    console.log("Performing expensive calculation");
    // Simulate a slow operation
    for (let i = 0; i < 1000000000; i++) { } 
    console.log("Calculation done");
    return num * 2;
};

const Calculator = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10);

    // Calculation only runs when `number` changes
    const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

    return (
        <div>
            <p>Unrelated Counter: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment Counter</button>
            <p>Result of expensive calculation: {calculatedValue}</p>
            <button onClick={() => setNumber(n => n + 1)}>Increment Number for Calc</button>
        </div>
    );
};

export default Calculator;
