import { useLocation } from 'react-router-dom'

export const getIDFromURL = (url: string) => {
  const urlParts = url.split('/')
  return urlParts[urlParts.length - 2]
}

export const checkURLExists = async (url: string) => {
  try {
    const response = await fetch(url)
    return response.ok
  } catch (error) {
    console.log(error)
    return false
  }
}

export const getLoginWithPreviousUrl = () => {
  const location = useLocation()
  const prevUrl = location.pathname
  return '/login?prev='+prevUrl
}

export const getURLAfterLogin = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  return params.get('prev')
}