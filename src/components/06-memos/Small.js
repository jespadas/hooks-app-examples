import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log('First call');
    return (
        <small>
            {value}
        </small>
    )
})
