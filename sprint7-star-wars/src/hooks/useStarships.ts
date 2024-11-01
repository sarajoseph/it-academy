/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInfiniteQuery } from '@tanstack/react-query'
import { StarshipBasicProps, StarshipDataProps } from '../global/types'
import { fetchStarships } from '../services/starships'
import { useEffect } from 'react'
import { getIDFromURL } from '../logic/main'
import { setStarships } from '../store/starships/slice'
import { useAppDispatch } from './store'

export const useStarships = () => {
  const dispatch = useAppDispatch()
  const {
    isPending,
    isSuccess,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery({
    queryKey: ['starships'],
    queryFn: fetchStarships,
    getNextPageParam: (lastPage) => lastPage.nextUrl,
    refetchOnWindowFocus: false,
    initialPageParam: undefined
  })

  const starshipsData: (StarshipDataProps | null)[] | [] = data?.pages?.flatMap(page => page?.starships) ?? []

  useEffect(() => {
    if (isSuccess && starshipsData) {
      const newStarships: StarshipBasicProps[] = starshipsData.filter((e) => e !== null).map((s: StarshipDataProps) => ({
        id: getIDFromURL(s.url),
        name: s.name,
        model: s.model
      }))
      dispatch(setStarships(newStarships))
    }
  }, [isSuccess, data])

  return {
    isPending,
    isSuccess,
    isError,
    error,
    fetchNextPage,
    hasNextPage
  }
}