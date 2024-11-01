/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { StarshipBasicProps } from '../global/types'

export const StarshipElement = ({ starship }: { starship: StarshipBasicProps }) => {
  return (
    <Link to={`/starships/starship/${starship.id}`} className="bg-zinc-900 p-4 hover:bg-zinc-800 transition duration-500">
      <p className="uppercase font-bold">{starship.name}</p>
      <p className="text-sm	">{starship.model}</p>
    </Link>
  )
}