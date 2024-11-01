import { LeftArrow } from './icons/LeftArrow'
import { RightArrow } from './icons/RightArrow'
import { useTranslation } from 'react-i18next'
import { useWeek } from '../hooks/useWeek'
import { WeeklyExpensesContext } from '../context/WeeklyExpensesContext'
import { useContext } from 'react'

export const TotalBalance = () => {
  const { t } = useTranslation()
  const { totalBalance } = useContext(WeeklyExpensesContext)
  const { displayPrevWeek, displayNextWeek } = useWeek()

  return (
    <section className='bg-[#ec765c] rounded-lg px-6 py-8 text-white items-center flex flex-col-reverse gap-y-2 md:flex-row md:justify-between md:gap-y-0'>
      <div className='flex flex-col'>
        <p>{t('total_balance')}</p>
        <p className='text-2xl font-bold'>{totalBalance} €</p>
      </div>
      <div className='flex flex-row gap-x-2'>
        <button onClick={displayPrevWeek} className='cursor-pointer'>
          <LeftArrow />
        </button>
        <button onClick={displayNextWeek} className='cursor-pointer'>
          <RightArrow />
        </button>
      </div>
    </section>
  )
}