import {useState, useRef, useEffect} from 'react'


export function useFetchData(url, options) {
    const [isLoad, setLoad] = useState(true)
    const [result, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const cache = useRef({})

    useEffect(() => {
        if (!url) return

        async function fetchData() {
            if (cache.current[url]) {
                const data = cache.current[url]
                setResponse(data)
            } else {
                try {
                    const response = await fetch(url, options)
                    const json = await response.json()
                    cache.current[url] = json
                    setResponse(json)
                } catch (error) {
                    setError(error)
                }
            }

            setLoad(false)
        }

        fetchData()
    }, [url])
    return { isLoad, result, error }
}