import React from 'react'

// import styles
import styles from './Stat.module.css'

export default ({icon, stat, description}) => (
    <div>
        <img src={icon} alt={''} />
        <h3>{stat}</h3>
        <p>{description}</p>
    </div>
)