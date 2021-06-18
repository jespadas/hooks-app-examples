import { useState } from 'react';

export const useCounter = (initialState) => {

    const [counter, setCounter] = useState(initialState);

    // Increment function
    const increment = () => {
        setCounter(counter + 1);
    };

    // Decrement function
    const decrement = () => {
        setCounter(counter - 1);
    };

    // Reset function
    const reset = () => {
        setCounter(initialState);
    };

    return {
        counter,
        increment,
        decrement,
        reset
    };

}