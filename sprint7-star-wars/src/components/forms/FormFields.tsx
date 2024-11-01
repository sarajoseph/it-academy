/* eslint-disable react/react-in-jsx-scope */
import { UseFormRegister } from 'react-hook-form'
import { UsernameIcon, EmailIcon, PasswordIcon } from '../icons/UserFieldsIcons'
import { FormRegisterInputs } from '../../global/types'

export const EmailField = ({register}: {register?: UseFormRegister<FormRegisterInputs>}) => {
  return (
    <div className="form-control w-full">
      <div className="label">
        <span className="label-text">Email</span>
      </div>
      <label className="input input-bordered flex items-center gap-2">
        <EmailIcon />
        { !register ? <input id="email" type="text" className="grow" /> :
          <input id="email" type="text" className="grow"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: 'Please enter a valid email',
              }
            })}
          />
        }
      </label>
    </div>
  )
}

export const PasswordField = ({register}: {register?: UseFormRegister<FormRegisterInputs>}) => {
  return (
    <div className="form-control w-full">
      <div className="label">
        <span className="label-text">Password</span>
      </div>
      <label className="input input-bordered flex items-center gap-2">
        <PasswordIcon />
        { !register ? <input id="password" type="password" className="grow" /> :
          <input id="password" type="password" className="grow"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 7,
                message: 'Password must be at least 7 characters'
              }
            })}
          />
        }
      </label>
    </div>
  )
}

export const UsernameField = ({register}: {register?: UseFormRegister<FormRegisterInputs>}) => {
  return (
    <div className="form-control w-full">
      <div className="label">
        <span className="label-text">Username</span>
      </div>
      <label className="input input-bordered flex items-center gap-2">
        <UsernameIcon />
        { !register ? <input id="username" type="text" className="grow" /> :
          <input id="username" type="text" className="grow" minLength={3} maxLength={10}
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters'
              },
              maxLength: {
                value: 10,
                message: 'Username must be at most 10 characters'
              }
            })}
          />
        }
      </label>
    </div>
  )
}

export const ErrorFieldMessage = ({message}: {message: string | undefined }) => (
  <p className="text-xs text-error">{message ?? 'Error'}</p>
)
