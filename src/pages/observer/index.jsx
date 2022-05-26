import React from 'react'
import useFetch from './use_fetch'
import useScroll from './use_scroll'
import styles from '../../components/photo_main.module.css'
import ImageBox from '../../components/imagebox'

function Observer() {
    const { loadMoreRef, page } = useScroll()
    const { loading, list } = useFetch(page)

    return (
        <div>
            <div className={styles.div_main}>
                <div>
                    {list.map((e) => {
                        return (
                            <ImageBox key={e.title} title={e.title} url={e.thumbnailUrl} />
                        )
                    })}
                </div>
            </div>
            <div ref={loadMoreRef} />
        </div>
    )
}

export default Observer