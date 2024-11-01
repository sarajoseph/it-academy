import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { authFirebase } from '../firebase/client'
import { useAppDispatch, useAppSelector } from './store'
import { setUser, unsetUser } from '../store/user/slice'
import { UserProps } from '../global/types'

export const useUser = (): UserProps | null => {
  const user: UserProps | null = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    onAuthStateChanged(authFirebase, (firebaseUser) => {
      if (firebaseUser) {
        // User logueado
        dispatch(setUser({username: firebaseUser.displayName, email: firebaseUser.email}))
      } else {
        // User no logueado
        dispatch(unsetUser())
      }
    })
  }, [])

  return user
}