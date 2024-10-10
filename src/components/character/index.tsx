import React from 'react'
import {NavigateFunction, useNavigate} from 'react-router-dom'
import styles from './style.module.scss'

interface ICharacter {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
    created: string
}

const Character: React.FC<ICharacter> = (props: ICharacter): React.JSX.Element => {
    const navigate: NavigateFunction = useNavigate()

    const handleNavigation = (): void => {
        navigate(`/category/characters/${props.id}`, {
            state: {
                data: 'character',
                name: props.name,
                id: props.id,
                status: props.status,
                species: props.species,
                type: props.type,
                gender: props.gender,
                image: props.image,
                created: props.created
            }
        })
    }

    return (
        <div onClick={handleNavigation}>
            <img src={props.image} alt="a character" style={{borderRadius: '50px'}}/>
        </div>
    )
}

export default Character
