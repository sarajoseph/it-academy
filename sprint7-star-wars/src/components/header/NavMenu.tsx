/* eslint-disable react/react-in-jsx-scope */
import { useAppSelector } from '../../hooks/store'
import { NavMenuLink } from './NavMenuLink'
export const NavMenu = () => {
  const homePageIsActive = useAppSelector((state) => state.homePageIsActive)
  const starshipsPageIsActive = useAppSelector((state) => state.starshipsPageIsActive)
  return (
    <div className="flex justify-center items-center border-t border-b border-zinc-800 uppercase">
      <NavMenuLink url='/' active={homePageIsActive}>Home</NavMenuLink>
      <NavMenuLink url='/starships' active={starshipsPageIsActive}>Starships</NavMenuLink>
    </div>
  )
}