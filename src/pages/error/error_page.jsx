import React from 'react'
import styles from './error_page.module.css'

function ErrorPage(props) {
    return (
        <div className={styles.div_error}>
            <p>
                {props.message}
            </p>
            {props.children}
        </div>
    )
}

export default ErrorPage