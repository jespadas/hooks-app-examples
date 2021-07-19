import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundScreen = () => {
    return (
        <div>
            <h1> 404 - Not Found !</h1>
            <Link to="/">
                Go back home !
            </Link>
        </div>
    )
}
