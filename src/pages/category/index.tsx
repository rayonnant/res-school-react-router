import React, {useEffect, useState, useRef, useCallback} from 'react'
import styles from './style.module.scss'
import {useNavigate, useParams} from 'react-router-dom'
import {useGetInfo} from '../../hooks/useGetInfo'
import {Character, Episode, Location} from '../../interfaces'
import ErrorBoundary from '../../components/errorBoundary'

const CategoryPage: React.FC = (): React.JSX.Element => {
    const {type} = useParams()
    const navigate = useNavigate()

    const [opacity, setOpacity] = useState<number>(0)
    const [query, setQuery] = useState<string>('')
    const [pageNumber, setPageNumber] = useState<number>(0)
    const {
        isLoading,
        entities,
        error,
        hasMore
    } = useGetInfo(query, pageNumber)

    useEffect((): () => void => {
        const timeoutId = setTimeout((): void => {
            setOpacity(1)
        }, 100)

        return (): void => clearTimeout(timeoutId)
    }, [])

    useEffect((): void => {
        setPageNumber(0)
    }, [type])

    useEffect((): void => {
        if (type) {
            if (!['characters', 'episodes', 'locations'].includes(type)) {
                navigate('*')
                setQuery('')
            } else {
                setQuery(type.slice(0, type.length - 1))
            }
        }
    }, [type, navigate])

    const observer = useRef<IntersectionObserver | null>(null)

    const lastNodeRef = useCallback((node: Element | null): void => {
        if (isLoading) {
            return
        }
        if (observer.current) {
            observer.current.disconnect()
        }

        observer.current = new IntersectionObserver((entries): void => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber((prevState: number): number => prevState + 1)
            }
        })

        if (node) {
            observer.current.observe(node)
        }

    }, [isLoading, hasMore])


    return (
        <ErrorBoundary>
            <ul className={styles.container} style={{opacity: `${opacity}`}}>
                {
                    entities.length > 0 && entities.map((item: Character | Location | Episode, idx: number): React.JSX.Element => {
                        if (entities.length - 6 === idx + 1) {
                            return <li
                                ref={lastNodeRef}
                                className={styles.item}
                                key={idx}
                                onClick={(): void => {
                                    if (type != null && ['characters', 'episodes', 'locations'].includes(type)) {
                                        navigate(`/category/${type}/${idx + 1}`)
                                    }
                                }
                                }
                            >
                                <span className={styles.item__number}>{idx + 1}</span>
                                <span className={styles.item__text}>{item.name}</span>
                            </li>
                        } else {
                            return <li
                                className={styles.item}
                                key={idx}
                                onClick={(): void => {
                                    if (type != null && ['characters', 'episodes', 'locations'].includes(type)) {
                                        navigate(`/category/${type}/${idx + 1}`)
                                    }
                                }
                                }
                            >
                                <span className={styles.item__number}>{idx + 1}</span>
                                <span className={styles.item__text}>{item.name}</span>
                            </li>
                        }

                    })
                }
                {isLoading && !error && <li className={styles.item}>Loading...</li>}
                {/*{error && <li className={styles.item}>Error</li>}*/}

            </ul>
        </ErrorBoundary>
    )
}

export default CategoryPage
