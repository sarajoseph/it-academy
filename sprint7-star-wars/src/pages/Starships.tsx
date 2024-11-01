/* eslint-disable react/react-in-jsx-scope */
import { Header } from '../components/header/Header'
import { Loading } from '../components/icons/Loading'
import { StarshipElement } from '../components/StarshipElement'
import { StarshipBasicProps } from '../global/types'
import { NotFound } from './NotFound'
import { useAppSelector } from '../hooks/store'
import { useStarships } from '../hooks/useStarships'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavMenu } from '../hooks/useNavMenu'

export const Starships = () => {
  useNavMenu(false, true)
  const starships = useAppSelector((state) => state.starships)
  const { isPending, isSuccess, isError, error, fetchNextPage, hasNextPage } = useStarships()

  if (isError && error) return <NotFound databaseError={error} />

  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-10 max-w-3xl mx-auto py-20">
        {isPending && <Loading />}
        {isSuccess && starships && starships.length > 0 && (
          <>
          {starships.map((starship: StarshipBasicProps) => (
            <StarshipElement key={starship.id} starship={starship} />
          ))}
          {
            <span className="mx-auto">
              <InfiniteScroll
                dataLength={starships.length}
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={<Loading />}
              > </InfiniteScroll>
            </span>
          }
          </>
        )}
      </main>
    </>
  )
}