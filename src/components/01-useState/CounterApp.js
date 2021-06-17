import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    // Creating state
    const [state, setState] = useState({
        counter1: 0,
        counter2: 10,
        counter3: 20,
        counter4: 30
    });

    // Destructuring state
    const { counter1, counter2 } = state;

    return (
        <>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => setState({
                    ...state,
                    counter1: counter1 + 1
                })}
            >
                +1
            </button>
        </>
    )
}
