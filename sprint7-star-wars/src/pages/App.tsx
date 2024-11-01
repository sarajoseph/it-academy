/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../components/utils/ProtectedRoutes'
import { Home } from './Home'
import { Login } from './Login'
import { NotFound } from './NotFound'
import { Register } from './Register'
import { Starship } from './Starship'
import { Starships } from './Starships'

export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      element: <PrivateRoutes />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/starships',
          element: <Starships />,
          errorElement: <NotFound />
        },
        {
          path: '/starships/starship/:params',
          element: <Starship />,
          errorElement: <NotFound />
        },
      ]
    },
    {
      element: <PublicRoutes />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/login',
          element: <Login />,
          errorElement: <NotFound />
        },
        {
          path: '/register',
          element: <Register />,
          errorElement: <NotFound />
        },
      ]
    },
  ])

  return <RouterProvider router={router} />

}
