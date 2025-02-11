import { useEffect, useState } from 'react'
import axios, { Canceler } from 'axios'
import { Character, Location, Episode } from '../../interfaces'

export const useGetInfo = (query: string = 'character', pageNumber: number = 0) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [entities, setEntities] = useState<(Character | Location | Episode)[]>([])
  const [hasMore, setHasMore] = useState<boolean>(false)

  useEffect((): void => {
    setEntities([])
  }, [query])

  useEffect((): (() => void) => {
    setIsLoading(true)
    setError(false)
    let cancel: Canceler | null = null
    axios({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/${query}`,
      params: {
        page: pageNumber,
      },
      cancelToken: new axios.CancelToken((c: Canceler): void => {
        cancel = c
      }),
    })
      .then((res): void => {
        setEntities((prevState: (Character | Location | Episode)[]): (Character | Location | Episode)[] => {
          const mergedEntities: (Character | Location | Episode)[] = [...prevState]
          res.data.results.forEach((newEntity: Character | Location | Episode): void => {
            const existingIndex: number = mergedEntities.findIndex((entity: Character | Location | Episode): boolean => entity.id === newEntity.id)
            if (existingIndex === -1) {
              mergedEntities.push(newEntity)
            }
          })
          return mergedEntities
        })
        setHasMore(res.data.results.length > 0)
        setIsLoading(false)
      })
      .catch((err): void => {
        if (axios.isCancel(err)) {
          return
        }
        setError(true)
        // console.error(err)
      })

    return (): void => {
      if (cancel !== null) {
        cancel()
      }
    }
  }, [query, pageNumber])

  return {
    isLoading,
    entities,
    error,
    hasMore,
  }
}
