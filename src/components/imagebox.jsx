import React from 'react'
import styles from './imagebox.module.css'

function ImageBox(props) {
    const { title, url } = props
    return (
        <div className={styles.div_imgbox}>
            <img src={url} />
            <p>{title}</p>
        </div>
    )
}

export default ImageBox