import React, {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {Header} from '../header'
import styles from './style.module.scss'

export const Layout: React.FC = (): React.JSX.Element => {
    return (
        <>
            <Header/>
            <div className={styles.layout}>
                <Suspense fallback={<h1 className={styles.fallback}>...</h1>}>
                    <Outlet/>
                </Suspense>
            </div>
        </>

    )
}


