import axios from 'axios'
import { StarshipDataProps } from '../global/types'
const API_URL = 'https://swapi.dev/api/'
const API_URL_STARSHIPS = API_URL+'starships/'

export const fetchStarships = async ({pageParam = API_URL_STARSHIPS}: {pageParam?: string}) => {
  try {
    const fetchResponse = await axios.get(pageParam)
    const response: {
      starships: StarshipDataProps[] | null,
      nextUrl: string | null
    } = {
      starships: fetchResponse.data.results,
      nextUrl: fetchResponse.data.next
    }
    return response

  } catch (error) {
    console.error('Error fetching the starships: '+error)

    if (axios.isAxiosError(error)) {
      const error_message = error.message || 'An unexpected error occurred'
      const error_code = error.response?.status || 500
      throw new Error('Error '+error_code+': '+error_message)
    }
    throw new Error('Error 500: An unexpected error occurred')
  }
}

export const fetchStarship = async (id: string | undefined) => {
  try {
    const response = await axios.get(API_URL_STARSHIPS+id)
    const starshipData: StarshipDataProps = {
      id,
      ...response.data
    }
    return starshipData

  } catch (error) {
    console.error('Error fetching the starship: '+error)

    if (axios.isAxiosError(error)) {
      const error_message = error.code === 'ERR_BAD_REQUEST'
        ? 'The starship was not found, try again'
        : error.message
      const error_code = error.response?.status || 500
      throw new Error('Error '+error_code+': '+error_message)
    }

    throw new Error('Error 500: An unexpected error occurred')
  }
}