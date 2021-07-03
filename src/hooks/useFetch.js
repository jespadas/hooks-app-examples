import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setstate] = useState({
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

        setstate({
            data: null,
            loading: true,
            error: null
        })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // stop error for calling mounted and unmounted component
                setTimeout(() => {

                    if (isMounted.current) {
                        setstate({
                            loading: false,
                            error: null,
                            data: data
                        })
                    }

                }, 4000);

            })
            .catch(e => console.log(e));

    }, [url])

    return state;

}
