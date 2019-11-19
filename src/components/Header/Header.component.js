import React from 'react'

//import styles
import styles from './Header.module.css'

export default () => (
    <div className={styles.header}>
        <div className={styles.content}>
            <h1>Merry Christmas</h1>
            <h3>FROM</h3>
            <h2>THE TERRYS</h2>
            <div className={styles.thanks}>
                <p>Thanks for visiting our Christmas Website!</p>
                <p>Scroll to see some of our highlights from 2019.</p>
            </div>
        </div>
        
    </div>
)
