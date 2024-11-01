/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { EmailField, ErrorFieldMessage, PasswordField, UsernameField } from '../components/forms/FormFields'
import { useEffect, useState } from 'react'
import { Loading } from '../components/icons/Loading'
import { ErrorIcon } from '../components/icons/ErrorIcon'
import { SuccessIcon } from '../components/icons/SuccessIcon'
import { FieldValues, useForm } from 'react-hook-form'
import { FormRegisterInputs } from '../global/types'
import { useSignUp } from '../hooks/useSignUp'
import { useNavMenu } from '../hooks/useNavMenu'

export const Register = () => {
  useNavMenu()
  const [ status, setStatus ] = useState<null | string>(null)
  const { signUpStatus, signUp } = useSignUp()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegisterInputs>()

  useEffect(() => {
    setStatus(signUpStatus)
  }, [signUpStatus])

  const onSubmit = async (data: FieldValues) => {
    await signUp(data.username, data.email, data.password)
    setStatus(signUpStatus)
  }

  return (
		<>
		<Header />
    <main className="flex flex-col items-center justify-center gap-y-2 max-w-xs mx-auto py-20">
      <h1 className="text-3xl font-bold mb-5">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-y-2">
        <UsernameField register={register} />
        {errors.username &&
          <ErrorFieldMessage message={errors.username.message} />
        }
        <EmailField register={register} />
        {errors.email &&
          <ErrorFieldMessage message={errors.email.message} />
        }
        <PasswordField register={register} />
        {errors.password &&
          <ErrorFieldMessage message={errors.password.message} />
        }
        {status !== null && status !== 'success' && status !== 'loading' &&
          <div role="alert" className="alert alert-error text-sm"> <ErrorIcon /> <span>{status}</span></div>
        }
        {status === 'success' &&
          <div role="alert" className="alert alert-success text-sm"> <SuccessIcon /> <span>Registration has been completed successfully</span></div>
        }
        <div className="flex flex-col gap-y-2 mt-5">
          <button className="btn btn-primary">{status === 'loading' ? <Loading size='loading-sm'/> : 'Register'}</button>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </form>
    </main>
		</>
  )
}
