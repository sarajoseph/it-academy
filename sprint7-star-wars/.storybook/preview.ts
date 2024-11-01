import type { Preview } from '@storybook/react'
import '../src/assets/css/tailwind-output.css'
import { withThemeByClassName } from '@storybook/addon-themes'

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),
]