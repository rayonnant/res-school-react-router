import React, { FC } from 'react'
import styles from './style.module.scss'

const NotFoundPage: FC = () => {
  return (
    <div className={styles['not-found-page']}>
      <h2 className={styles['not-found-page__title']}>Page is not found!</h2>
    </div>
  )
}

export default NotFoundPage
