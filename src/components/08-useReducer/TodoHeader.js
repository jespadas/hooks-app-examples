import React from 'react'

export const TodoHeader = ({ todos }) => {
    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
        </>
    )
}
