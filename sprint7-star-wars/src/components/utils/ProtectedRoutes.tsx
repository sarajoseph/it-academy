/* eslint-disable react/react-in-jsx-scope */
import { Navigate, Outlet } from 'react-router-dom'
import { getLoginWithPreviousUrl, getURLAfterLogin } from '../../logic/main'
import { useAppSelector } from '../../hooks/store'

// User without login can not access to starship pages
export const PrivateRoutes = () => {
  const user = useAppSelector((state) => state.user)
  const navigateTo = getLoginWithPreviousUrl()
  if (!user) {
    return <Navigate to={navigateTo} replace />
  }
  return <Outlet />
}

// User with login can not access to login and register pages
export const PublicRoutes = () => {
  const user = useAppSelector((state) => state.user)
  const urlAfterLogin: string = getURLAfterLogin() ?? '/'
  if (user) {
    return <Navigate to={urlAfterLogin} replace />
  }
  return <Outlet />
}