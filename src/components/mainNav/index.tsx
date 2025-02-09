import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { LoginButton } from '../loginButton'
import styles from './style.module.scss'

export const MainNav: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink
            to="/category/characters"
            end
            className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : `${styles.nav__link}`)}
          >
            [characters]
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            to="/category/episodes"
            end
            className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : `${styles.nav__link}`)}
          >
            [episodes]
          </NavLink>
        </li>
        <li className={`${styles.nav__item} ${styles['nav__item--last']}`}>
          <NavLink
            to="/category/locations"
            end
            className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : `${styles.nav__link}`)}
          >
            [locations]
          </NavLink>
        </li>
        <LoginButton />
      </ul>
    </nav>
  )
}
