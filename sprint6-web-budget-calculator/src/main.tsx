/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Calculator } from './pages/Calculator'
import { Home } from './pages/Home'
import { BudgetUrl } from './pages/BudgetUrl'
import { NotFound } from './pages/NotFound'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/calculator',
    element: <Calculator />
  },
  {
    path: '/budget/:params',
    element: <BudgetUrl />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
