/* eslint-disable @typescript-eslint/no-explicit-any */
import { signOut } from 'firebase/auth'
import { authFirebase } from '../firebase/client'

export const userLogout = () => {
  signOut(authFirebase).then(() => {
    console.log('Logout successful')
  }).catch((error) => {
    console.log(error)
    console.log(error.code)
    console.log(error.message)
  })
}