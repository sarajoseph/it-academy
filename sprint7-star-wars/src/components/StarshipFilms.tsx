/* eslint-disable react/react-in-jsx-scope */
import { FilmsType } from '../global/types'
import { useFilms } from '../hooks/useFilms'
import { SectionTitle } from './SectionTitle'

export const StarshipFilms = ({ filmsLinks }: { filmsLinks: string[] }) => {
  const films: FilmsType | null = useFilms(filmsLinks)
  if (films !== null && films.length !== 0) {
    return (
      <section className='mb-10'>
        <SectionTitle>Films</SectionTitle>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-2">
            {films && (
              <>
              {films.map((film) => (
                <div key={film.id} className='md:w-1/5'>
                  <img src={film.image} alt='film' className='rounded-t-xl w-full' />
                  <div className='rounded-b-xl bg-zinc-800 text-center pt-2 pb-5 border-t-4 border-t-red-500'>
                    <h3 className='uppercase'>{film.title}</h3>
                    <p>Episode {film.episode_id}</p>
                  </div>
                </div>
              ))}
              </>
            )}
          </div>
      </section>
    )
  }
}
