import {useState, useRef, useEffect} from 'react'


export function useFetch(url, options) {
    const [isLoading, setLoading] = useState(true)
    const [response, setResponse] = useState(null)
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

            setLoading(false)
        }

        fetchData()
    }, [url])
    return { isLoading, response, error }
}