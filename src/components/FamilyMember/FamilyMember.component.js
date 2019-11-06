import React from 'react'

//import components
import Stat from '../Stat/Stat.component'
import Gallery from '../Gallery/Gallery.component'

//import styles
import styles from './FamilyMember.module.css'

export default ({name, description, stats, images}) => (
    <section className={styles.familyMember}>
        <div>
            <h2>{name}</h2>
            {description.map((para, index) => <p key={`${name} ${index} para`}>{para}</p>)}
            <div className={styles.stats}>
                {stats.map((stat, index) => 
                    <Stat 
                        icon={stat.icon}
                        stat={stat.stat}
                        description={stat.description}
                        key={`${name} ${index} stat`}
                    />
                )}
            </div>
        </div>
        <Gallery images={images} />
    </section>
)