import React, {useEffect} from 'react'
import styles from './style.module.scss'
import {useNavigate, useParams} from 'react-router-dom'
import charactersData from '../../shared/characters.json'
import episodesData from '../../shared/episodes.json'
import locationsData from '../../shared/locations.json'

interface BaseInfo {
    id: number
    name: string
    created: string
}

interface Character extends BaseInfo {
    status: string
    species: string
    type: string
    gender: string
    image: string
}

interface Episode extends BaseInfo {
    air_date: string
    episode: string
}

interface Location extends BaseInfo {
    type: string
    dimension: string
}

export const CategoryPage: React.FC = (): React.JSX.Element => {
    const {type} = useParams()
    const navigate = useNavigate()

    useEffect((): void => {
        if (type) {
            if (!['characters', 'episodes', 'locations'].includes(type)) {
                navigate('*')
            }
        }
    }, [type, navigate])


    const listArr = (data: Character[] | Episode[] | Location[]) => {
        return data.map((item: Character | Episode | Location, idx: number) => (
            <li
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
        ))
    }

    const getData = (type: string = '') => {
        switch (type) {
            case 'characters':
                return charactersData
            case 'episodes':
                return episodesData
            case 'locations':
                return locationsData
            default:
                return []
        }
    }

    return (
        <ul className={styles.container}>
            {
                type && listArr(getData(type))
            }
        </ul>
    )
}
