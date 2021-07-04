import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(0);

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    useEffect(() => {

        return () => {

        }
    }, [])

    return (
        <div>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />

        </div>
    )
}
