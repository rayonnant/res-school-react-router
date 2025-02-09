import React, { FC, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ErrorBoundary from '../../components/errorBoundary'
import { Card } from '../../components/card'
import { Character, Episode, Location } from '../../interfaces'

const ElementPage: FC = () => {
  const { type, id } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect((): void => {
    if (type) {
      if (!['characters', 'episodes', 'locations'].includes(type)) {
        navigate('*')
      }
    }
  }, [type, navigate])

  const [entities, setEntities] = useState<Character | Location | Episode | undefined>()

  useEffect((): void => {
    setIsLoading(true)
    if (type && id) {
      axios({
        method: 'GET',
        url: `https://rickandmortyapi.com/api/${type.slice(0, type.length - 1)}/${id}`,
      })
        .then((res): void => {
          setError(false)
          setIsLoading(false)
          setEntities(res.data)
        })
        .catch((): void => {
          setIsLoading(false)
          setError(true)
        })
    }
  }, [])

  if (type && id && !error) {
    if (['characters', 'episodes', 'locations'].includes(type) && typeof +id === 'number' && !isNaN(+id) && Number.isFinite(+id)) {
      return (
        <ErrorBoundary>
          <Card data={entities} id={+id} isLoading={isLoading} />
        </ErrorBoundary>
      )
    }
  }

  return <Navigate to="*" />
}

export default ElementPage
