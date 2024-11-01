/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'

export const NavMenuLink = ({ active, url, children, handleClick }: { active: boolean, url: string, children: string, handleClick?: any }) => {
  const style = active ? 'px-6 py-2 border-l border-r border-zinc-800 border-b-2 border-b-blue-600 font-bold' : 'px-6 py-2 border-l border-r border-zinc-800'
  return (
    <Link to={url} className={style} onClick={handleClick}>{children}</Link>
  )
}