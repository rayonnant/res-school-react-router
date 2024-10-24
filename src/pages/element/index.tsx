import React, {useEffect} from 'react'
import {Navigate, useNavigate, useParams} from 'react-router-dom'
import charactersData from '../../shared/characters.json'
import episodesData from '../../shared/episodes.json'
import locationsData from '../../shared/locations.json'
import {Card} from '../../components/card'

export const ElementPage: React.FC = (): React.JSX.Element => {

    const {type, id} = useParams()
    const navigate = useNavigate()

    useEffect((): void => {
        if (type) {
            if (!['characters', 'episodes', 'locations'].includes(type)) {
                navigate('*')
            }
        }
    }, [type, navigate])

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

    if (type && id) {
        if (
            ['characters', 'episodes', 'locations'].includes(type)
            &&
            (typeof +id === 'number' && !isNaN(+id) && Number.isFinite(+id))
        ) {
            return (
                <Card
                    data={getData(type)}
                    id={+id}
                />
            )
        }
    }

    return <Navigate to="*"/>
}
