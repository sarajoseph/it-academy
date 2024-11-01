import axios from 'axios'
const GIPHY_API_KEY = 'p2Px6hS1nb7lH4wcdZsGwuapgahOC54b'
const GIPHY_API_URL = 'https://api.giphy.com'
export const fetchGifs = async () => {
  try {
    const topic = 'starwars'
    const limit = '25'
    const offset = '0'
    const rating = 'g'
    const lang = 'en'
    const response = await axios.get(GIPHY_API_URL+'/v1/gifs/search?api_key='+GIPHY_API_KEY+'&q='+topic+'&limit='+limit+'&offset='+offset+'&rating='+rating+'&lang='+lang)
    return response.data.data

  } catch (error) {
    console.error('Error fetching the gifs:', error)
    if (axios.isAxiosError(error)) {
      const error_message = error.message || 'An unexpected error occurred'
      const error_code = error.response?.status || 500
      throw new Error('Error '+error_code+': '+error_message)
    }
    throw new Error('Error 500: An unexpected error occurred')
  }
}