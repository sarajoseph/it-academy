/* eslint-disable react/react-in-jsx-scope */
import { StarWarsLogo } from '../svg/StarWarsLogo'
import { NavMenu } from './NavMenu'
import { UserMenu } from './UserMenu'
export const Header = () => {
  return (
    <header className="flex flex-col gap-y-5 text-zinc-400">
      <div className="flex flex-col md:flex-row items-center py-5 px-8">
        <div className="flex md:justify-end md:w-3/5">
          <StarWarsLogo />
        </div>
        <UserMenu />
      </div>
      <NavMenu />
    </header>
  )
}
