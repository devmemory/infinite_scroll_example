import React, { useEffect, useRef, useState } from 'react'
import ImageBox from '../../components/imagebox'
import styles from '../../components/photo_main.module.css'
import getPhoto from '../../service/photo'

function Scroll() {
    const [data, _setData] = useState({ list: [] })

    // eventListener에서 state접근 가능하도록
    const stateRef = useRef(data)

    // stateRef에 state 셋팅
    const setData = (state) => {
        stateRef.current = state
        _setData(state)
    }

    useEffect(() => {
        async function initData() {
            const res = await getPhoto(1)

            setData({ list: [...res.data] })

            stateRef.current.page = {
                pageNum: 1,
                pageSize: 10,
                pageMaxNum: 5,
                isLoading: false
            }

            document.addEventListener('scroll', handleScroll)
        }

        initData()

        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = async () => {
        const current = document.documentElement.scrollTop
        const max = document.documentElement.scrollHeight - document.documentElement.clientHeight

        let pageModel = stateRef.current.page

        if (current + 40 > max && !pageModel.isLoading && pageModel.pageNum < pageModel.pageMaxNum) {
            console.log('[called]', { pageModel })
            pageModel.isLoading = true
            pageModel.pageNum += 1

            const res = await getPhoto(pageModel.pageNum)

            if (res.data) {
                setData({ list: [...stateRef.current.list, ...res.data] })

                setTimeout(() => {
                    pageModel.isLoading = false
                }, 500);
            } else {
                pageModel.isLoading = false
                pageModel.pageNum -= 1
            }

            stateRef.current.page = pageModel
        }
    }

    return (
        <div className={styles.div_main}>
            {data.list.length === 0 ? <>Loading...</> : (<div>
                {data.list.map((e) => {
                    return (
                        <ImageBox key={e.title} title={e.title} url={e.thumbnailUrl} />
                    )
                })}
            </div>)}
        </div>
    )
}

export default Scroll