import React, { useEffect, useState } from 'react';
import './effects.css';

import { Message } from './Message';

export const SimpleForm = () => {

    const [formSate, setFormSate] = useState({
        name: "",
        email: ""
    });

    const { name, email } = formSate;

    // Always active
    useEffect(() => {
        //console.log('useEffect test');
    }, []);

    // Active only when formState change
    useEffect(() => {
        //console.log('formState cambio');
    }, [formSate]);

    //Active only when email change
    useEffect(() => {
        //console.log('email cambio');
    }, [email]);

    const handleInputChange = ({ target }) => {

        setFormSate({
            ...formSate,
            [target.name]: target.value
        });
    };

    return (
        <>
            <h1>useEffect</h1>

            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@company.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === "Julio") && <Message />}
        </>
    )
}
