/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { Link, useRouteError } from 'react-router-dom'
export const NotFound = () => {
  const error: any = useRouteError()
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 max-w-3xl mx-auto py-20 h-screen">
      <h1 className="text-3xl font-bold mb-5">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <i className="text-gray-500">{error.statusText || error.message}</i>
      <Link to="/" className="btn btn-neutral max-w-fit mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        Ir a la página principal
      </Link>
    </div>
  )
}
