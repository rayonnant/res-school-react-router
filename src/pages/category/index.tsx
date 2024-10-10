import React from 'react'
import styles from './style.module.scss'
import {useParams} from 'react-router-dom'
import charactersData from '../../shared/characters.json'
import episodesData from '../../shared/episodes.json'
import locationsData from '../../shared/locations.json'
import Character from '../../components/character'
import Episode from '../../components/episode'
import Location from '../../components/location'

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

interface IEpisode {
    id: number
    name: string
    air_date: string
    episode: string
    created: string
}

interface ILocation {
    id: number
    name: string
    type: string
    dimension: string
    created: string
}

const CategoryPage: React.FC = (): React.JSX.Element => {
    const {type} = useParams()
    console.log(type)

    return (
        <div>
            <h2>
                Список элементов из данной категории.
                При нажатии на элемент, открывается детальная информация об элементе.
            </h2>
            {type === 'characters' ?
                charactersData.map((character: ICharacter, idx: number): React.ReactElement => (
                    <Character
                        key={idx}
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        type={character.type}
                        gender={character.gender}
                        image={character.image}
                        created={character.created}
                    />
                )) :
                type === 'episodes' ?
                    episodesData.map((episode: IEpisode, idx: number): React.ReactElement => (
                        <Episode
                            key={idx}
                            id={episode.id}
                            name={episode.name}
                            air_date={episode.air_date}
                            episode={episode.episode}
                            created={episode.created}
                        />
                    )) :
                    type === 'locations' ?
                        locationsData.map((location: ILocation, idx: number): React.ReactElement => (
                            <Location
                            key={idx}
                            id={idx}
                            name={location.name}
                            type={location.type}
                            dimension={location.dimension}
                            created={location.created}
                            />
                        ))
                : null}
        </div>
    )
}

export default CategoryPage
