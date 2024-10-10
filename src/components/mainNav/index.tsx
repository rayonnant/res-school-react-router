import React from 'react'
import {Link} from 'react-router-dom'
import styles from './style.module.scss'

const MainNav: React.FC = (): React.JSX.Element => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={`${styles.nav__item} ${styles['nav__item--first']}`}><Link to="/">Home</Link></li>
                <li className={styles.nav__item}><Link to="/category/characters">Characters</Link></li>
                <li className={styles.nav__item}><Link to="/category/episodes">Episodes</Link></li>
                <li className={`${styles.nav__item} ${styles['nav__item--last']}`}><Link to="/category/locations">Locations</Link></li>
            </ul>
        </nav>
    )
}

export default MainNav
