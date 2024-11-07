import React, { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Planet from '../../assets/planet.png'
import They from '../../assets/they.png'
import styles from './style.module.scss'

const HomePage: React.FC = (): React.JSX.Element => {
    const [opacity, setOpacity] = useState<number>(0)

    useEffect((): () => void => {
        const timeoutId = setTimeout((): void => {
            setOpacity(1)
        }, 100)

        return (): void => clearTimeout(timeoutId)
    }, [])

    return (
            <div className={styles.container} style={{opacity: `${opacity}`}}>
                <img src={Planet} alt="decoration"
                     className={`${styles.img} ${styles['img--planet']}`}
                />
                <img src={They} alt="decoration"
                     className={`${styles.img} ${styles['img--they']}`}
                />

                <Link to="/category/characters" className={styles.title}>
                    <span className={styles.title__main}>welcome</span>
                    <span className={styles.title__sub}>wubba lubba dub dub!</span>
                </Link>
            </div>
    )
}

export default HomePage
