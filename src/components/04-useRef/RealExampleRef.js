import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

export const RealExampleRef = () => {

    /*
        useRef(initialValue) is a built-in React hook that accepts one
        argument as the initial value and returns a reference (aka ref). 
        A reference is an object having a special property current.
    */

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Example Ref</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-3"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>


        </div>
    )
}

