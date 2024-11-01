import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { authFirebase } from '../firebase/client'
import { FirebaseError } from 'firebase/app'

export const useLogin = () => {
  const [ loginStatus, setLoginStatus ] = useState<string | null>(null)
  const login = async (email: string, password: string) => {
    setLoginStatus('loading')
    try {
      await signInWithEmailAndPassword(authFirebase, email, password)
      setLoginStatus('success')
    } catch (error) {
      const firebaseError = error as FirebaseError
      console.log(firebaseError)
      let errorMessage = firebaseError.message
      switch(firebaseError.code) {
        case 'auth/invalid-email':
          errorMessage = 'Email is incorrect'
          break
        case 'auth/invalid-credential':
          errorMessage = 'Password is incorrect. It must be a string with at least six characters.'
          break
        case 'auth/missing-password':
          errorMessage = 'Password is missing'
          break
      }
      setLoginStatus(errorMessage)
    }
  }

  return { loginStatus, login }
}