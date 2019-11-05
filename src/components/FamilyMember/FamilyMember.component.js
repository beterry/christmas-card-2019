import React from 'react'

//import components
import Stat from '../Stat/Stat.component'
import Gallery from '../Gallery/Gallery.component'

export default ({name, description, stats, images}) => (
    <section>
        <div>
            <h2>{name}</h2>
            {description.map((para, index) => <p key={`${name} ${index} para`}>{para}</p>)}
            <div>
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