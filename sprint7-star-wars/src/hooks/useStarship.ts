import { fetchStarship } from '../services/starships'
import { useQuery } from '@tanstack/react-query'
import { StarshipDataProps } from '../global/types'
import { DEFAULT_IMG_URL, STARSHIPS_IMG_URL } from '../global/constants'
import { useState, useEffect } from 'react'
import { checkURLExists } from '../logic/main'

export const useStarship = (starshipID: string) => {
  const { status, error, data }: { status: string, error: Error | null, data: StarshipDataProps | null | undefined } = useQuery({
    queryKey: ['starships/'+starshipID],
    queryFn: () => fetchStarship(starshipID)
  })
  const STARSHIP_IMG_URL = STARSHIPS_IMG_URL+starshipID+'.jpg'
  const [ imageUrl, setImageUrl ] = useState(DEFAULT_IMG_URL)

  useEffect(() => {
    const verifyURL = async () => {
      const imageExists = await checkURLExists(STARSHIP_IMG_URL)
      setImageUrl(imageExists ? STARSHIP_IMG_URL : DEFAULT_IMG_URL)
    }
    verifyURL()
  }, [STARSHIP_IMG_URL])

  if (data !== undefined && data !== null) {
    data.image = imageUrl
  }

  return { status, error, starshipData: data }
}