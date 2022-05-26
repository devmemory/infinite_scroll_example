import { useState, useEffect, useCallback } from "react"
import getPhoto from "../../service/photo"

export default (page) => {
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])

    const callback = useCallback(async () => {
        setLoading(true)

        const res = await getPhoto(page)
        
        setList([...list, ...res.data])
    }, [page])

    useEffect(() => {
        callback()
    }, [callback])

    return { loading, list }
}