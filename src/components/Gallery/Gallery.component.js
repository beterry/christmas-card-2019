import React from 'react'

// import styles
import styles from './Gallery.module.css'

const Gallery = ({images}) => {
    return (
        <div>
            <div className={styles.selectedImage}>
                <img src={images[0].src} alt={images[0].caption} />
                <p>{images[0].caption}</p>
            </div>
            <div className={styles.gallery}>
                {images.map((image) => 
                    <div key={`${image.src}`}>
                        <img
                            src={image.src}
                            alt={image.caption}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Gallery