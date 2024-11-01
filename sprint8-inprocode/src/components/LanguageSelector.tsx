import { useTranslation } from 'react-i18next'

export const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <section className='flex flex-col gap-2 md:flex-row md:justify-end'>
      <button type='button' onClick={() => changeLanguage('en')} aria-label='Select English' data-testid='button-en'>
        <span className='fi fi-gb fis text-3xl rounded-full' aria-hidden='true'></span>
      </button>
      <button type='button' onClick={() => changeLanguage('es')} aria-label='Select Spanish' data-testid='button-es'>
        <span className='fi fi-es fis text-3xl rounded-full' aria-hidden='true'></span>
      </button>
      <button type='button' onClick={() => changeLanguage('ca')} aria-label='Select Catalan' data-testid='button-ca'>
        <span className='fi fi-es-ct fis text-3xl rounded-full' aria-hidden='true'></span>
      </button>
    </section>
  )
}