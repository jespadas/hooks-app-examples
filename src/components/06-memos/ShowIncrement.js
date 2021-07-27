import React from 'react';
import PropTypes from 'prop-types';

export const ShowIncrement = React.memo(({ increment }) => {

    /*
        React.memo is a higher order component that you can use to ensure functional
        components only re-render when the props change (much like PureComponent for 
        class components).
    */

    console.log("Component called");

    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(1);
            }}
        >
            Add
        </button>
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func
}
