import axios from 'axios'
import { getIDFromURL } from '../logic/main'

export const fetchFilms = async (url: string) => {
  try {
    const fetchResponse = await axios.get(url)
    const response: { id: string, title: string, episode_id: number } = {
      id: getIDFromURL(url),
      title: fetchResponse.data.title,
      episode_id: fetchResponse.data.episode_id
    }
    return response

  } catch (error) {
    console.error('Error fetching the starships films:', error)
    if (axios.isAxiosError(error)) {
      const error_message = error.message || 'An unexpected error occurred'
      const error_code = error.response?.status || 500
      throw new Error('Error '+error_code+': '+error_message)
    }
    throw new Error('Error 500: An unexpected error occurred')
  }
}