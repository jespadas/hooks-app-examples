import React, { useLayoutEffect, useRef, useState } from 'react';

import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './style.css';

export const Layout = () => {

    // Custom Hook
    const { counter, increment } = useCounter(1);

    // Custom Hook
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // If there is data we will destructur quote
    const { quote } = !!data && data[0];

    const p = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(p.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>useLayoutEffect</h1>

            <hr />

            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={p}
                >
                    {quote}
                </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Next quote
            </button>

        </div>
    )
}
