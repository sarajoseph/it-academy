import { useContext } from 'react'
import { Graph } from './Graph'
import { WeeklyExpensesContext } from '../context/WeeklyExpensesContext'
import { useTranslation } from 'react-i18next'

export const WeeklyExpenses = () => {
  const { t } = useTranslation()
  const { currentWeek, todayExpenses, percentageDiff } = useContext(WeeklyExpensesContext)
  const qOfWeeks = currentWeek > 1 ? t('chart.title_prev_week1') + currentWeek + t('chart.title_prev_week2_plural') : t('chart.title_prev_week1') + currentWeek + t('chart.title_prev_week2_singular')
  const title = currentWeek === 0 ? t('chart.title') : qOfWeeks
  return (
    <section className='bg-white rounded-lg px-6 py-8 flex flex-col gap-y-6'>
      <h1 className='text-2xl font-bold text-center md:text-left'>{title}</h1>
      <Graph />
      <footer className='flex flex-col items-end gap-y-2 border-t-2 pt-6 md:flex-row md:justify-between md:items-center md:gap-y-0'>
        <div className='flex flex-col text-right md:text-left'>
          <p>{t('today_expenses')}</p>
          <p className='text-3xl font-bold'>{todayExpenses} €</p>
        </div>
        <div className='flex flex-col text-right text-sm'>
          <p className='font-bold'>{parseInt(percentageDiff) > 0 ? '+' : ''}{percentageDiff}%</p>
          <p>{t('compared_to_yesterday')}</p>
        </div>
      </footer>
    </section>
  )
}