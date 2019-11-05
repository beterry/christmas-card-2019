import React from 'react'

// import styles
import styles from './Gallery.module.css'

const Gallery = ({images}) => {
    return (
        <div>
            <div>
                <img src={images[0].src} alt={images[0].caption} />
                <p>{images[0].caption}</p>
            </div>
            <div>
                {images.map((image) => 
                    <img
                        src={image.src}
                        alt={image.caption}
                        key={`${image.src}`}
                    />
                )}
            </div>
        </div>
    )
}

export default Gallery