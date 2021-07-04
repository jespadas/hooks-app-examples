import React from 'react';
import PropTypes from 'prop-types';

export const ShowIncrement = React.memo(({ increment }) => {

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
