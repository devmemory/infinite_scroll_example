import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

function Main() {
    const path = [
        { path: '/scroll', title: 'Scroll example' },
        { path: '/observer', title: 'Observer example' }
    ]

    const navigate = useNavigate()

    return (
        <div className={styles.div_main}>
            {path.map((e) => <button key={`path - ${e.path}`} onClick={() => navigate(e.path)}>
                {e.title}
            </button>)}
        </div>
    )
}

export default Main