import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // stop error for calling mounted and unmounted component
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    });
                }

            })
            .catch(e => {
                setState({
                    data: null,
                    loading: false,
                    error: "Data cannot be fetched"
                });
            });

    }, [url])

    return state;

}
