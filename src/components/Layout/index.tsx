import React, { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../index'
import styles from './style.module.scss'

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <Suspense fallback={<h1 className={styles.fallback}>...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}
