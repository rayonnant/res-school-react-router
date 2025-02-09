import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { MainNav } from '../mainNav'
import styles from './style.module.scss'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={`${styles.header__link} ${styles['header__link']}`}>
        <span className={styles.header__logo}>RICK</span>
        <span className={`${styles.header__logo} ${styles['header__logo--second']}`}>AND</span>
        <span className={styles.header__logo}>MORTY</span>
      </Link>
      <MainNav />
    </header>
  )
}
