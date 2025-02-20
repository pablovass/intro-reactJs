import React, { useState } from "react";

interface CounterProps {
    onIncrement?: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({ onIncrement }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        if (onIncrement) onIncrement(newCount);
    };

    return (
        <div>
            <h1 data-testid="counter-value">{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;
