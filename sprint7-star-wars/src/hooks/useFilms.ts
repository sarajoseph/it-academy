import { useEffect, useRef, useState } from 'react'
import { FilmsType } from '../global/types'
import { fetchFilms } from '../services/films'
import { useQueries } from '@tanstack/react-query'
import { DEFAULT_IMG_URL, FILMS_IMG_URL } from '../global/constants'
import { checkURLExists } from '../logic/main'

export const useFilms = (filmsLinks: string[]) => {
  const queryConfigs  = filmsLinks.map((url) => ({
    queryKey: ['films', url],
    queryFn: () => fetchFilms(url)
  }))
  const results = useQueries({ queries: queryConfigs })
  const [filmsData, setFilmsData] = useState<FilmsType | null>(null)
  const processedRef = useRef(false)

  useEffect(() => {
    if (processedRef.current) {
      return
    }
    const fetchAndVerifyURLs = async () => {
      const films = await Promise.all(results.map(async (result) => {
        if (result.status === 'success') {
          const FILM_IMG_URL = FILMS_IMG_URL+result.data.id+'.jpg'
          const imageExists = await checkURLExists(FILM_IMG_URL)
          return {
            ...result.data,
            image: imageExists ? FILM_IMG_URL : DEFAULT_IMG_URL
          }
        }
        return null
      }))

      setFilmsData(films.filter(film => film !== null))
      processedRef.current = true
    }

    if (results.every(result => result.status === 'success')) {
      fetchAndVerifyURLs()
    }
  }, [results])

  return filmsData
}