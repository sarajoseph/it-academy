/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { authFirebase } from '../../firebase/client'
import { userLogout } from '../../logic/users'
import { UserIcon } from '../icons/UserIcon'
import { LogoutIcon } from '../icons/LogoutIcon'
import { useUser } from '../../hooks/useUser'

export const UserMenu = () => {
  const user = useUser()

  return (
    <div className="flex w-full md:justify-end md:w-2/5">
    {authFirebase.currentUser !== null ?
      <div className="flex flex-row w-full justify-center md:justify-end items-center gap-y-2 md:gap-x-2">
      <UserIcon />
      <p>¡Hi <b className="capitalize ml">{user?.username}</b>!</p>
      <button onClick={() => userLogout()} className="hover:opacity-80"><LogoutIcon /></button>
      </div>
    :
      <div className="flex flex-col w-full md:flex-row md:justify-end items-center gap-y-2 md:gap-x-2">
      <Link to="/login" className="uppercase">Login</Link>
      <span className="px-4 text-zinc-700 hidden md:block">{` // `}</span>
      <Link to="/register" className="uppercase">Sign up</Link>
      </div>
    }
    </div>
  )
}
