import React from 'react'
import {NavigateFunction, useNavigate} from 'react-router-dom'
import styles from './style.module.scss'

interface IEpisode {
    id: number
    name: string
    air_date: string
    episode: string
    created: string
}

const Episode: React.FC<IEpisode> = (props: IEpisode): React.JSX.Element => {
    const navigate: NavigateFunction = useNavigate()

    const handleNavigation = (): void => {
        navigate(`/category/episodes/${props.id}`, {
            state: {
                data: 'episode',
                id: props.id,
                name: props.name,
                air_date: props.air_date,
                episode: props.episode,
                created: props.created
            }
        })
    }

    return (
        <div onClick={handleNavigation}>
            <h3>{props.episode}</h3>
        </div>
    )
}

export default Episode
