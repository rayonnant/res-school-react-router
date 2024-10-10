import React from 'react'
import {useLocation} from 'react-router-dom'
import styles from './style.module.scss'


interface IBaseInfo {
    data: 'character' | 'location' | 'episode'
    id: number
    name: string
    created: string
}

interface ICharacter extends IBaseInfo {
    status: string
    species: string
    type: string
    gender: string
    image: string
}

interface IEpisode extends IBaseInfo {
    air_date: string
    episode: string
}

interface ILocation extends IBaseInfo {
    type: string
    dimension: string
}

type PropsType = ICharacter | IEpisode | ILocation

const ElementPage: React.FC = (): React.JSX.Element => {
    const location = useLocation();
    const {
        data,
        name,
        id,
        status,
        species,
        type,
        gender,
        image,
        created,
        episode,
        air_date,
        dimension
    } = location.state || {}

    if (data === 'character') {
        return (
            <div>
                <h2>{name}</h2>
                <span>{id}</span>
                <span>{created}</span>
                <span>{status}</span>
                <span>{species}</span>
                <span>{type}</span>
                <span>{gender}</span>
                <img src={image} alt="a character" style={{borderRadius: '50px'}}/>
            </div>
        )
    }

    else if (data === 'episode') {
        return (
            <div>
                <h2>{name}</h2>
                <span>{id}</span>
                <span>{created}</span>
                <span>{episode}</span>
                <span>{air_date}</span>
            </div>
        )
    }

    else if (data === 'location') {
        return (
            <div>
                <h2>{name}</h2>
                <span>{id}</span>
                <span>{created}</span>
                <span>{type}</span>
                <span>{dimension}</span>
            </div>
        )
    }
        // else if (data === 'location') {
        //     let location: ILocation
        //     return (
        //         <div>
        //             <h2>{location.name}</h2>
        //             <span>{location.id}</span>
        //             <span>{location.created}</span>
        //             <span>{location.type}</span>
        //             <span>{location.dimension}</span>
        //         </div>
        //     )
        // } else if (data === 'episode') {
        //     const episode: IEpisode = props as IEpisode
        //     return (
        //         <div>
        //             <h2>{episode.name}</h2>
        //             <span>{episode.id}</span>
        //             <span>{episode.created}</span>
        //             <span>{episode.air_date}</span>
        //             <span>{episode.episode}</span>
        //         </div>
        //     )
    // }
    else {
        return <>Not found</>
    }

}

export default ElementPage
