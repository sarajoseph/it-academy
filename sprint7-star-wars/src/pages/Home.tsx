/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { useNavMenu } from '../hooks/useNavMenu'
import { useGif } from '../hooks/useGif'
import { HomeDescription } from '../components/home/HomeDescription'

export const Home = () => {
  useNavMenu(true, false)
  const { gifIsSuccess, setRandomGif, gif } = useGif()

  return (
		<>
		<Header />
    <main className="flex flex-col items-center gap-y-10 max-w-3xl mx-auto py-20 text-zinc-500">
      <HomeDescription
        gif={gif}
        gifIsSuccess={gifIsSuccess} />
      <div className='flex flex-col gap-4 justify-center md:flex-row'>
        <Link to="/starships" className="btn btn-neutral mx-auto w-fit">
          Go to Starships
        </Link>
        {gifIsSuccess && gif &&
        <button onClick={setRandomGif} className="btn btn-neutral mx-auto w-fit">
          Get a random gif
        </button>
        }
      </div>
      {gifIsSuccess && gif &&
      <img src={`https://media.giphy.com/media/${gif.id}/giphy.gif`} alt={gif.alt_text} />
      }
    </main>
		</>
  )
}
