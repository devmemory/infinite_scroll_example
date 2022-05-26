import React from 'react'
import styles from './error_page.module.css'

function ErrorBtn(props) {
    const { onClick, text } = props
    return (
        <div className={styles.div_error_btn} onClick={onClick}>
            {text}
        </div>
    )
}

export default ErrorBtn