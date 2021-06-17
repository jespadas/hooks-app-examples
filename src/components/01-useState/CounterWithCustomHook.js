import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    // Using Custom Hook into component state
    const { state, increment, decrement, reset } = useCounter(0);

    return (
        <>
            <h1>Counter with Hook: {state}</h1>

            <hr />

            <button onClick={increment} className="btn btn-primary">+1</button>
            <button onClick={reset} className="btn btn-warning">Reset</button>
            <button onClick={decrement} className="btn btn-danger">-1</button>
        </>
    )
}
