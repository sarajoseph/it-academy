/* eslint-disable react/react-in-jsx-scope */
import { useParams } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { NotFound } from './NotFound'
import { Loading } from '../components/icons/Loading'
import { StarshipDetails } from '../components/StarshipDetails'
import { useStarship } from '../hooks/useStarship'
import { StarshipPilots } from '../components/StarshipPilots'
import { StarshipFilms } from '../components/StarshipFilms'
import { useNavMenu } from '../hooks/useNavMenu'

export const Starship = () => {
  useNavMenu(false, true)
  const { params } = useParams()
  const starshipID = params !== undefined ? params : ''
  const { status, error, starshipData } = useStarship(starshipID)

  if (status === 'error' && error) return <NotFound databaseError={error} />

  return (
    <>
      <Header />
      <main className='flex flex-col mx-auto py-8 px-12'>
        {status === 'pending' && <Loading />}
        {status === 'success' && starshipData &&
          <>
            <StarshipDetails starshipData={{...starshipData}} />
            <StarshipPilots pilotsLinks={starshipData.pilots} />
            <StarshipFilms filmsLinks={starshipData.films} />
          </>
        }
      </main>
    </>
  )
}