import axios from 'axios'
import { getIDFromURL } from '../logic/main'

export const fetchPilots = async (url: string) => {
  try {
    const fetchResponse = await axios.get(url)
    const response: { id: string, name: string } = {
      id: getIDFromURL(url),
      name: fetchResponse.data.name
    }
    return response

  } catch (error) {
    console.error('Error fetching the starships pilots:', error)
    if (axios.isAxiosError(error)) {
      const error_message = error.message || 'An unexpected error occurred'
      const error_code = error.response?.status || 500
      throw new Error('Error '+error_code+': '+error_message)
    }
    throw new Error('Error 500: An unexpected error occurred')
  }
}