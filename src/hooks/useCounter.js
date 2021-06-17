import { useState } from 'react';

export const useCounter = (initialState) => {

    const [state, setstate] = useState(initialState);

    // Increment function
    const increment = () => {
        setstate(state + 1);
    };

    // Decrement function
    const decrement = () => {
        setstate(state - 1);
    };

    // Reset function
    const reset = () => {
        setstate(initialState);
    };

    return {
        state,
        increment,
        decrement,
        reset
    };

}