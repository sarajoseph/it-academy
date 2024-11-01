/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { EmailField, PasswordField } from '../components/forms/FormFields'
import { useEffect, useState } from 'react'
import { Loading } from '../components/icons/Loading'
import { ErrorIcon } from '../components/icons/ErrorIcon'
import { useLogin } from '../hooks/useLogin'
import { useNavMenu } from '../hooks/useNavMenu'

export const Login = () => {
  useNavMenu()
  const [ status, setStatus ] = useState<null | string>(null)
  const { loginStatus, login } = useLogin()

  useEffect(() => {
    setStatus(loginStatus)
  }, [loginStatus])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const password = (form.elements.namedItem('password') as HTMLInputElement).value
    await login(email, password)
  }

  return (
    <>
    <Header />
    <main className="flex flex-col items-center justify-center gap-y-2 max-w-xs mx-auto py-20">
      <h1 className="text-3xl font-bold mb-5">Login</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-full gap-y-2">
        <EmailField />
        <PasswordField />
        {status !== null && status !== 'success' && status !== 'loading' &&
          <div role="alert" className="alert alert-error text-sm"> <ErrorIcon /> <span>{status}</span></div>
        }
        <div className="flex flex-col gap-y-2 mt-5">
          <button className="btn btn-primary">{status === 'loading' ? <Loading size='loading-sm'/> : 'Login'}</button>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </form>
    </main>
    </>
  )
}
