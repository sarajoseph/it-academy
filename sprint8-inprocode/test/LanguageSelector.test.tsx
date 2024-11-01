import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { LanguageSelector } from '../src/components/LanguageSelector'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n' // tu configuración de i18n
import React from 'react'

describe('LanguageSelector', () => {
  it('should change language when clicking on buttons', async () => {
    // Espía la función changeLanguage de i18n
    const changeLanguageSpy = vi.spyOn(i18n, 'changeLanguage')

    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelector />
      </I18nextProvider>
    )

    const btnEn = screen.getByTestId('button-en')
    const btnEs = screen.getByTestId('button-es')
    const btnCa = screen.getByTestId('button-ca')

    // Haz clic en los botones y verifica que changeLanguage fue llamado con el idioma correcto
    btnEn.click()
    expect(changeLanguageSpy).toHaveBeenCalledWith('en')

    btnEs.click()
    expect(changeLanguageSpy).toHaveBeenCalledWith('es')

    btnCa.click()
    expect(changeLanguageSpy).toHaveBeenCalledWith('ca')

    // Limpia el espía
    changeLanguageSpy.mockRestore()
  })
})
