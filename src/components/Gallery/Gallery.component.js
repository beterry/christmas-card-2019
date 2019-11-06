import React, {useState} from 'react'

// import styles
import styles from './Gallery.module.css'

const Gallery = ({images}) => {
    const [featured, setFeatured] = useState(images[0])
    const handleNewFeatured = (e) => {
        setFeatured(images[e.target.getAttribute('index')])
    }
    return (
        <div>
            <div className={styles.selectedImage}>
                <img src={featured.src} alt={featured.caption} />
                <p>{images[0].caption}</p>
            </div>
            <div className={styles.gallery}>
                {images.map((image, index) => 
                    <div
                        key={`${image.src}`}
                        style={{
                            background: `url(${image.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className={image.src === featured.src ? undefined : styles.unselected}
                        onClick={(e) => handleNewFeatured(e)}
                        index={index}
                    />
                )}
            </div>
        </div>
    )
}

export default Gallery