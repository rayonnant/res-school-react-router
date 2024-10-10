import React from 'react'
import {NavigateFunction, useNavigate} from 'react-router-dom'
import styles from './style.module.scss'

interface ILocation {
    id: number
    name: string
    type: string
    dimension: string
    created: string
}

const Location: React.FC<ILocation> = (props: ILocation): React.JSX.Element => {
    const navigate: NavigateFunction = useNavigate()

    const handleNavigation = (): void => {
        navigate(`/category/locations/${props.id}`, {
            state: {
                data: 'location',
                id: props.id,
                name: props.name,
                type: props.type,
                dimension: props.dimension,
                created: props.created
            }
        })
    }

    return (
        <div onClick={handleNavigation}>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Location
