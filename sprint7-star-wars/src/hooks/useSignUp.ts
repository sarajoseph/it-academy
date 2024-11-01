/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { authFirebase } from '../firebase/client'
import { useAppDispatch } from './store'
import { setUser } from '../store/user/slice'

export const useSignUp = () => {
  const [ signUpStatus, setSignUpStatus ] = useState<string | null>(null)
  const dispatch = useAppDispatch()

  const handleSignUpSuccess = async (displayName: string) => {
    try {
      if (authFirebase.currentUser) {
        await updateProfile(authFirebase.currentUser, { displayName })
        await authFirebase.currentUser.reload()
        dispatch(
          setUser({
            username: authFirebase.currentUser.displayName,
            email: authFirebase.currentUser.email,
          })
        )
        setSignUpStatus('success')
      }
    } catch (error: any) {
      console.log(error)
      setSignUpStatus(error.message)
    }
  }

  const signUp = async (displayName: string, email: string, password: string) => {
    console.log('signUp')
    setSignUpStatus('loading')
    try {
      await createUserWithEmailAndPassword(authFirebase, email, password)
      await handleSignUpSuccess(displayName)
    } catch (error: any) {
      console.log(error)
      const errorMessage: string = (error.code === 'auth/email-already-in-use') ? 'There is already a user registered with this email' : error.message
      setSignUpStatus(errorMessage)
    }
  }

  return { signUpStatus, signUp }
}