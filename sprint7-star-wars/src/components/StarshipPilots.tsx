/* eslint-disable react/react-in-jsx-scope */
import { usePilots } from '../hooks/usePilots'
import { SectionTitle } from './SectionTitle'
import { PilotsType } from '../global/types'

export const StarshipPilots = ({ pilotsLinks }: { pilotsLinks: string[] }) => {
  const pilots: PilotsType | null = usePilots(pilotsLinks)
  if (pilots !== null && pilots.length !== 0) {
    return (
      <section className='mb-10'>
        <SectionTitle>Pilots</SectionTitle>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-2">
          {pilots && (
            <>
            {pilots.map((pilot) => (
              <div key={pilot.id} className='md:w-1/5'>
                <img src={pilot.image} alt='pilot' className='rounded-t-xl w-full' />
                <h3 className='rounded-b-xl bg-zinc-800 uppercase text-center pt-2 pb-5 border-t-4 border-t-red-500'>{pilot.name}</h3>
              </div>
            ))}
            </>
          )}
        </div>
      </section>
    )
  }
}
