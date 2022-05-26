import ErrorPage from './error_page'
import ErrorBtn from './error_btn'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate()
    return (
        <ErrorPage message='해당 페이지를 찾을 수 없습니다.'>
            <ErrorBtn onClick={() => navigate('/')} text='홈으로 이동' />
        </ErrorPage>
    )
}

export default PageNotFound