import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(1000);

    const [show, setShow] = useState(true);

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            <p>{memoHeavyProcess}</p>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => { setShow(!show) }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
