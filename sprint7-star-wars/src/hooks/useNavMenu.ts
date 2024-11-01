import { useEffect } from 'react'
import { setHomePageIsActive } from '../store/homePageIsActive/slice'
import { setStarshipsPageIsActive } from '../store/starshipsPageIsActive/slice'
import { useAppDispatch } from './store'

export const useNavMenu = (homePageValue: boolean = false, starshipPageValue: boolean = false) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setStarshipsPageIsActive(starshipPageValue))
    dispatch(setHomePageIsActive(homePageValue))
  })
}