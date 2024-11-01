import { LanguageSelector } from '../components/LanguageSelector'
import { TotalBalance } from '../components/TotalBalance'
import { WeeklyExpenses } from '../components/WeeklyExpenses'

export const App = () => {
  return (
    <main className='bg-[#f8eadd] h-screen flex justify-center items-center'>
      <div className='w-full max-w-screen-sm flex flex-col gap-y-4'>
        <LanguageSelector />
        <TotalBalance />
        <WeeklyExpenses />
      </div>
    </main>
  )
}
