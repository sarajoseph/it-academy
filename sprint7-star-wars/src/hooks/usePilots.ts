import { useEffect, useRef, useState } from 'react'
import { fetchPilots } from '../services/pilots'
import { useQueries } from '@tanstack/react-query'
import { checkURLExists } from '../logic/main'
import { PilotsType } from '../global/types'
import { CHARACTERS_IMG_URL, DEFAULT_IMG_URL } from '../global/constants'

export const usePilots = (pilotsLinks: string[]) => {
  const queryConfigs  = pilotsLinks.map((url) => ({
    queryKey: ['people', url],
    queryFn: () => fetchPilots(url)
  }))
  const results = useQueries({ queries: queryConfigs })
  const [pilotsData, setPilotsData] = useState<PilotsType | null>(null)
  const processedRef = useRef(false)

  useEffect(() => {
    if (processedRef.current) {
      return
    }
    const fetchAndVerifyURLs = async () => {
      const pilots = await Promise.all(results.map(async (result) => {
        if (result.status === 'success') {
          const PILOT_IMG_URL = CHARACTERS_IMG_URL+result.data.id+'.jpg'
          const imageExists = await checkURLExists(PILOT_IMG_URL)
          return {
            ...result.data,
            image: imageExists ? PILOT_IMG_URL : DEFAULT_IMG_URL
          }
        }
        return null
      }))

      setPilotsData(pilots.filter(pilot => pilot !== null))
      processedRef.current = true
    }

    if (results.every(result => result.status === 'success')) {
      fetchAndVerifyURLs()
    }
  }, [results])

  return pilotsData
}