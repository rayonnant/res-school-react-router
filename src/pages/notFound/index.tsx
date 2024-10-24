import React from 'react'
import styles from './style.module.scss'

export const NotFoundPage: React.FC = (): React.JSX.Element => {
    return (
        <div className={styles['not-found-page']}>
            <h2 className={styles['not-found-page__title']}>Page is not found!</h2>
        </div>
    )
}
