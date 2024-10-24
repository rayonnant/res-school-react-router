import React from 'react'
import {Outlet} from 'react-router-dom'
import {Header} from '../header'
import styles from './style.module.scss'

export const Layout: React.FC = (): React.JSX.Element => {
    return (
        <>
            <Header/>
            <div className={styles.layout}>
                <Outlet/>
            </div>
        </>

    )
}


