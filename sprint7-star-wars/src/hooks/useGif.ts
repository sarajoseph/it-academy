/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import { fetchGifs } from '../services/gifs'
import { useEffect, useState } from 'react'
import { GifProps } from '../global/types'

export const useGif = () => {
  const { isSuccess, isError, error, data } = useQuery({
    queryKey: ['starwars/'],
    queryFn: () => fetchGifs()
  })
  if (isError) {
    console.log(error)
  }
  const [ gif, setGif ] = useState<GifProps | null>(null)

  useEffect(() => {
    if (isSuccess) {
      setGif(getRandomGif())
    }
  }, [isSuccess, data])

  const getRandomGif = () => {
    if (isSuccess) {
      const gifs = data.map((g: any) => {
        return {
          id: g.id,
          alt_text: g.alt_text || g.title || 'Star Wars GIF'
        }
      })
      const randomPosition = Math.floor(Math.random() * gifs.length)
      const randomGif = gifs[randomPosition]
      return randomGif
    }
    return null
  }

  const setRandomGif = () => {
    const randomGif = getRandomGif()
    setGif(randomGif)
  }

  return { gifIsSuccess: isSuccess, setRandomGif, gif }

}