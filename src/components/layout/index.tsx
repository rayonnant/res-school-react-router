import React from 'react'
import MainNav from '../mainNav'
import styles from './style.module.scss'

const Layout = ({ children }: {children: React.ReactNode}): React.JSX.Element  => {
    return (
        <div className={styles.layout}>
            <MainNav/>
            {children}
        </div>
    )
}

export default Layout
