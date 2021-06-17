import React, { useEffect, useState } from 'react'

export const Message = () => {

    // Create state
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    // Destructuring coordinates (state)
    const { x, y } = coords;

    useEffect(() => {

        // Funcion callback
        const mouseMove = (e) => {

            // Assign the coordinates obtained from the evenListener
            const coords = { x: e.x, y: e.y };

            // Change the state to the event data
            setCoords(coords);

            // Print coordinates
            console.log(coords);

        }

        console.log('Componente montado');

        window.addEventListener('mousemove', mouseMove);

        return () => {

            window.removeEventListener('mousemove', mouseMove);

            console.log('Componente desmontado');

        };

    }, []);

    return (
        <div>
            <h3>Test message</h3>

            <p>x: {x} , y: {y}</p>
        </div>
    )
}
