import { useState, useRef, useCallback, useEffect } from 'react'

export default () => {
    const [page, setPage] = useState(1)
    const loadMoreRef = useRef(null)

    const handleObserver = useCallback((entries) => {
        const [target] = entries

        if (target.isIntersecting && loadMoreRef.current) {
            setPage((page) => {
                return page < 5 ? page + 1 : page
            })
        }
    }, [])

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '80px',
            threshold: 1.0
        }

        const observer = new IntersectionObserver(handleObserver, option)

        if (loadMoreRef.current) observer.observe(loadMoreRef.current)

        return () => {
            observer.disconnect()
        }
    }, [handleObserver])

    console.log({page})

    return { loadMoreRef, page }
}